//Variable is a box where we can store values
/*
let js = "amazing";
if (js === "amazing")
//     alert("Javascript is FUN!");

console.log(40 + 8 + 23 - 10); //61

let firstName = "Tina"; //declared variable
console.log(firstName);

//ways that can write as variable
let amy_lee = "AL"
let jonas = "j";
let $function = "17";
console.log($function)

// variable don't write
// let Person = "jonas"
// write as below
let person = "amy";
//let 3year ="3"
let PI = 3.1415; //constant, therefore write all uppercase

//descriptive variable names (good practice)
let myFirstJob = "sales";
let myCurrentJob = "programmer";
//bad practice
let job1 = "sales";
let job2 = "programmer";

console.log(myFirstJob);

//10.
let javascriptIsFun = true;
console.log(javascriptIsFun); //true

//operator type of
console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof 'Jonas'); //string

//when first time declare a variable need to use let
//if you want to change the variable 2nd time don't nee to use let

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun); //string

//undefined is both the value and the type of value
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);//output object, but it's wrong. it should return null.

//12. declare variable: let,const,vars
// let- use let keyword when variables may change later
// const- use const when you are sure variables never changes
// var- this keyword should be completely avoid, but you should know it for old coding

//for good coding practice
//by default: use const and let

let age = 30;
age = 31;
console.log(age); //reassign variable

const birthYear = 1991;
birthYear = 1990; //output error

var job = 'programmer'; // error missing initializer
job = 'teacher';

13.Basic Operator

//Math operators
const now = 2037;
const ageTina = now - 1996;
const ageSarah = now - 2018;
console.log(ageTina, ageSarah);

console.log(ageTina * 2, ageTina / 10, 2 ** 3)
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;//15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++ //x = x + 1
x-- // x = x - 1
console.log(x);

//Comparison operators
console.log(ageTina > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

14. Operator Precedance

const now = 2037;
const ageTina = now - 1996;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, y = 10
console.loh(x, y);
//google mdn operator precedence

const averageAge = (ageTina + ageSarah) / 2
console.log(ageTina, ageSarah, averageAge);


//Challenge#1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//用const 而非let
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn ** 2);

console.log("Mark's BMI is: " + BMIMark + " kg/m2");
console.log("John's BMI is: " + BMIJohn + " kg/m2");

console.log(`Mark 的 BMI: ${BMIMark.toFixed(2)}`); //單引號 ' ' 不支援 ${} 插值（只能用在 反引號 的模板字串中）。
console.log('John 的 BMI: ' + BMIJohn.toFixed(2));

const markHigherBMI = BMIMark >= BMIJohn;
console.log("Mark 的 BMI 是否高於 John？", markHigherBMI);

//17.Strings and Template Literals
// use backTicks `

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

//use backTicks for all strings
console.log(`Just a regular string...for all strings`);

console.log('String with \n\
    multiple \n\
    lines');

console.log(`String
    multiple
    lines using backTicks`);

//18.Taking Descisions

const age = 16;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Challenge#2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//用const 而非let
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn ** 2);

console.log("Mark's BMI is: " + BMIMark + " kg/m2");
console.log("John's BMI is: " + BMIJohn + " kg/m2");

console.log(`Mark 的 BMI: ${BMIMark.toFixed(2)}`); //單引號 ' ' 不支援 ${} 插值（只能用在 反引號 的模板字串中）。
console.log('John 的 BMI: ' + BMIJohn.toFixed(2));

const markHigherBMI = BMIMark >= BMIJohn;
console.log("Mark 的 BMI 是否高於 John？", markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's");
    console.log(`Marks's BMI is ${BMIMark.toFixed(2)} higher than John's ${BMIJohn.toFixed(2)}`);
} else {
    console.log("John's BMI is higher than Mark's");
    console.log(`John's BMI is ${BMIJohn.toFixed(2)} higher than Mark's ${BMIMark.toFixed(2)}`);
}

20.Type conversion/顯式轉換 and coercion/隱式轉換
// convert data type from one to another

//type conversion. ex: from string to number
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); //原199118

console.log(Number('Jonas')); //NaN means invalid number
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion- when an operator is dealing with two values that have two different type
console.log('i am' + 23 + 'years old');
console.log('23' - '10' - 3); //output 10 他自動convert '23' string to number
console.log('23' / '2');//convert string to number output 11.5

let n = '1' + 1; //11
n = n - 1; //10
console.log(n);

21.Truthy and Falsy value
//These 5 values will be converted to false when we attempt to convert them to boolean.
//Everthing else are so-called truthy values
// 5: falsy value: 0, '',undefined, null, NaN
//

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 100;
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job!');
}

//22. Equality Operators: == vs ===

const age = 18;
if (age === 18) console.log('You just became an adult :D (strict equality operator)'); //不會轉換值（先用這）
if (age == 18) console.log('You just became an adult :D (loose equality operator)'); //會自己轉換值

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // use == '23' 為string 改 ＝＝＝用 Number() converter
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23 ?');

//23.Boolean logic: AND, OR & NOT operator
//24.Logical operator:

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

//Challenge#3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }

//BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins');
}

//26. The Switch Statement

const day = 'monday';

switch (day) {
    case 'monday': //day === 'monday' and the following will be execute
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write Code examples');
    case 'friday':
        console.log('create videos');
        break;
    case 'Saturday':
        console.log('Enjoy the weekend');
        break;
    case 'Sunday':
        console.log('Enjoy the weekend!!');
    default:
        console.log('Not a valid day');

}


//use above switch statement and write in if else statement

const day = 'friday';

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}

//27. statement and expression
// Everything ends with a semi-colon is a statement, and does not produce value on itself. It's like a complete sentence.
// An expression is a piece of code that produce a value. ex. 3+4

//28. Ternary conditional operator

const age = 18;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);

//Challenge #4


//const bill = 310;
//const tip = bill * 0.2;
//const tip2 = bill * 0.15;
//const finalValue = (bill + tip);
//const finalValue2 = (bill + tip2);

// if (bill >= 15 && bill <= 300) {
//     console.log(`This bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);
// } else {
//     console.log(`This bill was ${bill}, the tip was ${tip2}, and the total value ${finalValue2}`);
// };

// switch (true) { // 讓 switch 判斷條件
//     case (bill >= 15 && bill <= 300):
//         console.log(`This bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);
//         break;
//     default:
//         console.log(`This bill was ${bill}, the tip was ${tip2}, and the total value ${finalValue2}`);
//         break;
// }

const bill = 275;
const tip = (bill >= 15 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const finalValue = bill + tip;

console.log(`This bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);

*/

