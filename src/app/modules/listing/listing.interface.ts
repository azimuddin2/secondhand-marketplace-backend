import { Types } from 'mongoose';

export type TListingCategory =
  | 'computer'
  | 'gadgets'
  | 'game'
  | 'kitchen'
  | 'electronics'
  | 'lifestyle'
  | 'mobile'
  | 'routers'
  | 'shoe'
  | 'watch';

export type TCondition = 'new' | 'used';

export type TStatus = 'available' | 'sold';

export type TListing = {
  title: string;
  category: TListingCategory,
  description: string;
  price: number;
  condition: TCondition;
  images: string[];
  userID: Types.ObjectId;
  email: string;
  status: TStatus;
};
