import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class CryptoService {
    async hash(password: string): Promise<string> {
        if (!password || password.trim().length === 0) {
            throw new InternalServerErrorException(
                'Password cannot be empty',
            );
        }

        try {
            return await argon2.hash(password, {
                type: argon2.argon2id,
                memoryCost: 2 ** 16, // 64 MB
                timeCost: 3,
                parallelism: 1,
                hashLength: 32,
            });
        } catch (err) {
            console.error('Error hashing password:', err);
            throw new InternalServerErrorException(
                'Failed to hash password',
                (err as Error).message,
            );
        }
    }

    async verify(hash: string, password: string): Promise<boolean> {
        try {
            return await argon2.verify(hash, password);
        } catch (err) {
            console.error('Error verifying password:', err);
            throw new InternalServerErrorException(
                'Failed to verify password',
                (err as Error).message,
            );
        }
    }
}
