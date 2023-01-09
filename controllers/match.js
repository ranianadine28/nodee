import match from "../models/match.js";
import { validationResult } from 'express-validator';
export async function addMatch(req, res) {
    console.log("fel addOnce");
   if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }else{
    const newFan = new match();
    
    newFan.date = req.body.date;
    newFan.teamHome = req.body.teamHome;
    newFan.teamAway = req.body.teamAway;

    newFan.nbPlaces=req.body.nbPlaces;


    newFan.tickets = req.body.tickets;
  
    newFan.save();
    
  
    res.status(201).send({ newFan });
  }};
  export function getMatchs(req, res) {
    match
      .find({})
      .then((docs) => {
        res.status(200).json(docs);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
  export async function updateMatch(req, res) {
    if (!validationResult(req).isEmpty()) {
        return res.status(500).json({ errors: validationResult(req).array() });
    }else{

    const found = await match.findByIdAndUpdate({ _id: req.params.id,body:req.body })
    console.log(found)

    const verifMatch = await match.findById({ _id: req.params.id },
        {
            date: req.body.date,
         

        },
    
    );

    return res.status(200).send({ verifMatch,found, message: "Success: match Is Updated" });

    }
};