'use server'

import { sql } from '@vercel/postgres';
import { getUserID } from './data';

export async function createUpdate(formData) {
    console.log(formData)
    const validatedFields = {
        project_id: formData.get('project-id'),
        time: formData.get('date'),
        type: formData.get('type'),
      };

    try {
        const field_rep_id = await getUserID()
        const time = new Date().toISOString()

        await sql`
        INSERT INTO updates (type, time, project_id, field_rep_id)
        VALUES (${type}, ${time}, ${project_id}, ${field_rep_id})
        `;
    } catch(error) {
        console.log('Error: ', error)
        throw new Error('An error occured')
    }
}
