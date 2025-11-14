import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [AuthModule, CryptoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
