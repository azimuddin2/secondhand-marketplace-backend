import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import { createToken } from './auth.utils';
import config from '../../config';
import { verifyToken } from '../../utils/verifyToken';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload?.email });

  if (!user) {
    throw new AppError(404, 'This user is not found!');
  }

  if (user?.status === 'blocked') {
    throw new AppError(403, 'This user is blocked');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(403, 'Password do not matched');
  }

  // create token and send to the client
  const jwtPayload = {
    userId: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  if (!token) {
    throw new AppError(401, 'You are not authorized!');
  }

  const decoded = verifyToken(token, config.jwt_refresh_secret as string);

  const { email } = decoded;

  const user = await User.findOne({ email: email });

  if (!user) {
    throw new AppError(404, 'This user is not found');
  }

  if (user?.status === 'blocked') {
    throw new AppError(403, 'This user is blocked');
  }

  // create token and send to the client
  const jwtPayload = {
    userId: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
  refreshToken,
};
