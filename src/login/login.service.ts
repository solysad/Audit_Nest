import { Body, Injectable, Res } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import type { Response } from 'express';

@Injectable()
export class LoginService {
    constructor(private readonly authService: AuthService) {}
    async login(@Body() email: string,  @Res() res: Response): Promise<any> {
        try{
            const token = await this.authService.generateToken({email})
            res.cookie('auth_token', token, {
                httpOnly: true,
                secure : true,
                sameSite: 'strict',
            });
            
            res.redirect('/Home');
        }catch(error){
            console.error('Erro ao gerar o token:', error);
            return { status: 'error', message: 'Erro ao gerar o token' };
        }
    }
}
