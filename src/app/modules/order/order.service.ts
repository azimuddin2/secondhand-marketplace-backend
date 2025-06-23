import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const sellerIdExists = await User.findById(payload.sellerId);
  if (!sellerIdExists) {
    throw new AppError(404, 'Product not available');
  }

  const buyerIdExists = await User.findById(payload.buyerId);
  if (!buyerIdExists) {
    throw new AppError(404, 'User not found! Please login and product order');
  }

  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(Order.find(), query)
    .search(['buyerEmail'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await orderQuery.countTotal();
  const result = await orderQuery.modelQuery;

  return { meta, result };
};

const changeOrderStatusIntoDB = async (
  id: string,
  payload: { status: string },
) => {
  const result = await Order.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getOrdersByEmailFromDB = async (query: Record<string, unknown>) => {
  const filter = { email: query.email };

  const isEmailExists = await Order.findOne(filter);
  if (!isEmailExists) {
    throw new AppError(404, 'Order not found');
  }

  const result = await Order.find(filter);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  changeOrderStatusIntoDB,
  getOrdersByEmailFromDB,
};
