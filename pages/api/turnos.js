dbConnect();
import dbConnect from "../../utils/dbConnect";
const Turno = require("../../Models/turnoModel");

export default async (req, res) => {
  if (req.method === "GET") {
    let turnos = await Turno.find();
    res.json({ data: turnos });
  }
  if (req.method === "POST") {
    let turnoPre = {
      name: req.body.name,
      surname: req.body.surname,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      service: req.body.service,
      time: req.body.time,
      date: req.body.date,
      dateQuery: req.body.dateQuery,
    };
    const nuevoTurno = new Turno(turnoPre);
    const savedTurno = await nuevoTurno.save();
    res.redirect("/success");
  }
};
