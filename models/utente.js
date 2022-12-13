const mongoose = require("mongoose")
// schema
const UtenteSchema = new mongoose.Schema({
  email: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  indirizzo: {type:String, required:true},
  nome: {type:String, required:true},
  cognome: {type:String, required:true},
  telefono: {type:String, required:true, unique:true},
  email_confermata: {type:Boolean, required:true, default:false},
  
  tipo: {type:String, enum:["cliente", "tecnici", "supervisore", "amministratore"], required:true, default:"cliente"},  
  cf: {type:String, unique:true},
  attivo: {type:Boolean, required:true, default:true}
});

const Utente = mongoose.model("Utente", UtenteSchema); //convert to model named Utente
module.exports = Utente