let firstName = "arif";
let age = 33;
console.log(firstName);
console.log(age);

// a. Object
// b. premitive

// b. Premitive
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null

// 6. Symble
// 7. BigInit

//1. Number: It will show number
let day = 28;
console.log(day);

// 2. String: which one should be write on double quotation, but quotation patern must be same in whole website.
let lastName = "akondo";
console.log(lastName);

// 3. Boolean: its mean true or false
let isSinger = true;
console.log(isSinger);

// 4. Undefined: The value will define later, data is not selected. its mean Undefined
let homeCity;
console.log(homeCity);

// 5. Null: Its mean nothing.
let income = null;
console.log(income);

// How to know data type
console.log(age);
console.log(typeof age);
console.log(typeof homeCity);
console.log(typeof isSinger);

// undefined data assign
console.log(homeCity);
homeCity = "Dhaka";
console.log(homeCity);

// Boolean to string
console.log(isSinger);
isSinger = "Bangladeshi Singer";
console.log(isSinger);
console.log(typeof isSinger);

// bug(object): its not object its bug
console.log(typeof income);

// vairable declertation
/*
1. let
2. const
3. var
*/
// 1. let: For reassign data we will use let
let myAge = 33;
console.log(myAge);
myAge = 35;
console.log(myAge);

// 2. Const: which date will be not change or reassign. will try to use it maximum time
const birthyear = 1988;
console.log(birthyear);

// 3. var: we will not use var, its almost similler to let. its mainly use for Global Scope, Function Scope,
var job = "nothing";
console.log(job);

// JavaScript Operators
// 1. Arithmetic Operators
console.log(18 - 12);
let profit = 32 - 28;
console.log(profit);

let arifAge = 2022 - 1987;
console.log(arifAge);

let adritaAge = 2022 - 2017;
console.log(adritaAge);

// for short code
let currentYear = 2022;

let onikAge = currentYear - 1987;
console.log(onikAge);

let nolaAge = currentYear - 2020;
console.log(nolaAge);

// assign two variable in oneline
console.log(onikAge, nolaAge);

// age diff..
let ageDiff = onikAge - nolaAge;
console.log(ageDiff);

// Arithmetic Operators
// +
console.log(10 + 5);
//  -
console.log(10 - 5);
//  *
console.log(10 * 5);
// /
console.log(10 / 5);
// **
console.log(2 ** 5);
// %
console.log(25 % 3);
// ++
let x = 10;
x++;
console.log(x);
// --
let y = 20;
y--;
console.log(y);

console.log(100 - 50 + (40 * 20) / 2);

let goodName = "arif";
let surName = "akondo";
console.log(goodName + " " + surName);

// Assignment Operators
//=
let item = 10 + 5;
console.log(item);
// +=
let b = 15;
b += 10; /*b = b + 10*/
console.log(b);

// -/
let c = 20;
c -= 15; /*= c -15*/
console.log(c);

// *=
let z = 5;
z *= 5; /*z= z * 5*  so {5*5=25}*/
console.log(z);

// /=
let w = 15;
w /= 3; /*w = w / 3*/
console.log(w);




// class 3 started

// arithic oparetor
let a = 6;
let b = 4;
console.log(" a + b = ", a+b)
console.log(" a - b = ", a-b)
console.log(" a * b = ", a*b)
console.log(" a / b = ", a/b)
console.log(" a ** b = ", a**b)
console.log(" a % b = ", a%b)
console.log(" a++ = ", a++)
console.log(" ++a = ", ++a)
console.log(" a-- = ", a--)
console.log(" --a = ", --a)

// asgnment oparetor

let nola =1;
console.log("nola is now =", nola)
nola += 5;
console.log("nola is now =", nola)
nola -= 5;
console.log("nola is now =", nola)
nola *= 5;
console.log("nola is now =", nola)
nola /= 5;
console.log("nola is now =", nola)
nola %= 5;
console.log("nola is now =", nola)
nola **= 1;
console.log("nola is now =", nola)

// comparison oparetor

let comp1 = 7;
let comp2 = 6;
console.log(" comp1 == comp2 is", comp1==comp2)
console.log(" comp1 != comp2 is", comp1!=comp2)
console.log(" comp1 === comp2 is", comp1===comp2)
console.log(" comp1 !== comp2 is", comp1!==comp2)
console.log(" comp1 > comp2 is", comp1>comp2)
console.log(" comp1 < comp2 is", comp1<comp2)
console.log(" comp1 >= comp2 is", comp1>=comp2)
console.log(" comp1 <= comp2 is", comp1<=comp2)

// logical oparetor

let x = 6;
let y = 4;
console.log(x>y && x==6)
console.log(x<y || x==6)
console.log(!true)


// if else

let a = prompt('what is your age');
if (a < 0) {
  alert('this is invalid age');
}
else if (a>17){
  alert('you can talk him');
}
else if (a>9){
  alert('may be he can!');
}
else {
  alert('no way');
}