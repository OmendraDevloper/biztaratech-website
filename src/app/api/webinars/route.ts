import { MongoClient, ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'biztara';

// Get all active webinars
export async function GET() {
    try {
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        const webinars = await db.collection('webinars')
            .find({ active: true })
            .sort({ datetime: 1 })
            .toArray();
        await client.close();
        return NextResponse.json({ success: true, webinars });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

// Create a new webinar
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        
        // Add the new webinar with all required fields
        await db.collection('webinars').insertOne({
            ...body,
            active: true,
            createdAt: new Date(),
            registrations: []
        });
        
        await client.close();
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

// Update a webinar
export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { _id, ...updateData } = body;

        if (!_id) {
            return NextResponse.json(
                { success: false, error: 'Webinar ID is required' },
                { status: 400 }
            );
        }

        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        
        const result = await db.collection('webinars').updateOne(
            { _id: new ObjectId(_id) },
            { $set: updateData }
        );

        await client.close();

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { success: false, error: 'Webinar not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

// Delete a webinar
export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        const { _id } = body;

        if (!_id) {
            return NextResponse.json(
                { success: false, error: 'Webinar ID is required' },
                { status: 400 }
            );
        }

        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        
        const result = await db.collection('webinars').deleteOne({
            _id: new ObjectId(_id)
        });

        await client.close();

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { success: false, error: 'Webinar not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
