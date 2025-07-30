import { env } from './env';

export const jwtConfig = {
  secret: env.jwt_secret,
  expiresIn: '1d',
};
