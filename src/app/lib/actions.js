'use server'

import { sql } from '@vercel/postgres';
import { getUserID } from './data';

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
