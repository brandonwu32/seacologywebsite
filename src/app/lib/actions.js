'use server'

import { sql } from '@vercel/postgres';
import { getUserID } from './data';
import bcrypt from 'bcrypt';




const isValidUrl = urlString=> {
    try {
        return Boolean(new URL(urlString));
    }
    catch(e){
        return false;
    }
}

export async function createUpdate(type, project_id, date, field_rep_id) {

    try {

        await sql`
        INSERT INTO updates (type, time, project_id, field_rep_id)
        VALUES (${type}, ${date}, ${project_id}, ${field_rep_id})
        `;
    } catch(error) {
        throw new Error('An error occured')
    }
}

export async function createProject(status, project_name, date) {


    try {
        const field_rep_id = await getUserID();

        await sql`
        INSERT INTO projects (status, project_name, field_rep_id, date)
        VALUES (${status}, ${project_name}, ${field_rep_id}, ${date})
        `;
    } catch(error) {
        throw new Error("An error occured")
    }
}

export async function deleteContent(content) {
    try {
      const deleteResult = await sql`
          DELETE FROM guidelines
          WHERE content = ${content}
          RETURNING *;
      `;

      if (deleteResult.count === 0) {
          return { message: 'No matching content found to delete' };
      }
      const updateResult = await sql`
        UPDATE guidelines
        SET position = position - 1
        WHERE position > ${position};
          `;

      return { message: 'Content deleted successfully', deleted: deleteResult.rows[0] };
    } catch (error) {
      console.error('Error deleting or updating content:', error);
      throw new Error('An error occurred while deleting and updating the content');
    }
  }

  export async function addContent(content, type, position, page) {
    try{
      const updateResult = await sql`
          UPDATE guidelines
          SET position = position + 1
          WHERE position >= ${position};
          `;
      const insertResult = await sql`
        INSERT INTO guidelines (content, type, position, page)
        VALUES (${content}, ${type}, ${position}, ${page})
        RETURNING *;
      `;
      return { message: 'New guideline added successfully', inserted: insertResult.rows[0] };
    } catch (error) {
        console.error('Error adding new guideline:', error);
        throw new Error('An error occurred while adding the new guideline');
    }
  }

  export async function putContent(newContent, newType, id) {
    try {
      const updateData = await sql`
      UPDATE guidelines
      SET content = ${newContent}, type=${newType}
      WHERE id=${id};
      `
    } catch (error){
      console.error('Error updating guideline', error);
    } finally {
        console.log(`Successfully Updated ${id}`)
    }
  }

export async function addMember(name, email, position, password, admin, image) {

    try {
        let tempImage = image;

        if (!name || !email || !position) {
            throw new Error("Missing fields: name, email, or position");
        }

        if (!isValidUrl(image)) {
            tempImage = 'https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo'
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const data = await sql`
            INSERT INTO users (name, email, position, admin, password, image)
            VALUES (${name}, ${email}, ${position}, ${admin}, ${hashPassword}, ${tempImage})
            RETURNING *;
        `;
        return data.rows[0];
    } catch (error) {
    }
}

export async function deleteMember(userId) {
    try {

        const result = await sql`
            DELETE FROM users
            WHERE id = ${userId}
            RETURNING *;
        `;

        if (result.rowCount === 0) {
            throw new Error(`No member found with id: ${userId}`);
        }

        return result.rows[0];
    } catch (error) {
        console.error("Error deleting member:", error);
    }
}



export async function updateMember(userId, name, position, email, image) {
    try {

        let tempImage = image;

        if (!userId) {
            throw new Error("User ID is required for updating member information.");
        }

        if (!isValidUrl(image)) {
            tempImage = 'https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo'
        }

        const updateResult = await sql`
            UPDATE users
            SET
                name = ${name || null},
                position = ${position || null},
                email = ${email || null},
                image = ${tempImage || null}
            WHERE id = ${userId};
        `;



        if (updateResult.rowCount === 0) {
            throw new Error(`No user found with ID: ${userId}`);
        }

        return { success: true, data: updateResult.rows[0] };
    } catch (error) {
    }
}

