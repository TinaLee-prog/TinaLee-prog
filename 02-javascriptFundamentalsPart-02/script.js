'use strict';
//31. Javascript Fundamentals Part 2

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const if = 123;
// const private = 534;


//33. Functions
//Function Declaration
//沒有參數
function logger() {
    console.log('My name is Tina');
}
logger(); //calling /running / invoking function

//有參數
function logger2(name) {
    console.log('My name is ' + name);
}
logger2('Tinz');

//有return & 先定義再呼叫
function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const result = fruitProcessor(3, 6);
console.log(result);

//簡單呼叫
const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);
console.log(fruitProcessor(5, 1));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//
function B(cat, dog) {
    const sentence = `i have ${cat} cats and ${dog} dogs.`;
    return sentence; // 回傳組合好的句子
}
const result2 = B(3, 3); // 呼叫函式 B，傳入參數 3 和 3，並把結果存到 result2
console.log(result2); // 印出 result2 的內容，也就是回傳的句子

//Function expression
const greet = function () {
    console.log('Hi');
}
greet();

//Arrow function
const igreet = iname => 'Hola ' + iname;
console.log(igreet('Lizeth'));
//1.
const add = (a, b) => a + b; // 定義 add 函式
const tryOne = tOne => add(3, 5); // 寫 tryOne，呼叫 add 函式
console.log(tryOne()); // 正確地呼叫 tryOn
//2.

//34.Function declaration vs Expressions
function calAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calAge1(1996);
console.log(age1);

//Function expression
const calAge2 = function (birthYear) {
    return 2035 - birthYear;
}
const age2 = calAge2(1996);
console.log(age2);

const iCat = function (cat, age3) {
    return `I have a cat name ${cat}. It is ${age3} years old.`;
}
const nName = iCat("Yoyo", 3);
console.log(nName);


//35. Arrow function
const calcAge3 = birthYear => 2035 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2035 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));

const yearsTillRetire = birthYeah => {
    const ageTwo = 2040 - birthYeah;
    const retire = 80 - ageTwo;
    return retire;
}
const birthYeah = 1990;
//console.log(retire);
console.log(yearsTillRetire(birthYeah));
//1.AgeCalculator
const calculateAge = bYear => {
    const aage = 2025 - bYear;
    return aage;
}
console.log(calculateAge(2000));
//2.Salary after Tax
const salaryAfterTax = (salary, tax) => {
    const afterTax = salary - (salary * (tax / 100));
    return afterTax;
}
console.log(salaryAfterTax(5000, 20));// Output: 4000
//3.Minutes to Hours
const convertMinutes = min => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours} hours and ${minutes} minutes`;
}
console.log(convertMinutes(160));

//36.Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

//37.Review Function
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.😄`;
    }
}
console.log(yearsUntilRetirement(1996, 'Tina'));
console.log(yearsUntilRetirement(1970, 'Mike'));

//practice#2
const isEligibleToVote = function (bYear, fName) {
    const calcAge = 2037 - bYear;

    if (calcAge >= 18) {
        return `${fName} is eligible to vote.`;
    } else {
        return `${fName} is not eligible to vote.`;
    }
}
console.log(isEligibleToVote(2000, 'Sarah'));
// "Sarah is eligible to vote 🗳️."

console.log(isEligibleToVote(2022, 'Leo'));
// "Leo is not eligible to vote yet. 🙅‍♂️"


//Challenge#5
//const 函式名稱 = (參數) => 表達式;
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
};

checkWinner(scoreDolphins, scoreKoalas);
//test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas);


//39.Introduction to Array

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]); // array are zero base equal to Michael

console.log(friends.length); //property number of element in array equal to three
console.log(friends[friends.length - 1]); //friends at position two

friends[2] = 'Joy';
console.log(friends); //replace Peter with Joy
// even though with const we can mutate the value as array is not primative
// but we cannot replace the entire array such as
//friends = ['Bob','Alice'];

//we can store different value
const firstName = 'Tinz';
const tinz = [firstName, 'Lee', 2037 - 2000, 'teacher', friends];
console.log(tinz);
console.log(tinz.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1992, 1993, 1994, 1995];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//40. Basic array 陣列 operations methods
//push-add element
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);

const friend = ['Michael', 'Steven', 'Peter'];
const newLength = friend.push('Jay');
console.log(friend);
console.log(newLength);

friend.unshift('John'); //add first word to array
console.log(friend);

//pop-remove element
friend.pop(); //remove Last element 'Jay'
//console.log(friends);
const popped = friend.pop();
console.log(popped);
console.log(friend); //remove Peter

friend.shift(); //return the element that was removed
console.log(friend);

console.log(friend.indexOf('Steven'));
console.log(friend.indexOf('Bob'));

console.log(friend.includes('Steven'));
console.log(friend.includes('Bob'));

friend.push(23); //false does not do type coersion
console.log(friend.includes('Steven')); //true
console.log(friend.includes('Bob')); //false
console.log(friend.includes(23)); //true

if (friend.includes('Steven')) {
    console.log('You have a friend named Peter');
}


