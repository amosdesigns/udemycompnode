
/**
 *
 *
 */

var accounts = [
    {
        'currentBal': 9798.98,
        'name': "jerome"
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
        getAccount: function(name) {
        "use strict";
            var matchAcc;
            for( var x = 0; x < accounts.length; x++ ) {
                if (accounts[x].name === name){
                   matchAcc = accounts[x];
               }
            }
            return matchAcc;
    },

    deposit: function (name, amt) {
        // for amt - only accept number , use typeof
        if(typeof amt ==="number"){
            var n = this.getAccount(name);
            n.currentBal += amt;
            return  "  $"+n.currentBal+" is current level of the "+n.name+"account.";
        }
        return "ERROR: Deposit has failed. The amount pasted is not a number.";

    },
    withdraw: function (name, amt) {
        // for amt - only accept number , use typeof
        if(typeof amt ==="number") {
            var n = this.getAccount(name);
            n.currentBal -= amt;
            return  "  $"+n.currentBal+" remains in the "+n.name+"account.";
        }
        return "ERROR: Withdraw has failed. The amount pasted is not a number.";
    },
    getBalance: function (name) {
        var n = this.getAccount(name);
       var message ='++++++++++++++++++++++++++++++++++++++++++'+"\n"+
           "+++                                    +++"+"\n"+
           '+++   Your balance is: $'+n.currentBal+'.       +++'+"\n"+
           "+++                                    +++"+"\n"+
        '++++++++++++++++++++++++++++++++++++++++++';
        return message;

    },
    createBalanceGetter: function (name){
        var n = this.getAccount(name);
        "use strict";
        return function(){
            return n.currentBal;
        }
    }
}

console.log(bankServices.getAccount("jerome"));
console.log(bankServices.getBalance('jerome'));
var cindy = bankServices.createAccount( {"currentBal": 264748.90,
    "name": "cindy"});
var getCindyBal = bankServices.createBalanceGetter("cindy");
console.log(getCindyBal());
