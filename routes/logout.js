const express = require("express");
const router = express.Router();

router.get("/logout", (req, res)=>{
    var session = req.session;
    session.destroy();
    res.clearCookie("connect.sid");
    res.send({
        status: true,
        message: "you have successfully loggedIn!"
    })
    
});


module.exports = router