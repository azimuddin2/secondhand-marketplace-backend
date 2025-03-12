import { USER_ROLE } from './user.constant';

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'admin' | 'user';
  image?: string;
  address?: string;
  country?: string;
  city?: string;
  eduction?: string;
  jobTitle?: string;
  company?: string;
  portfolio?: string;
  linkedInProfile?: string;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
