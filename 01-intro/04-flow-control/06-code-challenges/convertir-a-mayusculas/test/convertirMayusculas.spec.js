const Assert = require('chai').assert;
const convertir = require('../solution/convertirMayusculas');

describe("convertir()", () => {

  it("debería retornar la primer y última letra en de un string en mayúsculas", () => {
    Assert.deepEqual(convertir("murcielago"), "MurcielagO");
    Assert.deepEqual(convertir("sol"), "SoL");
    Assert.deepEqual(convertir("abecedario"), "AbecedariO");
  });

  it("debería retornar '' si no se le ingresa ningun parametro", () => {
    Assert.deepEqual(convertir(""), '');
  });

});