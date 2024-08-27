// middleware.js
import { NextResponse } from "next/server";

import type { NextRequest } from 'next/server'
export function middleware(req: NextRequest) {
  const { cookies } = req;
  const token = cookies.get("authToken");

  // Check if the token exists, if so, redirect to the dashboard
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
} 
export const config = {
  matcher: [
    
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}