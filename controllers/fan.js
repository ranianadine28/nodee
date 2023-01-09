import fan from "../models/fan.js";
import { validationResult } from 'express-validator';

export async function addOnce(req, res) {
    console.log("fel addOnce");
   if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }else{
    const newFan = new fan();
    
    newFan.fullname = req.body.fullname;
    newFan.phone = req.body.phone;
    newFan.team = req.body.team;
    newFan.image = `${req.protocol}://${req.get("host")}/image/${req.file.filename}`;
    newFan.tickets = req.body.tickets;
  
    newFan.save();
    
  
    res.status(201).send({ newFan });
  }};
  export function getAll(req, res) {
    fan
      .find({ fan: req.params.team })
      .then((docs) => {
        res.status(200).json(docs);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }