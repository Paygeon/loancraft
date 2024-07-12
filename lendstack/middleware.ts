// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/sign-in', '/sign-up'];

export default async function handler(req: NextRequest, event?: any) {
  const clerkResponse = await clerkMiddleware()(req, event);

  // If it's a public route, return the Clerk response
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return clerkResponse;
  }

  // Check if clerkResponse exists and has a userId
  if (!clerkResponse || !('userId' in clerkResponse)) {
    const signInUrl = new URL('/sign-in', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Continue the request if the user is authenticated
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/(api|trpc)(.*)", // Match all API and trpc routes
    "/fintech",        // Match the /fintech route
  ],
};
