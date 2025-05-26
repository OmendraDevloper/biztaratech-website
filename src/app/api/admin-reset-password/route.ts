import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

export async function POST(req: NextRequest) {
  try {
    const { username, newPassword } = await req.json();
    if (!username || !newPassword) {
      return NextResponse.json({ success: false, error: 'Username and new password are required.' }, { status: 400 });
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const users = db.collection('users');
    const hashedPassword = await hash(newPassword, 10);
    const result = await users.updateOne(
      { username },
      { $set: { password: hashedPassword } }
    );
    await client.close();
    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: 'User not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
