'use server'

import { sql } from '@vercel/postgres';
import { getUserID } from './data';
import { stat } from 'fs';

export async function createUpdate(type, project_id, date) {
    console.log("Type: ", type)
    console.log("Project id: ", project_id)
    try {
        const field_rep_id = await getUserID()

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
'use server'

import { sql } from '@vercel/postgres';

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
        VALUES (${type}, ${content}, ${page}, ${position})
        RETURNING *;
      `;
      return { message: 'New guideline added successfully', inserted: insertResult.rows[0] };
    } catch (error) {
        console.error('Error adding new guideline:', error);
        throw new Error('An error occurred while adding the new guideline');
    }
  }

  export async function putContent(newcont) {
    try {
      const updateData = await client.sql`
      UPDATE guidelines
      SET content = ${newcont};
      `
    } catch (error){
      console.error('Error deleting guideline', error);
    }
  }