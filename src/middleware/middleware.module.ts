import { Module } from '@nestjs/common';
import { MiddlewareService } from './middleware.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [MiddlewareService]
})
export class MiddlewareModule {}
