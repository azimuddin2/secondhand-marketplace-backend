import { z } from 'zod';
import { Condition, ListingCategory, Status } from './listing.constant';

const createListingValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    category: z.enum([...ListingCategory] as [string, ...string[]]),
    description: z.string({ required_error: 'Description is required' }),
    price: z
      .number({ required_error: 'Price is required' })
      .min(0, 'Product price cannot be less than 0'),
    condition: z.enum([...Condition] as [string, ...string[]]),
    userID: z.string({ required_error: 'User Id is required' }),
    email: z.string({ required_error: 'Email is required' }),
  }),
});

const updateListingValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    category: z.enum([...ListingCategory] as [string, ...string[]]).optional(),
    description: z
      .string({ required_error: 'Description is required' })
      .optional(),
    price: z
      .number({ required_error: 'Price is required' })
      .min(0, 'Product price cannot be less than 0')
      .optional(),
    condition: z.enum([...Condition] as [string, ...string[]]).optional(),
    userID: z.string({ required_error: 'User Id is required' }).optional(),
    email: z.string({ required_error: 'Email is required' }).optional(),
    status: z.enum([...Status] as [string, ...string[]]).optional(),
  }),
});

export const ListingValidations = {
  createListingValidationSchema,
  updateListingValidationSchema,
};
