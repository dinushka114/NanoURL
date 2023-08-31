const mongoose = require("mongoose");
const UrlSchema = require("../database/models/urls");
const { UniqueCharOTP } = require('unique-string-generator');
require("dotenv").config();

const validateHost = (shortedUrl) => {
    let PORT = process.env.PORT || 3001;

    let res = false;

    console.log(shortedUrl)
    if (shortedUrl == `http://localhost:${PORT}`) {
        res = true
    } else {
        res = false
    }

    return res
}


const shortUrl = async (req, res) => {
    try {

        const { url } = req.body;

        const isExists = await UrlSchema.findOne({ url: url })

        let uniqueId = UniqueCharOTP().toLocaleLowerCase();
        let PORT = process.env.PORT || 3001;
        let shortUrl = `http://localhost:${PORT}/${uniqueId}`;

        const newShort = new UrlSchema({
            url,
            uniqueId,
            shortUrl
        })

        await newShort.save();

        res.status(201).json({ msg: "Url shorted", url: shortUrl })


    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const accessUrl = async (req, res) => {
    try {

        let id = req.params.id;

        const actualUrl = await UrlSchema.findOne({ uniqueId: id })

        if (actualUrl) {

            res.redirect(actualUrl.url)


        } else {
            res.status(404).json({ msg: "Invalid url" })
        }




    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = { shortUrl, accessUrl }