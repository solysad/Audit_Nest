import { Test, TestingModule } from '@nestjs/testing';
import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    service = module.get<CryptoService>(CryptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('hash', () => {
    it('should hash a password successfully', async () => {
      const password = 'testPassword123';
      const hash = await service.hash(password);

      expect(hash).toBeDefined();
      expect(typeof hash).toBe('string');
      expect(hash.length).toBeGreaterThan(0);
    });

    it('should generate different hashes for the same password', async () => {
      const password = 'testPassword123';
      const hash1 = await service.hash(password);
      const hash2 = await service.hash(password);

      expect(hash1).not.toEqual(hash2);
    });

    it('should throw error for empty password', async () => {
      await expect(service.hash('')).rejects.toThrow();
    });
  });

  describe('verify', () => {
    it('should verify correct password', async () => {
      const password = 'testPassword123';
      const hash = await service.hash(password);
      const isValid = await service.verify(hash, password);

      expect(isValid).toBe(true);
    });

    it('should reject incorrect password', async () => {
      const password = 'testPassword123';
      const hash = await service.hash(password);
      const isValid = await service.verify(hash, 'wrongPassword');

      expect(isValid).toBe(false);
    });

    it('should throw error on invalid hash', async () => {
      await expect(service.verify('invalid-hash', 'password')).rejects.toThrow();
    });
  });
});
