import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection('users');
    // Check if user already exists
    const existing = await collection.findOne({ $or: [ { email: body.email }, { username: body.username } ] });
    if (existing) {
      await client.close();
      return NextResponse.json({ success: false, error: 'User already exists' }, { status: 409 });
    }
    // Always hash the password before saving
    const hashedPassword = await hash(body.password, 10);
    await collection.insertOne({ ...body, password: hashedPassword, createdAt: new Date() });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
