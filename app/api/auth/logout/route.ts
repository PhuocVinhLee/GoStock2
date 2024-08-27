
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  // Clear the authToken cookie by setting an expired date
  const cookieStore = cookies();
  const cookie = cookieStore.get('authToken');

  if (cookie) {
    // Set the token in an HTTP-only cookie with an expired date
    return new Response(
      JSON.stringify({ message: 'Logout successful' } ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `authToken=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`, // Expire the cookie
        },
      }
    );
  } else {
    return new Response(
      JSON.stringify({ message: 'No token found' }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
