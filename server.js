const express = require("express");
const app = express();
require("./bin/connect");
require("./bin/routers")(app)

app.listen(3000, ()=> {
console.log("El servidor esa levantado")
})
