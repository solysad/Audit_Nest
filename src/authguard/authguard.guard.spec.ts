import { AuthguardGuard } from './authguard.guard';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '@nestjs/config';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;
  let mockAuthService: Partial<AuthService>;
  let mockConfigService: Partial<ConfigService>;

  beforeEach(() => {
    mockAuthService = {};
    mockConfigService = {};
    
    guard = new AuthguardGuard(
      mockAuthService as AuthService,
      mockConfigService as ConfigService
    );
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
