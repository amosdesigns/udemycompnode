/**
 * Created by Jerome on 8/17/16.
 */

/**
 * setTimeout(function () {
    console.log('1');
}, 2000);

 setTimeout(function () {
    console.log('3');
}, 1000);

 console.log('2');

 */
console.log('challenges: ');
function printInTwoSeconds (mess) {
    // setTimeOut 2000
    setTimeout(function () {
        // console to print message var
        console.log(mess);
    }, 2000);
}
printInTwoSeconds("hello Async!!");
