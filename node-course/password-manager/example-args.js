/**
 * Created by Jerome on 8/16/16.
 */
var argv = require('yargs')
    .command('hello', 'greets the user', function (yargs){
        "use strict";
        yargs.options({
            name: {
                demand: true,
                alias: 'fn',
                description: "your first name goes here"
            },
            lastname: {
                demand: true,
                alias: 'ln',
                description: "your last name goes here"
            }
        });
    })
    .help("help")
    .argv;

var command = argv._[0];

console.log(argv);
if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
    console.log('Hello, ' + argv.name + ' ' + argv.lastname + '.Game on!!!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
    console.log('Hello, ' + argv.name + '. Shall we play a game?');
} else if (command === 'hello') {
    console.log('Hello,World!!');
}
