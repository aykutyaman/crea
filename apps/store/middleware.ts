import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('CreaJWT');

  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(TOKEN_SECRET));
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } else {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/products', '/products/:id*'],
};
