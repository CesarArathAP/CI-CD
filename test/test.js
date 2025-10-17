const assert = require('assert');
const saludo = require('../script.js');

describe('Prueba de saludo', () => {
  it('Debe retornar el texto correcto', () => {
    assert.strictEqual(saludo(), 'Hola desde JavaScript!');
  });
});