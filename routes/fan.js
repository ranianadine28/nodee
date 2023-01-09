import express from "express";
import { body } from 'express-validator';
import multer from '../middlewares/multer-config.js';



import {addOnce, getAll} from "../controllers/fan.js";
const router = express.Router();
//import upload from "../middlewares/uploads"


router.route("/fans").post(multer("image",512*1024),
    body("fullname").isLength({min:5,max:50}),
    body("team").isLength({min:2,max:100}),
    body("phone").isNumeric().isLength({min:8,max:8}),
    addOnce);
 router.route("/fans/:team").get(getAll);   






export default router;