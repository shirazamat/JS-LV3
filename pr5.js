
/* Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5: */


'use strict'

var j = 0;
var row = 20;
var sum ='';
while(j<=row){
    sum+='x';
    j++
    console.log(sum);
}