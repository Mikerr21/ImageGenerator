import express from 'express'

import * as dotenv from 'dotenv'

import {v2 as cloudinary } from 'cloudinary'

import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    cloud_key:process.env.CLOUDINARY_API_KEY,
    cloud_secret:process.env.CLOUDINARY_API_SECRET,

})

export default router;