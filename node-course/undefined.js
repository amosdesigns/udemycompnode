/**
 * Created by Jerome on 8/13/16.
 */
var name = undefined;
function greetUser(name){
    "use strict";
    if (typeof name === 'string' ){
        return "Hello, "+name+"!";
    }
    return "Hello, world!!";
}
console.log(greetUser("bob"));
console.log(greetUser());
