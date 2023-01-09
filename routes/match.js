import express from "express";
import { body } from 'express-validator';
import multer from '../middlewares/multer-config.js';



import { addMatch,getMatchs, updateMatch } from "../controllers/match.js";
const router = express.Router();
//import upload from "../middlewares/uploads"


router.route("/matchs").post(
    body("teamHome").isLength({min:2}),
    body("teamAway").isLength({min:2}),
    body("date").isLength({min:5}),
    addMatch);
      router.route("/matchs").get(getMatchs);   
      router.route("/matchs/:id").patch(
     
        body("date").isLength({min:5}),
        updateMatch);








export default router;