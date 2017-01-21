const js2xmlparser = require('js2xmlparser');

const parameters =
  {
    nombre: 'P_EMPRESA',
    tipo: {
        field: 'value'
      },
    valor: 'const',
  };
console.log(js2xmlparser.parse('parametro', parameters));
