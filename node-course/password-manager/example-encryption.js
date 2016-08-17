/**
 * Created by Jerome on 8/17/16.
 */
var crypto = require('crypto-js');
var secretMessage = {
    name: 'jerome',
    secretName: '007'

};
var sercretKey = "123abc";

//encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), sercretKey);
console .log('encrypted Message: '+ encryptedMessage);

// decrypt Message
var bytes = crypto.AES.decrypt(encryptedMessage, sercretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage);
console.log(decryptedMessage.secretName);




