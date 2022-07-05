const mongoose = require("mongoose");
//user: aperezmartinez16
//cont: v6V5IEmE2YeU79fQ
try {
  mongoose.connect("mongodb+srv://aperezmartinez16:v6V5IEmE2YeU79fQ@cluster0.vm03lwx.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
                  );
  console.log("connected database.");
} catch (e) {
  console.error(e);
  }
