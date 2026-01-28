// two types of data types

// 1.primitive

/*
    NumberBigInt
    String
    boolean
    Symbol
    undefined
*/

// 2.non primitive

/* 
    Array
    Object
    Function
*/

// 1.primitive


let num = 1;
let num2 = 2;

console.log("num",num,num2);

let name = "prince";
let name2 = "jaydeep";

console.log("names :",name2,name);


//Boolean


let isTrue = true;
let isFalse = false;

console.log("boolean :",isTrue);


//undefined


let a;
console.log("undefined :",a);



let BigInt = 1234567806543233n;
console.log(BigInt);


// 2. Non - primitive

//object


let Student = {
    name : "prince",
    roll : 65,
    address:{
        city:"ksd",
    }
}
console.log(Student);


//Array


let arr = [1,2,3,4,5,6,7,8,9];
let student = {

}
let arrayOfStud = [{},{}]

console.log(arr);


//Function


function greet() {
    console.log("this is function");
}
greet();


function showValues(value){
    console.log("this is value",value);
    if(value == 20){
        console.log("number");
    }
}
showValues();
showValues(20);
showValues([1,2,3,4,5]);


function sum (num1,num2){
    
    if(num1,num2 == null){
        console.log("this is null");
    }
    else
    {
        console.log("add",num1+num2);
        console.log("sub",num1-num2);
        console.log("multi",num1*num2);
        console.log("divi",num1/num2);
    }

}
sum(10,5)
sum()


const add = (num1 = 10, num2 = 5) => {
    return num1 + num2
}
console.log("this is arrow fun. : " , add(20,10));

const sub = (num1 = 10, num2 = 5) => {
    return num1 - num2
}
console.log("this is arrow fun. : " , sub(20,10));

const multi = (num1 = 10, num2 = 5) => {
    return num1 * num2
}
console.log("this is arrow fun. : " , multi(20,10));

const divi = (num1 = 10, num2 = 5) => {
    return num1 / num2
}
console.log("this is arrow fun. : " , divi(20,10));

let value = 10;
console.log('DEFAULT VALUE : ',value);

value += 5 // value + 5
console.log(value)

value -= 5 // value - 5
console.log(value)

value *= 5 // value * 5
console.log(value)

value /= 5 // value / 5
console.log(value)


let age = 20;
let hasId = false
let names = "students"
let obj = {
    names : 'example',
    rollNo : 22
}

console.log("logical AND (&&) : ", age > 18 && hasId);
console.log("logical OR (||) : ", age < 18 || hasId)
console.log("logical NOT (!) : ", !hasId)

console.log(typeof  age)
console.log(typeof  hasId)
console.log(typeof  name)
console.log(typeof  obj)

let value1 = 10;
let num1 = "10";

console.log("value == num1 : ", value == num1);
console.log("value === num1 : ", value === num1);
console.log("value != num1 : ", value != num1);