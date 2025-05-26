import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

// GET: List all students
export async function GET() {
  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);
  const students = await db.collection('users').find({ role: 'student' }).toArray();
  await client.close();
  return NextResponse.json(students);
}
