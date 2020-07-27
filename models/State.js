const mongoose = require("mongoose");
const schema = mongoose.Schema;

const stateSchema = schema({
    state:{
        type: String
    }
});

const State = mongoose.model("state", stateSchema);

module.exports = State;