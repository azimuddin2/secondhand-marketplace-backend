import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { name: string; email: string; role: string },
  secret: string,
  expiresIn: string | any,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
