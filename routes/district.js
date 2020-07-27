const express = require("express");
const router = express.Router();
const District = require("../models/District");

router.post("/district/post/:id", (req, res)=>{
    let id = req.params.id;
    let data = {
        "district": req.body.district,
        "state_id": id
    }
    District.create(data).then(
        (resp)=>{
            res.json(resp);
        }
    ).catch(
        (err)=>{
            res.send(err);
        }
    )
})

router.get("/district/getAll", (req, res)=>{
    District.find().populate("state_id").then(
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