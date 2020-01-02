const argv = require('./Config/Yargs').argv;
const crear = require('./To_Do/Hacer').crear;
const listar = require('./To_Do/Hacer').listar;
const actualizar = require('./To_Do/Hacer').actualizar;
const eliminar = require('./To_Do/Hacer').eliminar;
let cmd = argv._[0];

switch (cmd) {
    case 'crear':

        crear(argv.descripcion);
        break;
    case 'listar':
        listar();
        break;
    case 'actualizar':
        actualizar(argv.descripcion);
        break;
    case 'eliminar':
        eliminar(argv.descripcion);
        break;
    default:
        console.log('Comando no existente');
        break;
}