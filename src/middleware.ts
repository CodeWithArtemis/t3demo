import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  async middleware(req, res, next) {
    // Allow requests to /api/uploadthing
    if (req.url === '/api/uploadthing') {
      return next();
    }

    // Your other middleware logic here
    // ...

    // If the request doesn't match any specific route, continue to next middleware
    return next();
  }
});

export const config = {
  api: {
    externalResolver: true 
  },
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

