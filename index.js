const express = require("express");

const app = express();

app.set("view enjine", "ejs");

const path = require("path");
const userRoutes = require("./routes/user");

app.use("/libs",express.static(path.join(__dirname,"node_modules")));
app.use("/static", express.static(path.join(__dirname,"public")));

app.use(userRoutes);


app.listen(3000, function(){
    console.log("listening on port 3000")
})