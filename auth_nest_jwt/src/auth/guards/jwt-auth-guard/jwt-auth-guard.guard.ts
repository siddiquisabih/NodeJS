import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err, user, info, context) {
        // console.log('Error:', err);    // Log any error that occurred during validation
        // console.log('User:', user);    // Log the user object, should be the JWT payload if successful
        // console.log('Info:', info);    // Log additional info if validation failed

        if (err || !user) {
            // console.error('Authentication failed:', err || info);
            throw err || new UnauthorizedException();
        }

        // If successful, return the user object
        return user;
    }
}