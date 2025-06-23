import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Order placed successfully.',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrdersFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Orders retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const changeOrderStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.changeOrderStatusIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Status is updated successfully!',
    data: result,
  });
});

const getOrdersByEmail = catchAsync(async (req, res) => {
  const result = await OrderServices.getOrdersByEmailFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  changeOrderStatus,
  getOrdersByEmail,
};
