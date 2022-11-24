const contr = require("../database/TestData");

const getPersonas = () => {
  return contr.getPersonas();
};

const getCursos = () => {
  return contr.getCursos();
};

module.exports = {
  getPersonas,
  getCursos,
};
