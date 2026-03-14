import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthguardGuard } from '../authguard/authguard.guard';
import type { Response, Request } from 'express';

@Controller()
export class LoginController {

  @Get('Home')
  @UseGuards(AuthguardGuard)
  findRoot(@Res() res : Response ) {
    return res.sendFile('pageHome.html', { root: 'frontend/pages' });
  }
  constructor(private readonly loginService: LoginService) {}
  @Get('login')
  findPage(@Res() res : Response ) {
    return res.sendFile('pageLogin.html', { root: 'frontend/pages' });
  }
  
  @Post('login')
  async loginUser(@Body() body: { email: string;}, @Res() res: Response) {
    const resultToken : Object = await this.loginService.login(body.email, res);
    return resultToken
  }

  @Post('logout')
  logoutUser(@Req() req: Request,) {
    return req.cookies
  }
}
