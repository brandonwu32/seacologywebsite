'use server'

import { sql } from '@vercel/postgres';

export async function fetchMembers() {
    try {
        const data = await sql`SELECT * FROM users WHERE admin=FALSE`

        return data.rows
    } catch(error) {
        console.log("An error occurred", error)

        throw new Error("An error occurred")
    }
}

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