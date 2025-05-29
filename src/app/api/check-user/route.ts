import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const identifier = searchParams.get('identifier');

  if (!identifier) {
    return NextResponse.json({ exists: false }, { status: 400 });
  }

  try {
    const client = await MongoClient.connect(uri, {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000
    });
    const db = client.db(dbName);
    const users = db.collection('users');
    
    const user = await users.findOne({
      $or: [
        { username: identifier },
        { email: identifier }
      ]
    });
    
    await client.close();
    
    return NextResponse.json({ exists: !!user });
  } catch (error) {
    console.error('Error checking user:', error);
    return NextResponse.json({ exists: false, error: 'Database error' }, { status: 500 });
  }
}
