const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema(
  {
     nombre: String,
     apellido: String,
     edad: String,
     tipo_documento: String,
     numero_documento: String,
     proyecto: String,
     semestre_actual: String,
     ponencias: String,


  proyectos: {
  
      type: Schema.Types.ObjectId,
      ref: "Proyectos"
    }
  }
);
var Estudinates = mongoose.model("Estudiantes", EstudiantesSchema);
Module.exports = Estudiantes; 