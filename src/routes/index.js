const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.render("index", {title: "EJEMPLO DE AR"});
});

router.get("/contact", (req,res) => {
    res.render("contact", {title: "EJEMPLO DE AR DE CONTACTO"});
});

module.exports = router;