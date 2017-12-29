"use strict";
/* --------------- CHAPTER 1 ----------*/
/*-------------------------------------*/

// variables

const myNum = 1;
let myString = 'Hello';
var myDog = 'Happy';

//statements - for example, the results of these -expressions-
//which are then assigned to variables

const result = myNum + myNum;
const sum = 2 + 2;

/*
 2 -- literal value expression
 sum -- variable expression
 b * 2 -- arithmetic expression
 a = b * 2 -- assignment expression
*/

//call expression statement
console.log(sum);

/* JavaScript is not interpreted.  It is actually being complied and then immediatley returned.
What effect does this have on efficiency?  To me it seems a major cause for concern.
*/

//input
const age = ("Please enter age: ");

//output
console.log(age);

//blocks
var amount = 10;
{
    amount = amount * 2;
    console.log(amount);
}
// if statement
if (amount >= 10){
    console.log(amount);
}
/* the chapter goes on to detail if/else statements and briefly touches
on the switch statement.  then the chapter covers the while/do-while loop,
and the for loop.

after this, functions are explained.
*/

//example function that takes a parameter
function square(x){
    return x * x;
}
//calling it
square(5); //should return the number 25

//scope
var a = 'hello';
function printA(){
    var a = 'myGoodness';
    console.log(a); //should print this version of a when called.
}
printA();

