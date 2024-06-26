// let num1= 10;
// let num2= 20;
// let num3= "10";
// let A= true;
// let B= false;
// let num= 10;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 % num2);
// console.log(num1 + num2);
// console.log(num1 + num2);

// num1++;
// console.log(num1);
// console.log(num2--);
// console.log(++num3);
// console.log(--num2);
// num1--
// console.log(num1);

// num1 = ++num1;
// console.log(num1)
// result = ++num1;
// console.log(result);

// console.log(num1 == num2);
// console.log(num1 == num3);
//== value only !=
// console.log(num1 === num3);
//=== value+type !==
// console.log(num1 != num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

//logical operators
// console.log(A && B);
// console.log(A || B);
// console.log(!(A && B));
// console.log(!(A || B));

//assignment operators
// console.log(num);
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);

// let result1;
//typeOf operators;
// result1= typeof(num);
// console.log(result1);

// let result2;
//comparision or ternary operators
// if(10==10){
//     result2="same";
// }else{
//     result2="not same";
// }
// console.log(result2);

// let result2 = 10==10 ? "same" : "not same";
// console.log(result2);

//if else
// let fruit = "orange";
// if(fruit == "orange")console.log(fruit);

// if(fruit == "apple"){
//     console.log(fruit);
// }else{
//     console.log("This is not true");
// }

// if(fruit == "apple"){
//     console.log(fruit);
// }else if(fruit == "avocado"){
//     console.log("This is not true");
// }else if(fruit == "mango"){
//     console.log("This is not true");
// }else{
//     console.log("This is an apple");
// }
// console.log("The end");

let fruits= prompt("enter fruits name");

switch(fruits){
    case 'apple' : console.log("this is apple");break;
    case 'orange' : console.log("this is orange");break;
    case 'mango' : console.log("this is mango");break;
    case 'avocado' : console.log("this is avocado");break;
    default : console.log("this is another fruit");break;
}