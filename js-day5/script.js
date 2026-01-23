let sentence ="I am a comma separated sentence";
let words=sentence.split(" ");
console.log(words);

let chars=sentence.split("a");
console.log(chars);

//find out the occurance of "r" in th given text
let str="tu meri me tera me tera tu meri";
let count=str.split("r").length -1;
console.log(count);

//types of functions 
//1. rehular function
// function demo(){
//     console.log("this is a regular function");
// }
// demo();

// function sample(){
//     console.log("this is a sample function");
// }
// sample();


//callback function =  passing function as an argument to another function

//callback=demo()
function sample(callback){
    console.log("sample");
    callback();
}

function demo(){
    console.log("demo");
}
sample(demo);

//arrow function
const demo3 = () => {
    return "demo3";
}
console.log(demo3());

const demo4 = () => "demo4";
console.log(demo4());

//first class function 
//1. we can treat variables as function
//2. we can pass function as an argument inside another function
//3. we can return function from another function

function test(){
    return function(){
        console.log("test2");
        return function test3(){
            console.log("test3");
        }
}
}
//test()()();
let value=test();
let value2=value();
value2();

//high order function
//1. function which takes another function as an argument
//2. function which returns another function    
// Map,filter,reduce are high order functions

//anonymous function
setTimeout(() => {
   
}, 2000);        

//self invoking function(iife) : to obtain data privacy
//and to call a function immediately after the function scope(declaration)
function classtest(){
    console.log("classtest");
}
let a=10;
function midterm(){
    classtest();
}
midterm();

let test5=(function(){
    return "sample5";
})();
console.log(test5);