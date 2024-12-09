import { db } from '@vercel/postgres';
import { guidelinestable, users } from '../lib/placeholder-data';

const client = await db.connect();


async function seedGuidelines() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS guidelines (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      type TEXT NOT NULL,
      content TEXT NOT NULL,
      page TEXT NOT NULL,
      position INT NOT NULL
    );
  `;

  console.log("created successfully")

  const insertedGuidelines = await Promise.all(
    guidelinestable.map(async (guideline) => {
      console.log(guideline);
      return client.sql`
        INSERT INTO guidelines (type, content, page, position)
        VALUES (${guideline.type}, ${guideline.content}, ${guideline.page}, ${guideline.position})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedGuidelines;
}

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      position TEXT NOT NULL,
      admin BOOLEAN NOT NULL
    );
  `;

const insertedUsers = await Promise.all(
  users.map(async (user) => {
    return client.sql`
      INSERT INTO users (name, email, password, position, admin)
      VALUES (${user.name}, ${user.email}, ${user.password}, ${user.position}, ${user.admin})
      ON CONFLICT (id) DO NOTHING;
    `;
  }),
);

return insertedUsers;
}

export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedUsers();
      await client.sql`COMMIT`;
      console.log("committed");
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }