// let firstName = "arif";
// let age = 33;
// console.log(firstName);
// console.log(age);

// // a. Object
// // b. premitive

// // b. Premitive
// // 1. Number
// // 2. String
// // 3. Boolean
// // 4. Undefined
// // 5. Null

// // 6. Symble
// // 7. BigInit

// //1. Number: It will show number
// let day = 28;
// console.log(day);

// // 2. String: which one should be write on double quotation, but quotation patern must be same in whole website.
// let lastName = "akondo";
// console.log(lastName);

// // 3. Boolean: its mean true or false
// let isSinger = true;
// console.log(isSinger);

// // 4. Undefined: The value will define later, data is not selected. its mean Undefined
// let homeCity;
// console.log(homeCity);

// // 5. Null: Its mean nothing.
// let income = null;
// console.log(income);

// // How to know data type
// console.log(age);
// console.log(typeof age);
// console.log(typeof homeCity);
// console.log(typeof isSinger);

// // undefined data assign
// console.log(homeCity);
// homeCity = "Dhaka";
// console.log(homeCity);

// // Boolean to string
// console.log(isSinger);
// isSinger = "Bangladeshi Singer";
// console.log(isSinger);
// console.log(typeof isSinger);

// // bug(object): its not object its bug
// console.log(typeof income);

// // vairable declertation
// /*
// 1. let
// 2. const
// 3. var
// */
// // 1. let: For reassign data we will use let
// let myAge = 33;
// console.log(myAge);
// myAge = 35;
// console.log(myAge);

// // 2. Const: which date will be not change or reassign. will try to use it maximum time
// const birthyear = 1988;
// console.log(birthyear);

// // 3. var: we will not use var, its almost similler to let. its mainly use for Global Scope, Function Scope,
// var job = "nothing";
// console.log(job);

// // JavaScript Operators
// // 1. Arithmetic Operators
// console.log(18 - 12);
// let profit = 32 - 28;
// console.log(profit);

// let arifAge = 2022 - 1987;
// console.log(arifAge);

// let adritaAge = 2022 - 2017;
// console.log(adritaAge);

// // for short code
// let currentYear = 2022;

// let onikAge = currentYear - 1987;
// console.log(onikAge);

// let nolaAge = currentYear - 2020;
// console.log(nolaAge);

// // assign two variable in oneline
// console.log(onikAge, nolaAge);

// // age diff..
// let ageDiff = onikAge - nolaAge;
// console.log(ageDiff);

// // Arithmetic Operators
// // +
// console.log(10 + 5);
// //  -
// console.log(10 - 5);
// //  *
// console.log(10 * 5);
// // /
// console.log(10 / 5);
// // **
// console.log(2 ** 5);
// // %
// console.log(25 % 3);
// // ++
// let x = 10;
// x++;
// console.log(x);
// // --
// let y = 20;
// y--;
// console.log(y);

// console.log(100 - 50 + (40 * 20) / 2);

// let goodName = "arif";
// let surName = "akondo";
// console.log(goodName + " " + surName);

// // Assignment Operators
// //=
// let item = 10 + 5;
// console.log(item);
// // +=
// let b = 15;
// b += 10; /*b = b + 10*/
// console.log(b);

// // -/
// let c = 20;
// c -= 15; /*= c -15*/
// console.log(c);

// // *=
// let z = 5;
// z *= 5; /*z= z * 5*  so {5*5=25}*/
// console.log(z);

// // /=
// let w = 15;
// w /= 3; /*w = w / 3*/
// console.log(w);




// class 3 started

// arithic oparetor
// let a = 6;
// let b = 4;
// console.log(" a + b = ", a+b)
// console.log(" a - b = ", a-b)
// console.log(" a * b = ", a*b)
// console.log(" a / b = ", a/b)
// console.log(" a ** b = ", a**b)
// console.log(" a % b = ", a%b)
// console.log(" a++ = ", a++)
// console.log(" ++a = ", ++a)
// console.log(" a-- = ", a--)
// console.log(" --a = ", --a)

// asgnment oparetor

