import { Body, Injectable, Res } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import type { Response } from 'express';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class LoginService {
    constructor(private readonly authService: AuthService, private readonly cryptoService: CryptoService) {}
    async login(email: string, password: string, res: Response): Promise<any> {
        try{
            const hashedPassword = await this.cryptoService.hash(password);
            // console.log(hashedPassword)
            //Logica de verificação da senha com modulo de banco de dados, passando a propriedade password para
            //ser codificada e comparada com a senha armazenada no banco de dados, utilizando o modulo de criptografia
        
            
            const token = await this.authService.generateToken({email})
            res.cookie('auth_token', token, {
                httpOnly: true,
                secure : true,
                sameSite: 'strict',
            });
            
            res.redirect('/Home');
        }catch(error){
            console.error('Error generating token:', error);
            return { status: 'error', message: 'Error generating token' };
        }
    }
}
