const Proyectos = require("./models/Proyectos");

module.exports = (app)=>{
  app.get("/", (req, res)=> {
  res.send("Pagina principal")
})
  
  app.get("/proyectos", (req, res)=>{})
  app.post("/proyectos", (req, res)=>{})
  app.get("/proyectos/id", (req, res)=>{})
  app.put("/proyectos/id", (req, res)=>{})
  app.delete("/proyectos/id", (req, res)=>{})
  }