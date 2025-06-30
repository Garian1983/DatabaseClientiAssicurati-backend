const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  nome: { type: String, required: true },
  cognome: { type: String, required: true },
  cellulare: { type: String, required: true },
  tipologia: { type: String, enum: ['RC AUTO', 'ALTRI RAMI'], required: true },
  targa: String,
  frazionamento: { type: String, enum: ['6', '12'] },
  dettaglio: String,
  tipologiaRamo: String,
  scadenzaRamo: { type: String, enum: ['6', '12'] },
  note: String,
  massimale: String,
  attivita: String,
  inizioCopertura: { type: Date, required: true },
  assicurazione: String,
  azienda: String,
  premioLordo: String
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);
