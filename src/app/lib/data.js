import { sql } from '@vercel/postgres';

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