const fs = require("fs");
require('colors')
const crearArchivo = async (base = 5, list = false, until = 10) => {
    try {
        let salida = '';
        let archive = ''
        salida += '=====================\n'.red;
        salida += `    Tabla del ${String(base).underline.green}\n`;
        salida += '=====================\n'.red;
        for (let i = 1; i <= until; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            archive += `${base} x ${i} = ${base * i}\n`;
        }

        if(list) console.log(salida);

        fs.writeFileSync(`./output/tabla-${base}.txt`, archive);

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`)
        // })

        return `tabla-${base}.txt`.rainbow;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    crearArchivo
}