import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { listingSearchableFields } from './listing.constant';
import { TListing } from './listing.interface';
import { Listing } from './listing.model';

const createListingIntoDB = async (payload: TListing) => {
  const isUserExists = await User.findById(payload.userID);
  if (!isUserExists) {
    throw new AppError(404, 'User not found! Please login and create listing');
  }

  const result = await Listing.create(payload);
  return result;
};

const getAllListingsFromDB = async (query: Record<string, unknown>) => {
  const listingQuery = new QueryBuilder(Listing.find(), query)
    .search(listingSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await listingQuery.countTotal();
  const result = await listingQuery.modelQuery;

  return { meta, result };
};

const getSingleListingFromDB = async (id: string) => {
  const listing = await Listing.findById(id);

  if (!listing) {
    throw new AppError(404, 'This listing not found');
  }

  return listing;
};

const getListingsByEmailFromDB = async (query: Record<string, unknown>) => {
  const email = query.email as string;

  if (!email) {
    throw new AppError(400, 'User not found');
  }

  const Listings = await Listing.find({ email: email });

  if (!Listings.length) {
    throw new AppError(404, 'No Listing found for this email');
  }

  return Listings;
};

const updateListingIntoDB = async (id: string, payload: Partial<TListing>) => {
  const isListingExists = await Listing.findById(id);

  if (!isListingExists) {
    throw new AppError(404, 'This listing not found');
  }

  const result = await Listing.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteListingFromDB = async (id: string) => {
  const isListingExists = await Listing.findById(id);

  if (!isListingExists) {
    throw new AppError(404, 'This listing not found');
  }

  const result = await Listing.findByIdAndDelete(id);
  return result;
};

export const ListingServices = {
  createListingIntoDB,
  getAllListingsFromDB,
  getSingleListingFromDB,
  getListingsByEmailFromDB,
  updateListingIntoDB,
  deleteListingFromDB,
};
