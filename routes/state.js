const express = require("express");
const router = express.Router();
const State = require("../models/State");

router.post("/state/post", (req, res)=>{
    State.create(req.body).then(
        (resp)=>{
            res.json(resp);
        }
    ).catch(
        (err)=>{
            res.send(err);
        }
    )
})

router.get("/state/getAll", (req, res)=>{
    console.log(req.session.user);
    State.find().then(
        (data)=>{
            res.json(data);
        }
    ).catch(
        (err)=>{
            res.send(err);
        }
    )
})

module.exports = router