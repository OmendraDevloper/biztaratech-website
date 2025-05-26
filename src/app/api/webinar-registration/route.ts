import { MongoClient, ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'biztara';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { webinarId, name, email, phone } = body;

        if (!webinarId || !name || !email || !phone) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        
        try {
            // First try to find the webinar to include its details in registration
            const webinar = await db.collection('webinars').findOne({ _id: new ObjectId(webinarId) });
            
            if (!webinar) {
                return NextResponse.json(
                    { success: false, error: 'Webinar not found' },
                    { status: 404 }
                );
            }

            // Add registration to webinar_registrations collection with webinar details
            const registration = {
                webinarId: new ObjectId(webinarId),
                webinarTitle: webinar.title,
                webinarTopic: webinar.topic || webinar.title, // Fallback to title if topic isn't set
                name,
                email,
                phone,
                registeredAt: new Date(),
                webinarDate: webinar.datetime,
                webinarDuration: webinar.duration
            };

            const result = await db.collection('webinar_registrations').insertOne(registration);
            
            if (!result.acknowledged) {
                throw new Error('Failed to insert registration');
            }

            return NextResponse.json({ 
                success: true,
                message: `Successfully registered for ${webinar.title}`
            });
        } finally {
            await client.close();
        }
    } catch (error) {
        console.error('Webinar registration error:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error',
                details: error instanceof Error ? error.stack : undefined
            },
            { status: 500 }
        );
    }
}
