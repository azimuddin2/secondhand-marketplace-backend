import { Types } from 'mongoose';

export type TCondition = 'new' | 'used';

export type TStatus = 'available' | 'sold';

export type TListing = {
  title: string;
  description: string;
  price: number;
  condition: TCondition;
  images: string[];
  userID: Types.ObjectId;
  status: TStatus;
};
