import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the services page or its sub-routes
  if (request.nextUrl.pathname.startsWith('/services')) {
    // Check the feature flag (server-side only, no NEXT_PUBLIC prefix)
    const servicesEnabled = process.env.FEATURE_SERVICES === 'true'
    
    if (!servicesEnabled) {
      // Redirect to 404 when feature is disabled
      return NextResponse.rewrite(new URL('/404', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/services/:path*',
}