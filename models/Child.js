const mongoose = require("mongoose");
const schema = mongoose.Schema;

const childSchema = schema({
    name:{
        type: String
    },
    sex:{
        type: String
    },
    dob:{
        type: String
    },
    fatherName:{
        type: String
    },
    motherName:{
        type: String
    },
    district_id:{
        type: mongoose.Schema.Types.ObjectId, ref:"district"
    }
});

const Child = mongoose.model("child", childSchema);

module.exports = Child;