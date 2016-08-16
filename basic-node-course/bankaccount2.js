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
        currentBal: 9798.98,
        name: "jerome"
    }
];



var bankServices = {
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
       var message ='++++++++++++++++++++++++++++++++++++++++++'+"\n"+
           "+++                                    +++"+"\n"+
           '+++   Your balance is: $'+n.currentBal+'.       +++'+"\n"+
           "+++                                    +++"+"\n"+
        '++++++++++++++++++++++++++++++++++++++++++';
        return message;

    }
}
console.log(accounts);
bankServices.createAccount({name:"cindy", currentBal: 27349.67});

console.log(bankServices.getAccount("jerome"));
console.log(bankServices.getAccount("cindy"));

console.log(bankServices.getBalance('cindy'));
console.log(bankServices.getBalance('jerome'));


console.log(bankServices.withdraw('jerome', 561.00));
console.log(bankServices.withdraw('cindy', 1073.80));

console.log(bankServices.deposit('cindy', 339.50));
console.log(bankServices.deposit('jerome', 466.87));

console.log(bankServices.getAccount("cindy"));
console.log(bankServices.getAccount("jerome"));
console.log(accounts);
