"use server"

import { db } from '@vercel/postgres';

import { guidelines, users, updates, projects } from '../lib/placeholder-data';
import { time } from 'console';
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
    guidelines.map(async (guideline) => {
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

async function seedProjects() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
      project_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      field_rep_id UUID NOT NULL,
      time TIMESTAMP NOT NULL,
      status VARCHAR(255) NOT NULL,
      project_name VARCHAR(255) NOT NULL
    );
  `;

  const insertedProjects = await Promise.all(
    projects.map(async (project) => {
      return client.sql`
        INSERT INTO projects (field_rep_id, time, status, project_name)
        VALUES (${project.field_rep_id}, ${project.time}, ${project.status}, ${project.project_name})
        ON CONFLICT (project_id) DO NOTHING;
      `;
    }),
  );

  return insertedProjects;
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
      // await seedUsers();
      // await seedGuidelines();
      // await seedProjects();
      await seedUpdates();
      await client.sql`COMMIT`;
      console.log("committed");
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }