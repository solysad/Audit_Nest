import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthModule } from '../auth/auth.module';
import { CryptoModule } from '../crypto/crypto.module';

@Module({
  imports: [AuthModule, CryptoModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
