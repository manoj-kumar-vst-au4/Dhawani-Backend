const express = require("express");
const router = express.Router();

router.post("/login", (req, res)=>{
    if(req.body.email==="manoj@test.com" && req.body.password === "123456"){
        res.json({
            status: true,
            message: "You have successfully LoggedIn!"
        })
        req.session.user={
            "email":"manoj@test.com",
            "password":"123456"
        }
    }else{
        res.json({
            status: false,
            message: "email or password is wrong!"
        })
    }
});

module.exports = router