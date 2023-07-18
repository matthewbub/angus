import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)'
  ]
};

export default function middleware(req) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.windmill.ooo, demo.localhost:3000)
  const hostname = req.headers.get('host') || 'demo.windmill.ooo';

  /*  You have to replace ".windmill.ooo" with your own domain if you deploy this example under your domain.
      You can also use wildcard subdomains on .vercel.app links that are associated with your Vercel team slug
      in this case, our team slug is "platformize", thus *.platformize.vercel.app works. Do note that you'll
      still need to add "*.platformize.vercel.app" as a wildcard domain on your Vercel dashboard. */
  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname
        .replace(`.9mbs.studio`, '')
        .replace(`.platformize.vercel.app`, '')
      : hostname.replace(`.localhost:3000`, '');

  // rewrites for app pages
  if (currentHost == 'app') {
    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // rewrite root application to `/home` folder
  if (hostname === 'localhost:3000') {
    url.pathname = `/home${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // rewrite admin application to `/admin` folder
  if (hostname === 'admin.localhost:3000') {
    url.pathname = `/admin${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}