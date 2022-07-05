const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProyectosSchema = new Schema(
  {
     nombreproyecto: String,
     cantidad_páginas: String,
     año_creación: String,
     autores: String,
     asesor: String,
     nota_proyecto: String,
     area_investgación: String,
     jurado: String,
     semilleros: String,

  estudiantes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiantes"
    }
    ]
}
);
var Proyectos =mongoose.model("Proyectos", ProyectosSchema);
module.exports = Proyectos; 