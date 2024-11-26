import { db } from '@vercel/postgres';
import { guidelinestable } from '../lib/placeholder-data';

import { users, updates } from '../lib/placeholder-data';
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
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      position TEXT NOT NULL, 
      admin BOOLEAN NOT NULL
    );
  `}));
  
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users (name, email, position, admin)
        VALUES (${user.name}, ${user.email}, ${user.position}, ${user.admin})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedGuidelines;
}

async function seedUpdates() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS updates (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      type VARCHAR(255) NOT NULL,
      time TIMESTAMP NOT NULL,
      project_id UUID NOT NULL,
      field_rep_id UUID NOT NULL
    );
  `;
  
  const insertedUpdates = await Promise.all(
    updates.map(async (update) => {
      return client.sql`
        INSERT INTO updates (type, time, project_id, field_rep_id)
        VALUES (${update.type}, ${update.time}, ${update.project_id}, ${update.field_rep_id})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUpdates;
}

export async function GET() {
  try {
    console.log("Before Begin");
    await client.sql`BEGIN`;

    console.log("Seeding Guidelines...")
    // await seedGuidelines()
    
    console.log("Seeding Users...");
    // await seedUsers();

    console.log("Seeding Updates....");
    // await seedUpdates();

    console.log("Before Commit");
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error("Error during seeding:", error);
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
