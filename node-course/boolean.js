/**
 * Created by Jerome on 8/13/16.
 */
var isValid = false;

if (isValid) {
    console.log('Data is valid');
} else {
    console.log('Data is not valid');
}

/**
 * create a function that toogles a var.
 * only switch var if it is of the type of boolean and do nothing if it is not.
 */
function toogleBoolean(a) {
    "use strict";
    if (typeof a === 'boolean') {
        return !a;
    }
    return false;
}

var my = 'false';

console.log(toogleBoolean(my));
