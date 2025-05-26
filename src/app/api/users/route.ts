import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import { hash } from 'bcryptjs';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

export async function GET() {
  // List all users
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const users = await db.collection('users').find({}, { projection: { password: 0 } }).toArray();
    await client.close();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  // Update user (username, password)
  try {
    const { _id, username, password } = await req.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const update: any = {};
    if (username) update.username = username;
    if (password) update.password = await hash(password, 10);
    await db.collection('users').updateOne({ _id: new ObjectId(_id) }, { $set: update });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  // Delete user
  try {
    const { _id } = await req.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    await db.collection('users').deleteOne({ _id: new ObjectId(_id) });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
