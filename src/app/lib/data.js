'use server'

import { sql } from '@vercel/postgres';

export async function fetchGuidelineSearch(query) {
    try {
        const data = await sql `
            SELECT *
            FROM guidelines
            WHERE content ILIKE ${`%${query}%`}
            ORDER BY page, position`
        return data.rows
    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}

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

export async function fetchMembers() {
    try {
        const data = await sql`SELECT * FROM users`
        console.log("Fetched data successfully")
        return data.rows
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

export async function fetchUpdatesName(user_id) {
    try {
        const updates = await sql`SELECT * FROM updates WHERE field_rep_id=${`%${user_id}%`} ORDER BY time DESC`
        console.log('Fetched data')
        return updates.rows
    } catch (error) {
        console.log("An error occured", error)
        throw new Error('An error occured')
    }
}

export async function fetchUpdatesProject(project_id, user_id) {
    try {
        const updates = await sql`SELECT * FROM updates WHERE project_id=${`%${project_id}%`} AND field_rep_id=${`%${user_id}%`}} ORDER BY time DESC`
        console.log('Fetched data')
        return updates.rows
    } catch (error) {
        console.log("An error occured", error)
        throw new Error('An error occured')
    }
}

export async function getUserID() {
    return "97fe71f8-de46-4d42-8f39-9fdceba174ee" // returns a dummy user id, created so that we can test this function
}

export async function fetchProjectsWithName(name) {
    try {
        const field_rep_id = await sql`SELECT id FROM users WHERE name=${name}`
        const projects = await sql`SELECT * FROM projects WHERE field_rep_id=${field_rep_id.rows[0].id}`
        console.log('Fetched projects')
        return projects.rows
    } catch(error) {
        console.log("An error occured", error)
        throw new Error('An error occured')
    }
}

export async function fetchProjectsWithID(user_id) {
    try {
        const projects = await sql`SELECT * FROM projects WHERE field_rep_id=${user_id}`
        console.log('Fetched projects')
        return projects.rows
    } catch(error) {
        console.log("An error occured", error)
        throw new Error('An error occured')
    }
}


export async function isAuthenticated(user_id) {
    try {
        const data = await sql`SELECT * FROM users WHERE id=${user_id}`;
        console.log("Authenticated successfully");
        const userExists = data.rows.length > 0
        if (!userExists) {
            return [false, false]
        }
        const isAdmin = data.rows[0].admin === true;
        if (isAdmin) {
            return [true, true];
        } else {
            return [true, false]
        }

    } catch(error) {
        console.log("An error occurred", error)
        throw new Error("An error occurred")
    }
}



