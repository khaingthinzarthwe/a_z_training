console.log("This is from external js.");
document.write("Hello World");
// alert("Dont's do it");
// confirm("Are you sure?")
// prompt("type something");

// user name
// userName / user_name (do)
// UserName / 1number / no_space/ no_specialcharacters/ no-/ 
// don't start underScore/ don't use meaningless words/ don't use keywords

//javaScript variable
// 1.string => "" , '' => "s" "sssss" "10"
// 2.integer => 10 100 1000 12345
// 3.booleans => true , false
// 4.float => 1.0 1.23 1.45 1.56778

console.log(typeof "hello");
console.log(typeof (10));
console.log(typeof ("10"));

//variable declartion
//let , var , const

let name = "ggone";
console.log(name);

var value= true;
console.log(value);

const num= 104;
console.log(num);

let about1={
    name1: "goeun",
    role: "main"
};
console.log(about1);

const about2 = function(){
    console.log("hi");
};
about2();

//override testing

let test1= "Eun-Tak" 
test1= "Dokkaebi’s bride";
console.log(test1);
//that is ok

var test2= "Eun-Tak" 
test2= "Dokkaebi’s bride";
console.log(test2);
//that is ok

// const test3= "Eun-Tak" 
// test3= "Dokkaebi’s bride";
// console.log(test3);
//that is not ok

var myVar = "global";      // Declare a global variable

function checkscope( ) {
    var myVar = "local";    // Declare a local variable
        document.write(myVar);
}