const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const url = "mongodb+srv://manoj:manoj@132@cluster0-rllkb.mongodb.net/test?retryWrites=true&w=majority";
const PORT = 4000;

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(session({
        secret: "qwerty12345",
        resave: false,
        saveUninitialized: true,
        cookie: {
        httpOnly: true,
        maxAge: 3600000,
        // path: "/",
        sameSite: true,
        secure: false
    }
    })
);
console.log()
const stateRoutes = require("./routes/state");
const districtRoutes = require("./routes/district");
const childRoutes = require("./routes/child");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");

app.use(stateRoutes);
app.use(districtRoutes);
app.use(childRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);

app.listen(PORT, (req, res)=>{
    console.log("server is running on port number", PORT);
})