// let nola =1;
// console.log("nola is now =", nola)
// nola += 5;
// console.log("nola is now =", nola)
// nola -= 5;
// console.log("nola is now =", nola)
// nola *= 5;
// console.log("nola is now =", nola)
// nola /= 5;
// console.log("nola is now =", nola)
// nola %= 5;
// console.log("nola is now =", nola)
// nola **= 1;
// console.log("nola is now =", nola)

// comparison oparetor

// let comp1 = 7;
// let comp2 = 6;
// console.log(" comp1 == comp2 is", comp1==comp2)
// console.log(" comp1 != comp2 is", comp1!=comp2)
// console.log(" comp1 === comp2 is", comp1===comp2)
// console.log(" comp1 !== comp2 is", comp1!==comp2)
// console.log(" comp1 > comp2 is", comp1>comp2)
// console.log(" comp1 < comp2 is", comp1<comp2)
// console.log(" comp1 >= comp2 is", comp1>=comp2)
// console.log(" comp1 <= comp2 is", comp1<=comp2)

// logical oparetor

// let x = 6;
// let y = 4;
// console.log(x>y && x==6)
// console.log(x<y || x==6)
// console.log(!true)




// let name = " moon ";
// const functionn = (name) => {
//     // const nameee = "moon";
//     return 25 + name;
// }
// const aname = functionn("pagol");
// console.log(aname)



// class 7 code 

// object


/*const userobject = {
    firstName: " nola ",
    lasrName: " khan ",
    birthDay: 1998,
    className: "Ten",
};
// console.log(userobject);
// console.log(userobject["firstName"])
// console.log(userobject.birthDay)

//add 
userobject.hobby = "song";
console.log(userobject);
userobject.birthPlace = "bogra";
console.log(userobject);
// userobject["birthPlace"] = "bogra";
console.log(userobject["birthPlace"])
// console.log(userobject);*/




/*const userobjectTwo = {
    firstName: " nola ",
    lasrName: " khan ",
    isjob: true,
    calculateAge: function (birthYear) {
        return 2022 - birthYear;
    }
};
console.log(userobjectTwo);
console.log(userobjectTwo.isjob)
console.log(userobjectTwo.calculateAge(1998))
console.log(userobjectTwo["calculateAge"] (2000))*/


/*const userobjectTwo = {
    firstName: " nola ",
    lasrName: " khan ",
    birthYear: 1998,
    isjob: true,
    calculateAge: function () {
        console.log(this.birthYear);
        return 2022 - this.birthYear;
    }
}
console.log(userobjectTwo.calculateAge())*/

// const userobjectTwo = {
//     firstName: " nola ",
//     lasrName: " khan ",
//     birthYear: 1998,
//     isjob: true,
//     calculateAge: function () {
//         return 2022 - this.birthYear;
//     },
//     userDetails: function () {
//         return `This is user ${this.firstName} ${this.lasrName}, born in ${this.birthYear}, job ${this.isjob}`
//     }
// }
// console.log(userobjectTwo.calculateAge())
// console.log(userobjectTwo)




// for loop

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");
// for(let task = 1; task <=8; task++){
//     console.log(`task ${task}`)
// }

// for loop 2nd exm
// for(let i=1; i<=200; i++){
//     console.log(`i ${i}`)
// }

// for loop 3rd exm
// for(let moon = 1; moon <=400; moon++){
//     console.log(`moon ${moon}`)
// }

// exmpl real
// const newArray =[ 
//     "Task 1",
//     "Task 2",
//     "Task 3",
//     "Task 4",
//     "Task 5",
//     "Task 6",
//     "Task 7"
// ];
// console.log(newArray)

// for (let i = 0; i <=5; i++){
//     console.log(newArray[i]);
// }
// new exm
// for (let i = 0; i < newArray.length; i++){
//     console.log(newArray[i])
// }

// // backcode
// for (let i = newArray.length - 1; i >= 0; i--){
//     console.log(newArray[i])
// }
// loop break
// for ( let i =0; i < newArray.length; i++){
//     if (i == 4) break;
//     console.log(newArray[i])
// }
// for ( i = 0; i < newArray.length; i++){
//     if (i == 6) break;
//     console.log(newArray[i])
// }
// loop skip
// for ( i = 0; i < newArray.length; i++){
//     if (i == 6) continue;
//     console.log(newArray[i])
// }



