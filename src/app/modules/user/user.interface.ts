import { USER_ROLE } from './user.constant';

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'admin' | 'user';
  images: string[];
  address?: string;
  country?: string;
  city?: string;
  education?: string;
  jobTitle?: string;
  company?: string;
  portfolio?: string;
  linkedInProfile?: string;
  facebookProfile?: string;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
