"use server"

import { db } from '@vercel/postgres';
import { guidelinestable } from '../lib/placeholder-data';

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

export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedGuidelines();
      await client.sql`COMMIT`;
      console.log("committed");
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }

export async function DELETE(content) {
  try {
    const deleteResult = await client.sql`
        DELETE FROM guidelines
        WHERE content = ${content}
        RETURNING *;
    `;

    if (deleteResult.count === 0) {
        return { message: 'No matching content found to delete' };
    }
    const updateResult = await client.sql`
      UPDATE guidelines
      SET position = position - 1
      WHERE position > ${position};
        `;

    return { message: 'Content deleted successfully', deleted: deleteResult.rows[0] };
  } catch (error) {
    console.log(error)
  }
}

export async function POST(content, type, position, page) {
  try{
    const updateResult = await client.sql`
        UPDATE guidelines
        SET position = position + 1
        WHERE position >= ${position};
        `;
    const insertResult = await client.sql`
      INSERT INTO guidelines (content, type, page, position)
      VALUES (${content}, ${type}, ${page}, ${position})
      RETURNING *;
    `;
    return { message: 'New guideline added successfully', inserted: insertResult.rows[0] };
  } catch (error) {
      console.error('Error adding new guideline:', error);
      throw new Error('An error occurred while adding the new guideline');
  }
}

export async function PUT(newcont) {
  try {
    const updateData = await client.sql`
    UPDATE guidelines
    SET content = `
  } catch (error){
    console.error('Error deleting guideline', error);
  }
}

