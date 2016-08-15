/**
 *
 *function greetMaker(name) {
    function greet(){
        "use strict";
        console.log('hello '+name+"!");
    }
return greet;
}


 var greetAndrew = greetMaker('Andew');
 greetAndrew();
 greetAndrew();
 greetAndrew();
 */


/**
 * createAdder(baseNumber)
 *
 * return function (numberToadd)
 *
 */

function createAdder(baseNumber) {
    return function (x) {
        return n = baseNumber+ x;
    }
}

var b = createAdder(10);
console.log(b(2));
