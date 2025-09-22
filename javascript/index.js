// console.log("hello world")
// var a = 20
// console.log(a);
// if(a>10) {
//     let a=100;
//     console.log('a=' + a);
    
// }else{
//     console.log('hii');
    
// }
// console.log('hii ' + a);


// const a = 23;
// a = 10;


// function fun(msg) {
//     return "Hey...."+msg;
// }
// const data = fun("greeting.....");
// console.log(data);


// const data = function(a,b) {
//     return a*b;
// }
// console.log(data(2,3));


// arrow function

// const data = (msg) => {
//     console.log('hey....  using arrow function'+ msg);
    
// }
// data("in react development");

// const data = msg => msg;
// const output = data("greeting of the day");
// console.log(output);


// IIFE

// (function() {
//     console.log("welcome to MERN session")
// }) ();

// setTimeout(() => {
//     console.log('hiii.....');
    
// }, 1000);

// function greet(msg= "java") {
//     console.log(msg+' is a good language');
// }
// greet("python");


function selectLanguage(lang) {
    let result;
    if(lang == "java") {
        function javaCompiler() {
            return "using java compiler";
        }
        result = javaCompiler();
    } else if(lang == "C++") {
        function cCompiler() {
            return "using c ompiler"
        }
        result = cCompiler();
    } else if(lang == "python") {
        function pythonCompiler() {
            return "using python ompiler"
        }
        result = pythonCompiler();
    } else {
        result = "no compiler found"
    }
    return result;
}
console.log(selectLanguage("python"));

