/**
 * Created by Jerome on 8/15/16.
 */
console.log('*****************************************************');
console.log('************  starting password manager  ************');
console.log('*****************************************************');

var storage = require('node-persist');

storage.initSync();
var argv = require('yargs')
    .command('create', 'creates the new account', function (yargs){
        "use strict";
        yargs.options({
           accountname: {
                demand: true,
                alias: 'n',
                description: "your account name goes here (twitter, facebook)",
                type: 'string'
            },
            username: {
                demand: true,
                alias: 'un',
                description: "your username or email goes here",
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'pass',
                description: "your password goes here",
                type: 'string'
            }
        }).help("help")
    }).command('get', 'Get an Exiting account', function (yargs) {
        "use strict";
        yargs.options({
            accountname: {
                demand: true,
                alias: 'n',
                description: "your account name goes here (twitter, facebook)",
                type: 'string'
            }
            }).help("help")
    })
    .help("help")
    .argv;
var command = argv._[0];
// --accountname facebook
// --username User12!
// --password Password123!

//get
//  --accountname

function createAccount(account) {
    "use strict";
    var accounts = storage.getItemSync('accounts');

    if (typeof accounts === 'undefined') {
        accounts = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;
}

function getAccount(accountName) {
    "use strict";
    var accounts = storage.getItemSync('accounts'), matchAcc;

    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchAcc = account;
        }
    });
    return matchAcc;
}

if (command ==='create'){
 var createdAccount = createAccount({
     name: argv.accountname,
     username: argv.username,
     password: argv.password
});
    console.log('Account creeated!');
    console.log(createdAccount);
} else if (command ==='get'){
    var gotAccount = getAccount(argv.accountname);
    if (typeof gotAccount ==="undefined"){
        console.log('ERROR: Account name Not Found!');
    } else {
        console.log('Account name found!');
        console.log(gotAccount);
    }
}





