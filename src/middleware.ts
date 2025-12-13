import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();

  const csp = [
    "default-src 'self'",
    "img-src 'self' data:",
    "style-src 'self' 'unsafe-inline' https://unpkg.com",
    "font-src 'self' https://unpkg.com data:",
    `script-src 'self' 'nonce-${nonce}'`,
    "connect-src 'self'",
    "frame-src https://rutube.ru https://*.rutube.ru",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: "/:path*",
};
