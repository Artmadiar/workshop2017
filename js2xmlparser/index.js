const js2xmlparser = require('js2xmlparser');

const parameters =
  [
    {
      nombre: 'P_EMPRESA',
      tipo: 'char',
      valor: 'const',
    }
  ];

let sParametros =
    {
      pagina: -1,
      registrospagina: -1,
      identificadorsql: '',
      validaciones: 'si',
      parametros: {parametro: parameters}
    };

console.log(js2xmlparser.parse('raiz', sParametros));
