const mongoose = require("mongoose");

const TurnoSchema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  service: { type: String },
  date: { type: Date },
  dateQuery: { type: String },
  time: { type: String },
});

let Turno = mongoose.models.Turno || mongoose.model("Turno", TurnoSchema);

module.exports = Turno;
