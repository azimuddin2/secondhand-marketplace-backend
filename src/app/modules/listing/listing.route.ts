import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ListingValidations } from './listing.validation';
import { ListingControllers } from './listing.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ListingValidations.createListingValidationSchema),
  ListingControllers.createListing,
);

router.get('/', ListingControllers.getAllListings);

router.get('/:id', ListingControllers.getSingleListing);

router.put(
  '/:id',
  validateRequest(ListingValidations.updateListingValidationSchema),
  ListingControllers.updateListing,
);

router.delete('/:id', ListingControllers.deleteListing);

export const ListingRoutes = router;
