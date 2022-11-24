const express = require("express");
const controllers = require("../../controllers/testController");

const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("<h1>Hola mundo!!!!</h1>");
  })
  .get("/getPersonas", controllers.getPersonas)
  .get("/getCursos", controllers.getCursos);
module.exports = router;
