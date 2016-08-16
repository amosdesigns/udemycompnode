/**
 * Created by Jerome on 8/13/16.
 */
/**
 * task:create new pet object.
 * name and type
 * print pet - takes type and name
 * you own a xxxx and it's name is xxxxx.
 */

var pet = {
    name: "bob",
    type: "cat",
    printThis: function (name, type){
        "use strict";
        return 'you own a ' +type+ ' and it\'s name is '+ name+ '.';
    }
}
 console.log(pet.printThis(pet.name,pet.type));