// while loop
// let i = 1;
// while (i <= 10){
//     console.log(`i ${i}`)
//     i++
// }

// const newArray =[ 
//     "Task 1",
//     "Task 2",
//     "Task 3",
//     "Task 4",
//     "Task 5",
//     "Task 6",
//     "Task 7",
//     "Task 8",
// ];
// // let i = 1;
// // while (i <= 5){
// //     console.log(newArray[i]);
// //     i++
// // }
// let i = 0;
// while(i < newArray.length){
//     console.log(newArray[i])
//     i++
// }
// back code
// let i = newArray.length -1;
// while(i >= 0){
//     console.log(newArray[i])
//     i--
// }
// let i = 0;
// while (i < newArray.length){
//     if (i == 5) break;
//     console.log(newArray[i])
//     i++
// }

// array
// const newArray =[ 
//     "Task 1",
//     "Task 2",
//     "Task 3",
//     "Task 4",
//     "Task 5",
//     "Task 6",
//     "Task 7",
//     "Task 8",
// ];
// console.log(newArray)

// console.log(newArray.indexOf("Task 5"))
// console.log(newArray.indexOf("Task 3"))

// console.log(newArray.includes("Task 3"))
// console.log(newArray.includes("Task 13"))







// class 8 code


// const calculateAge = function (birthYear) {
//     return 2022 - birthYear ;
// }
// // const aAge = calculateAge(1979)
// // console.log(aAge)
// const jobLeft = function (birthYear){
//     const Age = calculateAge (birthYear);
//     return 65 - Age;
// }
// // console.log(jobLeft(1995))
// const ajobleft = jobLeft(1990)
// console.log(ajobleft);


// function displayText(){
//     console.log("This is console text!")
// }
// function alarttext(){
//     alert("This is alert text!")
// }

// const text = 'I LOve "Bangladesh"';
// console.log(text)
// const text2 = "I LOve \"Bangladesh\"";
// console.log(text2)

// string methods
// const x = "mr moon";
// console.log(x.length)

// String slice
// const fruits ="Apple, Banana, Mango";
// console.log(fruits)
// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);
// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);
// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);
// console.log(fruit1, fruit2, fruit3);
// const fruit4 = fruits.substring(0, 5);
// console.log(fruit4);

// Negative Slice

// const fruits ="Apple, Banana, Mango";
// const fruit1 = fruits.slice(-5);
// console.log(fruit1);
// const fruit2 = fruits.slice(-13, -7);
// console.log(fruit2);
// const fruit3 = fruits.slice(-20, -15);
// console.log(fruit3);

// String replace
// const text = "I Love Dhaka";
// console.log(text);
// const text1 = text.replace("Dhaka", "Bogura");
// console.log(text1)

// String toUpperCase
// const text = "Hello World"
// console.log(text)
// console.log(text.toUpperCase())

// String search
// const text = "Rahim moon nola moon"
// console.log(text.indexOf("nola"))

// console.log(text.lastIndexOf("moon"))


// console.log(text.search("moon"))
// console.log(text.search("Rahim"))


// class nine

const id1 = document.getElementById("id1");
// console.log(id1)
console.log(id1.innerHTML);
id1.innerHTML = "New Year";
document.getElementById("id1").innerHTML = "New year 2023"

const tag1 = document.getElementsByTagName("h1")[1];
// console.log(tag1.innerHTML);
// tag1.innerHTML = "My Header Two New"

document.getElementsByTagName("h1")[1].innerHTML = "moon"


const class1 = document.getElementsByClassName("class1")[0];
// console.log(class1)
// console.log(class1.innerHTML)
console.log(class1.innerText);
class1.innerText ="Mr Moon"


const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.style.color ="red"
id1.style.backgroundColor ="green";
id1.style.fontSize = "50px"


const id1 = document.getElementById("id1");
console.log(id1.innerText);
console.log(id1.attributes);
console.log(id1.attributes.length)



const id1 = document.getElementById("id1");
console.log(id1.innerText);
console.log(id1.getAttribute("class"))
console.log(id1.getAttribute("id"))


const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.removeAttribute("class");
id1.removeAttribute("id");


const id2 = document.getElementById("id2");
console.log(id2.innerText);
id2.setAttribute("class", "class2");