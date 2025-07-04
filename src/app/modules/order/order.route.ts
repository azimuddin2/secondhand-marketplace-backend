import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidations } from './order.validation';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post(
  '/',
  auth('user'),
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder,
);

router.get('/', auth('admin'), OrderControllers.getAllOrders);

router.get('/my-orders', OrderControllers.getOrdersByEmail);

router.put(
  '/change-status/:id',
  auth('admin'),
  validateRequest(OrderValidations.changeOrderStatusValidationSchema),
  OrderControllers.changeOrderStatus,
);

export const OrderRoutes = router;
