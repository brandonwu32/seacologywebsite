// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    name: 'Sophia',
    email: 'bro@nextmail.com',
    position: 'dev',
    admin: false
  },
  {
    name: 'Renata',
    email: 'bruh@nextmail.com',
    position: 'dev',
    admin: false
  },
  {
    name: 'Tanya',
    email: 'ayo@nextmail.com',
    position: 'PM',
    admin: true
  },
  {
    name: 'Habeeb',
    email: 'king@nextmail.com',
    position: 'dev',
    admin: false
  },
  {
    name: 'Bussy',
    email: 'Buss@nextmail.com',
    position: 'PM',
    admin: true
  },
  {
    name: 'Camila',
    email: 'quiet@nextmail.com',
    position: 'dev',
    admin: false
  },
];

const updates = [
  {
    type: 'status_change',
    time: new Date().toISOString(),
    project_id: '123e4567-e89b-12d3-a456-426614174000', // Replace with valid UUID
    field_rep_id: '234e5678-e89b-12d3-a456-426614174001', // Replace with valid UUID
  },
  {
    type: 'note_added',
    time: new Date().toISOString(),
    project_id: '123e4567-e89b-12d3-a456-426614174002', // Replace with valid UUID
    field_rep_id: '234e5678-e89b-12d3-a456-426614174003', // Replace with valid UUID
  },
  {
    type: 'status_update',
    time: new Date().toISOString(),
    project_id: '123e4567-e89b-12d3-a456-426614174004', // Replace with valid UUID
    field_rep_id: '234e5678-e89b-12d3-a456-426614174005', // Replace with valid UUID
  },
  {
    type: 'task_completed',
    time: new Date().toISOString(),
    project_id: '123e4567-e89b-12d3-a456-426614174006', // Replace with valid UUID
    field_rep_id: '234e5678-e89b-12d3-a456-426614174007', // Replace with valid UUID
  },
];

export { users, updates };

