import { USER_ROLE } from './user.constant';

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'admin' | 'user';
  image?: string;
  address?: string;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
