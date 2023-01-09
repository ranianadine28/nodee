import fan from "../models/fan.js";
import match from "../models/match.js";
import ticket from "../models/ticket.js";

import { validationResult } from 'express-validator';
export async function buyticket(req, res) {
    const firstGame = await fan.findOne({ fanId: req.params.id });
    const firstuser = await match.findOne({ matchId: req.params.id });
    console.log(firstGame);
    console.log(firstuser);
  
    if (
      firstGame &&
      firstuser &&
      (firstGame.team ==firstuser.teamAway ||firstGame.team ==firstuser.teamHome)&&
      firstuser.nbPlaces>0
    ) {
      const newticket = await ticket();
     
    newticket.save();
      firstuser.nbPlaces --;
      firstuser.save();
    
  
      res.status(201).send({ newticket, message: "buyeeeeeee" });
    } else {
      res.status(403).send({ message: "no fan" });
    } 
  };
  export async function getT(req, res) {
    const newT = await ticket
      .find({ fanId: req.params.id })
      .then((doc) => {
        res.status(200).json({ newT: doc });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }