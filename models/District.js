const mongoose = require("mongoose");
const schema = mongoose.Schema;

const districtSchema = schema({
    district:{
        type: String
    },
    state_id:{
        type: mongoose.Schema.Types.ObjectId, ref:"state"
    }
});

const District = mongoose.model("district", districtSchema);

module.exports = District;