//41.CodingExercise6:Challenge#2.
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

//41.2
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(bills); //125, 555, 44
console.log(tips); //18.75, 111, 8.8
console.log(totals); //143.75, 666, 52.8


//42.Introduction to objects 物件 //43.Dot/bracket and object Notation
const tinz = {
    firstName: 'tinz',
    lastName: 'lee',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(tinz);

console.log(tinz.lastName); //dot notation, realObject Name
console.log(tinz['lastName']); //bracket notation

const nameKey = 'Name';
console.log(tinz['first' + nameKey]); //動態組出 key 名稱 'firstName'，這在 dot notation 裡是不可能做到的
console.log(tinz['last' + nameKey]);

// 錯誤寫法console.log(tinz.'last' + nameKey)
// 這會造成語法錯誤，因為點記法不能接受字串運算

const interestedIn = prompt('What do you want to know about Tinz? Choos betwen firstName, lastName, age, job, and friends');

if (tinz[interestedIn]) {
    console.log(tinz[interestedIn]);
} else {
    console.log('Wrong request!');
}

//insert more object
tinz.location = 'Taiwan';
tinz['twitter'] = '@tinzLee';
console.log(tinz);

//Challenge
//"Tinz has 3 friends, and his best friend is called Michael"
console.log(`${tinz.firstName} has ${tinz.friends.length}friends, and his best friend is called ${tinz.friends[0]}`);
//Object Precedence（物件優先順序）講「precedence」，可以理解成「點記法 . 的執行順序」是從左往右例如 tinz.friends.length


//45.Object Methods 物件方法
//special variable 'this' method
//don't repeat yourself principle

const tinz = {
    firstName: 'tinz',
    lastName: 'lee',
    birthyear: 1996,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge: function () {
        console.log(this);
        return 2037 - this.birthyear;
    }
};

console.log(tinz.calcAge());
//原本寫法
//tinz.calcAge(1996);
//console.log(tinz['calcAge'](1996));


//practice#1.
const student = {
    firstName: 'Lisa',
    birthYear: 1995,
    major: 'English Literature',
    hasGraduated: true,

    calcAge: function () {
        return 2037 - this.birthYear;
    },

    getSummary: function () {
        return ` ${this.firstName} is ${this.calcAge()} years old, studies ${this.major}, and has ${this.hasGraduated ? 'Graduated!' : 'Not Graduated'} `;
    }

};
console.log(student.calcAge());
console.log(student.getSummary());

//pratice#2.
const tinz = {
    firstName: 'tinz',
    lastName: 'lee',
    birthyear: 1996,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        return 2037 - this.birthyear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and she has a ${this.hasDriversLicense ? 'drivers license' : 'does not have a drivers license'}`;
    }
};

console.log(tinz.calcAge());
console.log(tinz.getSummary());


//Coding Exercise 7: Challenge#3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 72,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();  // 先計算 BMI 並儲存
john.calcBMI();

const comparison = function () {
    if (mark.bmi > john.bmi) {
        return `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})`;
    } else {
        return `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})`;
    }
};

console.log(comparison());


//47. Iteration: the FOR Loop 迴圈
//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


//48. Looping array, Breaking and Continuing
const tina = [
    'tina',
    'lee',
    2030 - 2000,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];//宣告一個名為 types 的常數變數，它是一個空的陣列 可以加東西不能重新賦予。types 現在是空的。
//const types = []; 的用意是建立一個空陣列，用來儲存 tina 裡每個元素的資料型別。並不是「加到 tina 裡」，而是「根據 tina 的資料，去產生 types 陣列」

//console.log(tina[0])
//console.log(tina[1])

for (let i = 0; i < tina.length; i++) {
    console.log(tina[i], typeof tina[i]);

    //Filling types array
    types.push(typeof tina[i]);
}
console.log(tina);
console.log(types);

console.log('--- ---')
const years = [1996, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

//continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < tina.length; i++) {
    if (typeof tina[i] !== 'string') continue; //continue 的作用就是「跳過這次，繼續下一次」，而不是結束整個迴圈

    console.log(tina[i], typeof tina[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < tina.length; i++) {
    if (typeof tina[i] === 'number') break; //terminate completely

    console.log(tina[i], typeof tina[i]);
}

//49.Looping Backwards and Loops in Loops

const tina = [
    'tina',
    'lee',
    2030 - 2000,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = tina.length - 1; i >= 0; i--) {
    console.log(i, tina[i]);
}

//-----Loops in Loops 巢狀迴圈（nested loop）
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
    }
}


//50.While loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
    //console.log(`While: Lifting weights repetition ${rep}🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/

//Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Loop through the bills and calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log("Bills: ", bills);
console.log("Tip: ", tips);
console.log("Totals: ", totals);
//Fixes and explanations:
//The function calcTip should not include the loop or total calculation logic inside it
//You accidentally tried to declare totals again inside the function (which is already declared).
//bills() is incorrect — bills is an array, not a function.
//The loop must be outside the function to go through each bill and use calcTip.

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));