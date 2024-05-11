const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

const eventmodel = new mongoose.Schema({

        username:String,
        email: String,
        password: String,
        mobile: Number,


})
eventmodel.plugin(plm)
module.exports = mongoose.model("event", eventmodel);