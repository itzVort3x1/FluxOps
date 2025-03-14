import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    "/dashboard",
    "/api/clerk-webhook",
    "/api/drive-activity/",
]);

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect();
    if (req.nextUrl.pathname.startsWith("/api/clerk-webhook")) {
        return NextResponse.next();
    }
});

// export function middleware(req: NextRequest) {
//     if (req.nextUrl.pathname.startsWith("/api/clerk-webhook")) {
//         return NextResponse.next();
//     }
// }

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
