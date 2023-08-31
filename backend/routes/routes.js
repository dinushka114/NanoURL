const router = require("express").Router();
const { shortUrl, accessUrl } = require("../controllers/controller")

router.post("/short-url", async (req, res) => {
    await shortUrl(req, res);
})

router.get("/:id", async (req, res) => {
    await accessUrl(req, res);
})

module.exports = router;