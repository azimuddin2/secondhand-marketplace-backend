import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ListingServices } from './listing.service';

const createListing = catchAsync(async (req, res) => {
  const result = await ListingServices.createListingIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Listing is created successfully',
    data: result,
  });
});

const getAllListings = catchAsync(async (req, res) => {
  const result = await ListingServices.getAllListingsFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Listings retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleListing = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ListingServices.getSingleListingFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Listing retrieved successfully',
    data: result,
  });
});

const updateListing = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ListingServices.updateListingIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Listing updated successfully',
    data: result,
  });
});

const deleteListing = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ListingServices.deleteListingFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Listing deleted successfully',
    data: result,
  });
});

export const ListingControllers = {
  createListing,
  getAllListings,
  getSingleListing,
  updateListing,
  deleteListing,
};
