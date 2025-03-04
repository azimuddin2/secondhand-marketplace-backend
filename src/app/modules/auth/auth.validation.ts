import { z } from 'zod';

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Please enter a valid email'),
    password: z.string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be string',
    }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required',
    }),
  }),
});

export const AuthValidations = {
  loginUserValidationSchema,
  refreshTokenValidationSchema,
};
