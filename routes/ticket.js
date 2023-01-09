import express from "express";

import {
    buyticket, getT
} from "../controllers/ticket.js";
const router = express.Router();
//import upload from "../middlewares/uploads"

router.route("/tickets/:fanId/:matchId").get(buyticket);
router.route("/tickets/:fanId").get(getT);





export default router;
