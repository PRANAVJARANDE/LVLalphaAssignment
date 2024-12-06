import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js";


export const adduser =asyncHandler(async(req,res)=>{
  const resumeLocalPath=req.file?.path;
  let resumeUrl;
  try {
    resumeUrl = await uploadOnCloudinary(resumeLocalPath);
  } catch (error) {
    return res.status(500).json(new ApiResponse(500, null, "Failed to upload resume"));
  }
  const { name, email, phone, degree, institution, year, company, role, years } = req.body;
  try {
    const user = await User.create({
      resume: resumeUrl.url,
      name,
      email,
      phone,
      degree,
      institution,
      year,
      company,
      role,
      years,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, user, "Application Submitted Successfully"));
  } catch (error) {
    return res.status(500).json(new ApiResponse(500, {error}, "Failed to save user data"));
  }
});
