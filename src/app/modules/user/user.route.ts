import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.registerUserValidationSchema),
  UserControllers.registerUser,
);

router.get('/', auth('admin'), UserControllers.getAllUsers);

router.get('/:id', auth('admin', 'user'), UserControllers.getSingleUser);

router.put(
  '/:email',
  auth('admin', 'user'),
  validateRequest(UserValidations.updateUserValidationSchema),
  UserControllers.updateUser,
);

router.put(
  '/change-status/:id',
  auth('admin'),
  validateRequest(UserValidations.changeStatusValidationSchema),
  UserControllers.changeStatus,
);

router.delete('/:id', auth('admin'), UserControllers.deleteUser);

export const UserRoutes = router;
