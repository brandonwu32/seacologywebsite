'use server'

import { sql } from '@vercel/postgres';
import { getUserID } from './data';
import bcrypt from 'bcrypt';

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
