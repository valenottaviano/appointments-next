dbConnect();
import dbConnect from "../../../utils/dbConnect";
const Turno = require("../../../Models/turnoModel");

export default async (req, res) => {
  if (req.method === "GET") {
    const dateQuery = req.query.date;
    const turnos = await Turno.find({ dateQuery: dateQuery });
    res.json({ data: turnos });
  }
  if (req.method === "DELETE") {
    const id = req.query.date;
    const turno = await Turno.findOneAndDelete({ _id: id });
    res.redirect("/");
  }
};
