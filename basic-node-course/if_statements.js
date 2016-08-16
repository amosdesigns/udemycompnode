/**
 * Created by Jerome on 8/12/16.
 */

var a = 23, b = 100, c = 67, avg;
avg = (a + b + c) / 3;
console.log('Your person average grade is: ' + avg);

if (avg === 100) {
    console.log('You got a perfect grade.you passed the course.');
} else if (avg >= 70) {
    console.log('you passed the course.');
} else {
    console.log('you fail the course. Sorry!!');
}

var afriendsName = "bob";
if (afriendsName == "bob" || afriendsName == 'jenny') {
    console.log('Hello Friend.');
} else if (afriendsName == 'Chet') {
    console.log('hey');
} else {
    console.log('hey stranger.');
}
