import { db } from '@vercel/postgres';
import { users } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      position TEXT NOT NULL, 
      admin BOOLEAN NOT NULL
    );
  `;
  
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users (name, email, position, admin)
        VALUES (${user.name}, ${user.email}, ${user.position}, ${user.admin})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}


export async function GET() {
    try {
      console.log("Before Begin");
      await client.sql`BEGIN`;
      console.log("Before Seed");
      await seedUsers();
      console.log("Before Commit");
      await client.sql`COMMIT`;

      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }