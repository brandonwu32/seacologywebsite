'use server'

import { sql } from '@vercel/postgres';
import { getUserID } from './data';
import bcrypt from 'bcrypt';

export async function createUpdate(type, project_id, date, field_rep_id) {
    console.log("Type: ", type)
    console.log("Project id: ", project_id)
    try {

        await sql`
        INSERT INTO updates (type, time, project_id, field_rep_id)
        VALUES (${type}, ${date}, ${project_id}, ${field_rep_id})
        `;
    } catch(error) {
        console.log('Error: ', error)
        throw new Error('An error occured')
    }
}

export async function createProject(status, project_name, date) {
    console.log("Status: ", status)
    console.log("Project name: ", project_name)

    try {
        const field_rep_id = await getUserID();

        await sql`
        INSERT INTO projects (status, project_name, field_rep_id, date)
        VALUES (${status}, ${project_name}, ${field_rep_id}, ${date})
        `;
    } catch(error) {
        console.log("Error: ", error)
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

export async function addMember(name, email, position, password, admin) {
    console.log(name, email, position, password, admin)
    try {
        if (!name || !email || !position) {
            throw new Error("Missing fields: name, email, or position");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const data = await sql`
            INSERT INTO users (name, email, position, admin, password)
            VALUES (${name}, ${email}, ${position}, ${admin}, ${hashPassword})
            RETURNING *;
        `;
        console.log("Added member successfully:", data.rows[0]);
        return data.rows[0];
    } catch (error) {
        console.error("Error adding member:", error);
        throw new Error("Error adding member");
    }
}

export async function deleteMember(
    prevState,
    formData
) {
    try {
        const parsedFormData = Object.fromEntries(formData.entries());

        console.log(parsedFormData)
        if (!parsedFormData.user_id) {
            throw new Error("Missing required field: email");
        }

        const result = await sql`
            DELETE FROM users
            WHERE id = ${parsedFormData.user_id}
            RETURNING *;
        `;

        if (result.rowCount === 0) {
            throw new Error(`No member found with id: ${parsedFormData.user_id}`);
        }

        console.log("Deleted member successfully:", result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting member:", error);
        throw new Error("Error deleting member");
    }
}



export async function updateMember(userId, name, position, email, region) {
    console.log(userId)
    try {
        if (!userId) {
            throw new Error("User ID is required for updating member information.");
        }

        console.log("checked userID");

        const updateResult = await sql`
            UPDATE users
            SET 
                name = ${name || null},
                position = ${position || null},
                email = ${email || null},
                region = ${region || null}
            WHERE id = ${userId};
        `;

        console.log("ran SQL command");


        if (updateResult.rowCount === 0) {
            throw new Error(`No user found with ID: ${userId}`);
        }

        return { success: true, data: updateResult.rows[0] };
    } catch (error) {
        console.log("Error updating member:", error);
    }
}

