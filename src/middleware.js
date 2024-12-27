import { NextResponse } from 'next/server'
import { isAuthenticated } from './app/lib/data'

export default async function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/login')) {
    NextResponse.next()
  }

  const session_id = request.nextUrl.searchParams.get('session');


  if (session_id == undefined) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }

  const existsAndAdmin = await isAuthenticated(session_id)

  if (!existsAndAdmin[0]) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/admin') && existsAndAdmin[1]) {
    return NextResponse.next()
  }
  return NextResponse.next()
}


export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};