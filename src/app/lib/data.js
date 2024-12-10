'use server'

import { sql } from '@vercel/postgres';

const bcrypt = require('bcrypt')

export async function fetchGuidelinesPage() {
    try {
        const page = '/guidelines';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page} ORDER BY position ASC`;
        console.log("Fetched data successfully")
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchOverview() {
    try {
        const page = '/projectmanagement/pm-overview';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page}`;
        console.log("Fetched data successfully")
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchStep1() {
    try {
        const page = '/projectmanagement/step1';
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page} `;
        console.log("Fetched data successfully")
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}

export async function fetchIdentifyingproj() {
    try {
        const page = '/projectmanagement/identifyingproj';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page}`;
        console.log("Fetched data successfully")
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}

export async function fetchNewprojproposal() {
    try {
        const page = '/projectmanagement/newprojproposal';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page} `;
        console.log("Fetched data successfully")
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}

export async function fetchStep2() {
    try {
        const page = '/projectmanagement/step2';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page} `;
        console.log("Fetched data successfully")
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchStep3() {
    try {
        const page = '/projectmanagement/step3';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page}`;
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchStep4() {
    try {
        const page = '/projectmanagement/step4';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page} `;
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchStep5() {
    try {
        const page = '/projectmanagement/step5';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page}`;
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchStep6() {
    try {
        const page = '/projectmanagement/step6';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page} `;
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchFinances() {
    try {
        const page = '/finances';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page}`;
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}
export async function fetchContact() {
    try {
        const page = '/contact';
        const data = await sql`SELECT * FROM guidelines WHERE page = ${page}`;
        return data.rows;
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}

export async function fetchMembers() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await sql`SELECT * FROM users`
        console.log("Fetched data successfully")
        return data.rows
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
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

export async function deleteMember(email) {
    try {
        if (!email) {
            throw new Error("Missing required field: email");
        }

        const result = await sql`
            DELETE FROM users
            WHERE email = ${email}
            RETURNING *;
        `;

        if (result.rowCount === 0) {
            throw new Error(`No member found with email: ${email}`);
        }

        console.log("Deleted member successfully:", result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting member:", error);
        throw new Error("Error deleting member");
    }
}