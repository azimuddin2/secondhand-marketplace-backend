import { z } from 'zod';
import { UserStatus } from './user.constant';

const registerUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(3, { message: 'The length of name can be minimum 3 characters' })
      .max(20, { message: 'The length of name can be maximum 20 characters' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Please enter a valid email'),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be string',
      })
      .min(6, { message: 'Password can be minimum 6 characters' })
      .max(20, { message: 'Password can not be more than 20 characters' }),
    phone: z.string().optional(),
    role: z.enum(['admin', 'user']).default('user'),
    address: z.string().optional(),
    country: z.string().optional(),
    city: z.string().optional(),
    education: z.string().optional(),
    jobTitle: z.string().optional(),
    company: z.string().optional(),
    portfolio: z.string().optional(),
    linkedInProfile: z.string().optional(),
    isBlocked: z.boolean().default(false),
  }),
});

const updateUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(3, { message: 'The length of name can be minimum 3 characters' })
      .max(20, { message: 'The length of name can be maximum 20 characters' })
      .optional(),
    phone: z.string().optional(),
    role: z.enum(['admin', 'user']).default('user').optional(),
    address: z.string().optional(),
    country: z.string().optional(),
    city: z.string().optional(),
    education: z.string().optional(),
    jobTitle: z.string().optional(),
    company: z.string().optional(),
    portfolio: z.string().optional(),
    linkedInProfile: z.string().optional(),
    facebookProfile: z.string().optional(),
  }),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

export const UserValidations = {
  registerUserValidationSchema,
  updateUserValidationSchema,
  changeStatusValidationSchema,
};
