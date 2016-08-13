/**
 * Created by Jerome on 8/13/16.
 */
var grades = [11, 50,23,100];
/**
 * grades.push(79);
 grades.push(98);
 grades.push(68);
 grades.push(75);
 var grade = grades.pop();
 grades.unshift(99);
 console.log(grades);
 console.log(grade);
 grades.forEach(function(grade){
    "use strict";
    console.log(grade);
});

 console log total grade avg.
 */
/**
 * forEach  -> to add total grades
 * totalGrades / totalNum = avg
 */
grades.push(79);
var totalgrades = 0;
grades.forEach(function(grade){
    "use strict";
    console.log(grade);
    totalgrades+=grade;
    console.log('the new totalgrade is: '+totalgrades);
});
var theAvg = totalgrades/grades.length;
console.log("the avg. grade is: "+theAvg);

