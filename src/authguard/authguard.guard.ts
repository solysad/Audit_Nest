import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor( private readonly authservice : AuthService, private readonly configService: ConfigService ){}
  async canActivate( context: ExecutionContext ): Promise<boolean> {
    try{
      const request = context.switchToHttp().getRequest();
      const token : string = request.cookies['auth_token']
      const secretKey = this.configService.get<string>('secretKey')!;
      const valueTokenVerification = await this.authservice.verifyToken(token, secretKey)
      
      return valueTokenVerification;
    }catch(error){
      const response = context.switchToHttp().getResponse();

      console.warn('Warning: There is a problem verifying the token in AuthGuard: ', error);
      response.redirect('/login');
      return false;
    }
  }
}
