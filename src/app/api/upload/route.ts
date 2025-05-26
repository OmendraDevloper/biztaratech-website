import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { success: false, error: 'No file uploaded' },
                { status: 400 }
            );
        }

        // Read the file as buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        // Create a unique filename
        const filename = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
        
        // Save to public/uploads directory
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const filePath = path.join(uploadDir, filename);
        
        await writeFile(filePath, buffer);
        
        // Return the public URL path
        return NextResponse.json({ 
            success: true, 
            filePath: `/uploads/${filename}` 
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to upload file' },
            { status: 500 }
        );
    }
}
