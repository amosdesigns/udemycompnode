/**
 * Created by Jerome on 8/15/16.
 */
/**
 * create to function that count down using a while and a for loop
 * called countDownWhile and countDownFor
 *
 */


var countDownWhile  = function (i, limit){
    "use strict";

    while (i > limit){
        console.log("WHILE: "+i);
        i--;
    }
};

var countDownFor  = function (i, limit){
    "use strict";
    for (;i > limit; i-- ) {
        console.log("FOR: " + i);
    }
};

countDownFor(1000, 0);
countDownWhile(10, 0);
