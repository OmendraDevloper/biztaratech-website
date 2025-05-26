import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

// GET: List all classes
export async function GET() {
  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);
  const classes = await db.collection('classes').find({}).toArray();
  await client.close();
  return NextResponse.json({ success: true, classes });
}

// POST: Create a new class
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.title || !body.date || !body.time || !body.teacher) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const result = await db.collection('classes').insertOne({
      title: body.title,
      date: body.date,
      time: body.time,
      teacher: body.teacher,
      students: [],
      createdAt: new Date()
    });
    await client.close();
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

// PUT: Update a class (including students assignment)
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body._id) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    // Allow updating title, date, time, teacher, and students
    const updateFields: any = {};
    if (body.title) updateFields.title = body.title;
    if (body.date) updateFields.date = body.date;
    if (body.time) updateFields.time = body.time;
    if (body.teacher) updateFields.teacher = body.teacher;
    if (body.students) updateFields.students = body.students;
    await db.collection('classes').updateOne(
      { _id: new ObjectId(body._id) },
      { $set: updateFields }
    );
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

// DELETE: Delete a class
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body._id) {
      return NextResponse.json({ success: false, error: 'Missing class id.' }, { status: 400 });
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    await db.collection('classes').deleteOne({ _id: new ObjectId(body._id) });
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
