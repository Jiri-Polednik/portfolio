import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";
import { locales } from "@/i18n";

function getLocale(request: { nextUrl: NextURL; headers?: any }) {
  const acceptLanguage = request.headers.get("Accept-Language");
  return (
    locales.find((locale) => acceptLanguage.split(",").includes(locale)) || "en"
  );
}

export function middleware(request: { nextUrl: NextURL }) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}/${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
