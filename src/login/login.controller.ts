import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthguardGuard } from '../authguard/authguard.guard';
import type { Response, Request } from 'express';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  findroot(@Res() res : Response){
    return res.redirect('/login');
  }

  @Get('Home')
  @UseGuards(AuthguardGuard)
  findRoot(@Res() res : Response ) {
    return res.sendFile('pageHome.html', { root: 'Frontend/Pages' });
  }
  
  @Get('login')
  findPage(@Res() res : Response ) {
    return res.sendFile('pageLogin.html', { root: 'Frontend/Pages' });
  }
  
  @Post('login')
  async loginUser(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const resultToken : Object = await this.loginService.login(body.email, body.password, res); // Passando o email e senha do corpo da requisição para o serviço de logins
    return resultToken
  }

  @Post('logout')
  logoutUser(@Req() req: Request,) {
    return req.cookies
  }
}
