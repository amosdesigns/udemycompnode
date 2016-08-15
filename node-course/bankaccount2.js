/**
 * Created by Jerome on 8/13/16.
 */
/**
 * @TODO Bank Account 2
 * account object
 * @number balance
 * @string username
 *
 * @method createAccount(username)
 * push onto accounts array
 * return account
 *
 * @method getAccount(username)
 * find matching account using forEach
 *
 */

var accounts = [
    {
        currentBal: 924846798.98,
        name: "jerome"
    }

];

var bankSevice = {
        createAccount: function (acc){
            "use strict";
            if (typeof acc ==="object"){
            accounts.push(acc);
            return acc;
            }
            return false;
        },
        getAccount: function(username) {
        "use strict";
            var matchAcc;
            accounts.forEach(function (acc){
                if (acc.name === username){
                    matchAcc = acc;
                }
            });
            return matchAcc;
    },

    deposit: function (name, amt) {
        var n = this.getAccount(name);
        n.currentBal += amt;
        return true;
    },
    withdraw: function (name, amt) {
        var n = this.getAccount(name);
            n.currentBal -= amt;
            return true;
    },
    getBalance: function (name) {
        var n = this.getAccount(name);
       return  'Your balance is: $'+n.currentBal+'.'
    }
}

console.log(bankSevice.getAccount("jerome"));
bankSevice.createAccount({name:"cindy", currentBal: 0});
console.log(bankSevice.getAccount("cindy"));
console.log(bankSevice.getBalance('cindy'));
console.log(bankSevice.withdraw('jerome', 100));
console.log(bankSevice.deposit('cindy', 100));
console.log(bankSevice.getAccount("cindy"));
console.log(bankSevice.getAccount("jerome"));

