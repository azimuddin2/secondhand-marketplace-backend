import { model, Schema } from 'mongoose';
import { TListing } from './listing.interface';
import { Condition, Status } from './listing.constant';

const listingSchema = new Schema<TListing>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      enum: {
        values: Condition,
        message: '{VALUE} is not valid',
      },
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      trim: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: Status,
        message: '{VALUE} is not valid',
      },
      default: 'available',
      trim: true,
    },
  },
  { timestamps: true },
);

export const Listing = model<TListing>('Listing', listingSchema);
