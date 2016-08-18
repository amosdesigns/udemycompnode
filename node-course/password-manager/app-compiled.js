'use strict';

/**
 * Created by Jerome on 8/15/16.
 */
console.log('*****************************************************');
console.log('************  starting password manager  ************');
console.log('*****************************************************');
var crypto = require('crypto-js');
var storage = require('node-persist');

storage.initSync();
var argv = require('yargs').command('create', 'creates the new account', function (yargs) {
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
            alias: 'u',
            description: "your username or email goes here",
            type: 'string'
        },
        password: {
            demand: true,
            alias: 'p',
            description: "your password goes here",
            type: 'string'
        },
        masterPassword: {
            demand: true,
            alias: 'm',
            description: "your master password goes here",
            type: 'string'
        }
    }).help("help");
}).command('get', 'Get an Exiting account', function (yargs) {
    "use strict";

    yargs.options({
        accountname: {
            demand: true,
            alias: 'n',
            description: "your account name goes here (twitter, facebook)",
            type: 'string'
        },
        masterPassword: {
            demand: true,
            alias: 'm',
            description: "your master password goes here",
            type: 'string'
        }

    }).help("help");
}).help("help").argv;

var command = argv._[0];
///////////////////////////////////
///////////////////////////////////

/**
 * getAccounts
 * @param masterPassword
 * @returns {Array}
 */
function getAccounts(masterPassword) {
    "use strict";
    // use getItemSync to fetch accounts

    var encryptedAccount = storage.getItemSync('accounts'),
        accounts = [];
    // decrypt
    if (typeof encryptedAccount !== 'undefined') {
        var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
        accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
    // return accounts array
    return accounts;
}

/**
 * saveAccounts
 * @param accounts
 * @param masterPassword
 * @returns {*}
 */
function saveAccounts(accounts, masterPassword) {
    "use strict";

    var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
    storage.setItemSync('accounts', encryptedAccounts.toString());
    return accounts;
}

/**
 * createAccount
 * @param account
 * @param masterPassword
 * @returns {*}
 */
function createAccount(account, masterPassword) {
    "use strict";

    var accounts = getAccounts(masterPassword);
    accounts.push(account);
    saveAccounts(accounts, masterPassword);

    return account;
}

/**
 * getAccount
 * @param accountName
 * @param masterPassword
 * @returns {*}
 */
function getAccount(accountName, masterPassword) {
    "use strict";

    var accounts = getAccounts(masterPassword),
        matchAcc;
    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchAcc = account;
        }
    });
    return matchAcc;
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
if (command === 'create') {
    //try
    try {
        var createdAccount = createAccount({
            name: argv.accountname,
            username: argv.username,
            password: argv.password
        }, argv.masterPassword);
        console.log('Account created!');
        console.log(createdAccount);
    } catch (e) {
        console.log('Unable to create account.');
    }
} else if (command === 'get') {
    // try
    try {
        var gotAccount = getAccount(argv.accountname, argv.masterPassword);
        if (typeof gotAccount === "undefined") {
            console.log('ERROR: Account name Not Found!');
        } else {
            console.log('Success: Account name found!');
            console.log(gotAccount);
        }
    } catch (e) {
        console.log('unable to get account.');
    }
}

//# sourceMappingURL=app-compiled.js.map