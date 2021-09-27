const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

/*
* Leer argumentos de forma clásica*/
// const[,,arg3 = 'base=5'] = process.argv
// const[, base = 5] = arg3.split('=')

/*
* Utilizando Yargs*/

// const base = 5;

crearArchivo(argv.b, argv.l, argv.u)
    .then(nombreArchivo=> console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err))

