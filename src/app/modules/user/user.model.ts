import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { TRegisterUser } from './user.interface';
import config from '../../config';
import { UserStatus } from './user.constant';

const registerUserSchema = new Schema<TRegisterUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [3, 'The length of name can be minimum 3 characters'],
      maxlength: [20, 'The length of name can be maximum 20 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'Please enter a valid email',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
      minlength: [6, 'Password can be minimum 6 characters'],
      maxlength: [20, 'Password can not be more than 20 characters'],
    },
    phone: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\+?[0-9]{10,15}$/.test(v);
        },
        message: props => `${props.value} is not a valid contact number!`,
      },
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: '{VALUE} is not valid',
      },
      default: 'user',
    },
    image: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    eduction: {
      type: String,
      trim: true,
    },
    jobTitle: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    portfolio: {
      type: String,
      trim: true,
    },
    linkedInProfile: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

registerUserSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// set '' after saving password
registerUserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TRegisterUser>('User', registerUserSchema);
