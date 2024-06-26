//function

//no argument function
function getName(){
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}

//one argument function
function getNumber(num1=100){
    console.log(num1);
}
// getNumber(1000);

//multi argument function
function sum(num1= 0, num2= 0){
    console.log(num1+num2);
}
// sum(100);


// var num10=1000; //global variable
// function testing(){
//     var num1=10; //local variable
//     console.log("from function >"+num10);
// }
// testing();
// console.log(num1);  can't


//type function vs void function

//need return
function typeFunction(num1,num2){
    return num1+num2;
}
var result= typeFunction(100,200);
console.log(result);

//no need return
function voidFunction(num1,num2){
    console.log(num1 + num2);
}
voidFunction(10,20);

//ways to write function
//normal function
function bye(){
    console.log("bye!");
}
bye();

//variable function
var greeting = function(){
    console.log("hello!");
}
greeting();

var greeting1 = function(name){
    console.log(name);
}
greeting1("suzy");

//arrow function
var greet = (name) => {
    console.log(name);
}
greet("somin");

var greet1 = () =>{
    console.log("hello world");
}
greet1();

//shortest function
var one= () => console.log("hello");  one();
var two= (a,b) => console.log(a+b); two(3,4);
var sum= (a=0,b=0,c=0,d=0) => console.log(a+b+c+d); sum(2,3,4);