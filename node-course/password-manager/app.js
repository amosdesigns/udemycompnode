/**
 * Created by Jerome on 8/15/16.
 */
console.log('*****************************************************');
console.log('************  starting password manager  ************');
console.log('*****************************************************');

var storage = require('node-persist');
//you must first call storage.init or storage.initSync
storage.initSync();

//then start using it
// storage.setItem('accounts',[{
//    username: 'Jerome',
//    balance: 0
// }]);
 var accounts = storage.getItem('accounts');
// push on a new account
accounts.push({
    username: 'cindy',
    balance: 2354
});
storage.setItem(accounts);

//save using setItemSync


 // console.log('Saved name is: '+ name[0].username);
