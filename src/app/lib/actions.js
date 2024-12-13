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
