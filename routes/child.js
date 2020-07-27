const express = require("express");
const router = express.Router();
const Child = require("../models/Child");

router.post("/child/post/:id", (req, res)=>{
    let id = req.params.id;
    let data = {
        "name": req.body.name,
        "sex": req.body.sex,
        "dob": req.body.dob,
        "fatherName":req.body.fatherName,
        "motherName":req.body.motherName,
        "district_id": id
    };

    Child.create(data)
    .then((resp)=>res.json(resp))
    .catch((err)=>res.send(err))
})

router.get("/child/getAll", (req, res)=>{
    Child.find()
    .populate("district_id")
    .then((data)=>res.json(data))
    .catch((err)=> res.send(err))
})

module.exports = router