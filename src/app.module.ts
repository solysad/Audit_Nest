import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CryptoModule } from './crypto/crypto.module';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './login/login.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { MiddlewareModule } from './middleware/middleware.module';
import { LoggerModule } from './logger/logger.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    AuthModule, 
    CryptoModule, 
    DatabaseModule, 
    LoginModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend','public'),
    }),
    MiddlewareModule,
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ClientModule,
    CoreModule,
  ],
  controllers: [],

})
export class AppModule {}
