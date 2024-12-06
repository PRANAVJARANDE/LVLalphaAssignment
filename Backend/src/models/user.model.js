import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    resume: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
    role: {
        type: String,
    },
    years: {
        type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
