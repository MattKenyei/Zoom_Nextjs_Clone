import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const prRoutes = createRouteMatcher([
  "/",
  "/previous",
  "/upcoming",
  "/recordings",
  "/personal-room",
  "/meeting(.*)",
]);
export default clerkMiddleware((auth, req) => {
  if (prRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
