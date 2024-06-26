//while

// let num = 1;

// while(num <= 10){
//     console.log("number is "+ num);
//     num++;
// }
// console.log("end");

//do while

// let num=100;
// do{
//     console.log("number is "+num);
//     num++;
// }while(num <= 10);
// console.log("the end");

//for(declaration, condition, increment/decrement){}
// for(let num=0; num <= 5; num++){
//     console.log(num);
// }

let num1,num2;
num1= parseInt(prompt("enter number less than 5"));
while(num1>5){
    num1= parseInt(prompt("enter number less than or equal 5"));
}

num2= parseInt(prompt("enter number greater than 5"));
while(num2<=5){
    num2= parseInt(prompt("enter number less than 5"));
}
for(num1; num1<=num2; num1++){
    console.log(num1);
}