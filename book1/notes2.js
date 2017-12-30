"use strict";
// CHAPTER 2 NOTES

var myString = 'hello';
var myNum = 42;
var myBool = true;

// ---------- typeof

typeof myString; //string
typeof myBool //boolean

// other types include undefined and object and symbol.
// "null" will return undefined when typeof is used on it.


// --------- objects

var obj = {
    a: 'hello world',
    b: 42,
    c: true
}

obj.a; //hello world
obj.b //42

obj["b"] // 42
obj["c"] // true


// arrays and objects can be thought of like subtypes of the object type.
function hello () {
    return 100;
}
// you can assign functions properties, much like objects.
hello.world = 'generic example';
typeof hello.world; //string

/*
'==' and '==='
the latter allows for coercion. the former does not.  
that's the difference.
*/

/* 
it's also important to keep in mind that the above equality operators
will not work when comparing objects and arrays as they will attempt to
compare the underlying references 
*/

/* 
if using equality operators >,<, etc, to compare 2 strings, 
the comparison will be done alphabetically.  if one is a string
and one is not, the values will be coerced to numbers
*/

/* 
If you try and reference a variable that in a scope where it is not available
a reference error will be thrown.
*/

//----------------- Immediatley Involved Function Expressions -------------//

//\\\\\\\\\\\\\\\\\\\\\\EXAMPLE 1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////

(function helloWorld () {
    console.log('Hello World!');
})();

//Logs 'Hello World!' to the console.

/* 
This type of function is executed
immediatley after being declared.
Notice that the function 
definition is being wrapped in parenthesis.
This is to prevent the function
declaration from being treated as a normal
function declaration.
*/

/*
You can also use this syntax to return variables.
*/

var twentyFive = (function square(){
    return 5 * 5;
})();
console.log(twentyFive);

//----------    Closure     -------------//

function makeAdder (x){
    function add(y){
        return y + x;
    }
    return add;
}

var plusOne = makeAdder(1);
console.log(plusOne(4)); // logs 5

//---------- Modules      ------------//

function User (){
    var username, password;
    function doLogin(user,pw){
        username = user;
        password = pw;
    }
    var publicAPI = {
        login: doLogin
    }
    return publicAPI;
}

//------ THIS --------------------//

/*
    The value of THIS depends on how the function was called.
    Here are four rules:
    1. in non strict mode 'this' on a function called in the global
    score will point to the global scope.
    in strict mode, it will return undefined.
    2. if a function is called as a property on an object,
    this will refer to the object itself
    3. you can use call, bind and apply to manually set
    where this will refer to.
    4. using new before a function that calls this
    will result in this being undefined.

*/

// ----------- PROTOTYPES --------------//

var cat = {
    species: 'cat'
}
var linus = Object.create(cat);

//This will create a new object instance of linus.  
//But it will have reference to the properites of the 'cat' parent.

linus.name = 'linus';

console.log(linus.species);
console.log(linus.name);