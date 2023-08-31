const { Schema, model } = require("mongoose");

const urlSchema = new Schema({

    url: String,
    uniqueId:String,
    shortUrl: String

}, { timestamps: true });

module.exports = model("Url", urlSchema)