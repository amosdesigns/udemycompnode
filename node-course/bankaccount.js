/**
 * Created by Jerome on 8/13/16.
 */
/**
 * @TODO Bank account
 * create a function deposit
 * create a function withdraw
 * create a function getBalance
 *
 */
var bankAcc = {
    id: 1234,
    currentBal: 0,

    deposit: function (amt) {
        this.currentBal += amt;
        return true;
    },
    withdraw: function (amt) {
       this.currentBal -= amt;
        return true;
    },
    getBalance: function () {
       return  'Your balance is: $'+this.currentBal+'.';

    }
}

bankAcc.deposit(235);
console.log(bankAcc.getBalance());
bankAcc.withdraw(30);
console.log(bankAcc.getBalance());
