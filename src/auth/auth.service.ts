import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly configService: ConfigService) { 
        this.jwtService = jwtService;
    }

    async generateToken(payload: any): Promise<string> {
        const key = this.configService.get<string>('secretKey')!;
        return this.jwtService.signAsync(payload, { secret : key });
    }

    async verifyToken(token: string, secret: string) : Promise<any> {
        const key = this.configService.get<string>('secretKey')!;
        return this.jwtService.verifyAsync(token, { secret : key });
    }
}