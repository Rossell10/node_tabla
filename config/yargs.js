const argv = require('yargs')
    .options({
        'b': {
            alias: "base",
            demandOption: true,
            description: 'Base of multiplication table',
            type: "number",
        }, 'l': {
            alias: "list",
            default: false,
            description: 'Flag to list',
            type: "boolean",
        }, 'u': {
            alias: 'until',
            default: 10,
            type: "number",
            description: 'Until to what number'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;