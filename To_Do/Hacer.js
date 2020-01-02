const fs = require('fs');


let DATA = [];

const Guardar = () => {
    let datajson = JSON.stringify(DATA);

    fs.writeFile('BASE/data.json', datajson, error => {
        if (error) {
            throw new Error('Ocurrio un error al momento de intentar Guardar el ARCHIVO');
        } else {
            console.log('Archivo GUARDADO con exito !! ');
        }
    });
}

const CargarDB = () => {
    DATA = require('../BASE/data.json');
}
const crear = (descripcion) => {
    CargarDB();
    let hacer = {
        descripcion,
        completo: false
    }
    DATA.push(hacer);
    Guardar();
    return hacer;
}
const listar = () => {
    CargarDB();
    let sms = '';
    DATA.forEach(varp => {
        sms += ` Descripcion: ${varp.descripcion}  estado: ${varp.completo} \n`;
    });
    console.log(sms);
    sms = '';
}
const actualizar = (descripcion) => {
    CargarDB();
    let actualizar = DATA.findIndex(pa => pa.descripcion === descripcion);
    if (actualizar >= 0) {
        DATA[actualizar].completo = true;
        Guardar();
        console.log('Tarea Actualizada con exito');
    } else {
        console.log('Ocurrio un Error al momento de actualizar la tarea');
    }
}
const eliminar = (descripcion) => {
    CargarDB();
    let nuevalista = DATA.filter(da => {
        return da.descripcion !== descripcion;
    });
    if (nuevalista.length === DATA.length) {
        return false;
    } else {
        DATA = nuevalista;
        Guardar();
        return true;
    }


}
module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}