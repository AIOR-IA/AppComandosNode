const argv = require('yargs')
    .command('crear', 'Es un comando para crear tareas ', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            default: false,
            alias: 'c'
        }
    })
    .command('listar', 'Es un comando para listar todas las tareas pendientes ', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Es un comando para actualizar una tarea pendiente ', {
        descripcion: {
            demand: true,
            alias: 'd'
        }

    })
    .command('eliminar', 'Comando para eliminar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}