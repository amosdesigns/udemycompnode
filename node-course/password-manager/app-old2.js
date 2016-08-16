/**
 * Created by Jerome on 8/15/16.
 */
console.log('*****************************************************');
console.log('************  starting password manager  ************');
console.log('*****************************************************');

var storage = require('node-persist');

storage.initSync();

// account.name facebook
// account.username User12!
// account.password Password123!

function createAccount (account){
    "use strict";
    var accounts = storage.getItemSync('accounts');

        if (typeof accounts ==='undefined'){
            accounts = [];
        }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;
}

function getAccount (accountName){
    "use strict";
    var accounts = storage.getItemSync('accounts'), matchAcc;

    accounts.forEach(function (account){
        if (account.name === accountName){
            matchAcc = account;
        }
    });
    return matchAcc;
}
/**
 *
 * creating an account
 *
 *
 *
 *
 *
 createAccount({
    name: 'Facebook',
    username: 'mail@amosdesigns.net',
    password: 'Password213!'
});
 */
var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);


