import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { request, Request } from 'express';

@Injectable()
export class MiddlewareService {
    constructor(private readonly authService: AuthService) {}

    verifyTokenAllRouts(token : string, secret: string) : any {
        const tokenCookie = request.cookies['auth_token']; 
        if (!tokenCookie) {
            throw new Error('No token provided');
        }
        return this.authService.verifyToken(tokenCookie, secret);
    }
}
