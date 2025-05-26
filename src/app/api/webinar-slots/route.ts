import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'biztara';

export async function GET() {
  // List all webinar slots
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const slots = await db.collection('webinar_registrations').find({ adminSlot: true }).toArray();
    await client.close();
    return NextResponse.json({ success: true, slots });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  // Update webinar slot
  try {
    const { _id, course, date, time } = await req.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    await db.collection('webinar_registrations').updateOne(
      { _id: new ObjectId(_id) },
      { $set: { course, date, time } }
    );
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  // Delete webinar slot
  try {
    const { _id } = await req.json();
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    await db.collection('webinar_registrations').deleteOne({ _id: new ObjectId(_id) });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
