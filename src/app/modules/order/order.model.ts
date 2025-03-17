import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    buyerEmail: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
    itemTitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Shipping', 'Delivered'],
      default: 'Pending',
    },
    paid: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Order = model<TOrder>('Order', orderSchema);
