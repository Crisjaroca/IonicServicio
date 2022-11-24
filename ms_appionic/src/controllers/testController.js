const contrServ = require("../services/testService");

const getPersonas = (req, res) => {
  const { body } = req;
  const data = {
    codigo: 200,
    mensajeRespuesta: "Proceso exitoso",
    data: contrServ.getPersonas(),
    timestamp: [2022, 10, 21],
  };
  res.status(200).send(data);
};

const getCursos = (req, res) => {
  const { body } = req;
  const data = {
    codigo: 200,
    mensajeRespuesta: "Proceso exitoso",
    data: contrServ.getCursos(),
    timestamp: [2022, 10, 21],
  };
  res.status(200).send(data);
};

module.exports = {
  getPersonas,
  getCursos,
};
