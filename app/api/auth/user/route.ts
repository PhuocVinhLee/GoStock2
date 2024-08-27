import { fakeUsers } from "@/lib/fakeUsers";
import { sign } from "jsonwebtoken";
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get('authToken')?.value; // Get the HTTP-only cookie value
  
    if (token) {
      try {
        const decoded = verify(token, 'it-lost-time'); // Verify the token
  
        // Return user information or a success status
        return NextResponse.json({ authenticated: true, user: decoded });
      } catch (err) {
        // Handle token verification errors
        return NextResponse.json({ authenticated: false, message: 'Invalid token' }, { status: 401 });
      }
    } else {
      return NextResponse.json({ authenticated: false, message: 'No token provided' }, { status: 401 });
    }
  }
