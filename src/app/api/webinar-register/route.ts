import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'biztara';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection('webinar_registrations');
    await collection.insertOne({ ...body, createdAt: new Date() });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
