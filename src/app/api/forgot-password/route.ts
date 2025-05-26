import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import crypto from 'crypto';
import { sendResetEmail } from './sendmail';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required.' }, { status: 400 });
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const users = db.collection('users');
    const user = await users.findOne({ email });
    if (!user) {
      await client.close();
      return NextResponse.json({ success: true, message: 'If an account with that email exists, a reset link has been sent.' });
    }
    // Generate secure token
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour
    await users.updateOne(
      { email },
      { $set: { resetToken: token, resetTokenExpires: expires } }
    );
    await client.close();
    // Send email
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const resetUrl = `${baseUrl}/forgot-password/reset?token=${token}&email=${encodeURIComponent(email)}`;
    await sendResetEmail({ to: email, resetUrl });
    return NextResponse.json({ success: true, message: 'If an account with that email exists, a reset link has been sent.' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
