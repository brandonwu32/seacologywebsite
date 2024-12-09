'use server'

import { sql } from '@vercel/postgres';

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

export async function isAuthenticated(user_id) {
    try {
        const data = await sql`SELECT * FROM users WHERE id=${user_id}`;
        console.log("Authenticated successfully");
        const userExists = data.rows.length > 0
        if (!userExists) {
            return (false, false)
        }
        const isAdmin = data.rows[0].status === 'admin'
        if (isAdmin) {
            return (true, true);
        } else {
            return (true, false)
        }

    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}