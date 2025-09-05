import { auth } from '@/auth';

export const middleware = auth;
console.log('middleware:', middleware);

export const config = {
  matcher: ['/panel'],
};
