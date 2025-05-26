import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

// GET: List all students
export async function GET() {
  // Check if we're in a build/prerender context
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    // Return empty data during build to prevent MongoDB connection issues
    return NextResponse.json([]);
  }
  
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const students = await db.collection('users').find({ role: 'student' }).toArray();
    await client.close();
    return NextResponse.json(students);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}
