import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { userSearchableFields } from './user.constant';
import { TRegisterUser } from './user.interface';
import { User } from './user.model';

const registerUserIntoDB = async (payload: TRegisterUser) => {
  const filter = { email: payload.email };

  const isUserExists = await User.findOne(filter);
  if (isUserExists) {
    throw new AppError(409, `${payload.email} already exists.`);
  }

  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const usersQuery = new QueryBuilder(User.find(), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await usersQuery.countTotal();
  const result = await usersQuery.modelQuery;

  return { meta, result };
};

const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  return user;
};

const updateUserIntoDB = async (
  email: string,
  payload: Partial<TRegisterUser>,
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const result = await User.findOneAndUpdate({ email }, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const changeStatusIntoDB = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const UserServices = {
  registerUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  changeStatusIntoDB,
};
