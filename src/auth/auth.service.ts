import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { 
        this.jwtService = jwtService;
    }

    async generateToken(payload: any): Promise<string> {
        return this.jwtService.signAsync(payload);
    }

    async verifyToken(token: string, secret: string) : Promise<any> {
        return this.jwtService.verifyAsync(token, { secret });
    }
}
