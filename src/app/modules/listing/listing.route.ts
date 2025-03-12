import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ListingValidations } from './listing.validation';
import { ListingControllers } from './listing.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin', 'user'),
  validateRequest(ListingValidations.createListingValidationSchema),
  ListingControllers.createListing,
);

router.get('/', ListingControllers.getAllListings);

router.get('/:id', ListingControllers.getSingleListing);

router.put(
  '/:id',
  auth('admin', 'user'),
  validateRequest(ListingValidations.updateListingValidationSchema),
  ListingControllers.updateListing,
);

router.delete('/:id', auth('admin', 'user'), ListingControllers.deleteListing);

export const ListingRoutes = router;
