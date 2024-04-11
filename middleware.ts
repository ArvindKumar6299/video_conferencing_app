// import { authMiddleware } from "@clerk/nextjs";
 
// export default authMiddleware({
  
// });
 
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoute(req)) auth().protect();
});

// import { NextResponse } from 'next/server';
// import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

// export default authMiddleware({
//   afterAuth(auth, req, evt) {
//     // If the user is not authenticated and trying to access a protected route, redirect them to sign in
//     if (!auth.userId && !auth.isPublicRoute) {
//       return redirectToSignIn({ returnBackUrl: req.url });
//     }
    
//     // If the user is signed in and trying to access a public route, allow them to access it
//     if (auth.userId && auth.isPublicRoute) {
//       return NextResponse.next();
//     }
    
//     // If the user is signed in and trying to access any specific route, redirect them accordingly
//     if (auth.userId && !auth.isPublicRoute) {
//       const { pathname } = req.nextUrl;
//       switch (pathname) {
//         case '/':
//           return NextResponse.redirect(`${'/'}`);
//         case '/upcoming':
//           return NextResponse.redirect('/upcoming');
//         case '/previous':
//           return NextResponse.redirect('/previous');
//         case '/recordings':
//           return NextResponse.redirect('/recordings');
//         case '/personal-room':
//           return NextResponse.redirect('/personal-room');  
//         default:
//           return NextResponse.redirect('/');
//       }
//     }
    
//     // For any other case, allow the request to continue
//     return NextResponse.next();
//   },
// });



