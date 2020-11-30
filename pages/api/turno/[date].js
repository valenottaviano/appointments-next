dbConnect();
import dbConnect from "../../../utils/dbConnect";
const Turno = require("../../../Models/turnoModel");

export default async (req, res) => {
  if (req.method === "GET") {
    const dateQuery = req.query.date;
    const turnos = await Turno.find({ dateQuery: dateQuery });
    console.log(turnos);
    res.json({ data: turnos });
  }
};
