import { TCondition, TListingCategory, TStatus } from './listing.interface';

export const ListingCategory: TListingCategory[] = [
    'computer',
    'gadgets',
    'game',
    'kitchen',
    'electronics',
    'lifestyle',
    'mobile',
    'routers',
    'shoe',
    'watch',
];

export const Condition: TCondition[] = ['new', 'used'];

export const Status: TStatus[] = ['available', 'sold'];

export const listingSearchableFields = ['title', 'description', 'category'];
