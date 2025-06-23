import { z } from 'zod';
import { OrderStatus } from './order.constant';

const createOrderValidationSchema = z.object({
  body: z.object({
    sellerId: z.string({ required_error: 'Seller Id is required' }),
    buyerId: z.string({ required_error: 'Buyer Id is required' }),
    buyerEmail: z
      .string({ required_error: 'Buyer email is required' })
      .email({ message: 'Invalid email format' }),
    itemId: z.string({ required_error: 'Seller Id is required' }),
    itemTitle: z.string({ required_error: 'Item title is required' }),
    price: z.number().positive('Total price must be greater than 0'),
  }),
});

const updateOrderValidationSchema = z.object({
  body: z.object({
    sellerId: z.string({ required_error: 'Seller Id is required' }).optional(),
    buyerId: z.string({ required_error: 'Buyer Id is required' }).optional(),
    buyerEmail: z
      .string({ required_error: 'Buyer email is required' })
      .email({ message: 'Invalid email format' })
      .optional(),
    itemId: z.string({ required_error: 'Seller Id is required' }).optional(),
    itemTitle: z
      .string({ required_error: 'Item title is required' })
      .optional(),
    price: z.number().positive('Total price must be greater than 0').optional(),
  }),
});

const changeOrderStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...OrderStatus] as [string, ...string[]]),
  }),
});

export const OrderValidations = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
  changeOrderStatusValidationSchema,
};
