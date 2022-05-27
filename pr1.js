/* С помощью цикла while вывести все простые числа в промежутке от 0 до 100 */


'use strict'

var i = 2;
var num = 100;
var primeArr = [];

while(i<=num) {
    if (i==2 || i==3 || i==5 ||i==7) {
        primeArr.push(i);
        i++
    }
    else if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 ) {
        i++;
    }
    else {
        primeArr.push(i++);
    }
}

console.log(primeArr);