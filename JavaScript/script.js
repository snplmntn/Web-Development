'use strict';

/*
let hasDriversLicencse = false;
const passTest = true;

if (passTest === true) {
    hasDriversLicencse = true;
}
if (hasDriversLicencse) console.log('I can drive :D');


// functions!!!!!! allow us use reusable codes
function sean() {
    console.log("My name is Sean");
}
// calling running invoking a function
//can call unlimited times
// call atleast once
sean(); //function declaration
sean();
sean();
// produced undefined

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

//capturing a value
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//not capturing a value
console.log(fruitProcessor(5, 0));

//generic function
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//variable inside a function is PARAMETER
//ARGUMENT the value of parameter
// function declaration
function calcAge1(birthYear) {
    const age = 2022 - birthYear;
    return age;
}

const age1 = calcAge1(2006);
console.log(calcAge1(2006));

//function expression
//function is a value
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2005);
console.log(age1, age2);


// Arrow function
const calcage3 = birthYear => 2022 - birthYear;
// use in 1 liner function

const age3 = calcage3(2006);
console.log(age3);

const yearRetirement = (birthYear, firstname) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstname} retires in ${retirement} years`;

}

console.log(yearRetirement(2006, 'Sean'));
console.log(yearRetirement(2005, 'Adrian'));

// coding challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(avgDolphins, avgKoalas);

/*
const friend1 = 'Sean';
const friend2 = 'Marc';
const friend = 'Adrian';

const friends = ['Sean', 'Marc', 'Afrian'];
console.log(friends);

const y = new Array(1991, 2006, 2022);
console.log(y);

console.log(friends[0], friends[1], friends[2]);
// check array lenght
console.log(friends.length);
// can output the last array
console.log(friends[friends.length - 1]);
// can put expression (produces a value)

friends[2] = 'James';
// replaces a value from the array (mutate)
// replace only an element not whole array because const
console.log(friends);

const firstName = 'Sean';
//can store expression eg. variables
const sean = [firstName, 'Monton', 2022 - 2006, friends];
console.log(sean);

const calcage3 = birthYear => 2022 - birthYear;

const years = [1990, 1997, 2006];
// you can't subsctart whole array

// can use per element
const age1 = calcage3(years[0]);
const age2 = calcage3(years[1]);
const age3 = calcage3(years[2]);

console.log(age1, age2, age3);

const ages = [calcage3(years[0]), calcage3(years[0]), alcage3(years[2]];


//add elements
const friends = ['Sean', 'Marc', 'Afrian'];

//add an element to the end of the array
friends.push('Mark'); //returns the length of the array
console.log(friends);

// add an element to the start of the array
friends.unshift('John');//also returns the length of the array
console.log(friends);

friends[2] = 'James';
// replaces a value from the array (mutate)
// replace only an element not whole array because const
console.log(friends);



// remove elements
friends.pop(); //removes last element
const popped = friends.pop(); //removes last element 2 times
console.log(popped);
// returns the remove elements
console.log(friends);

friends.shift();
// removes first element also return the remove element
console.log(friends);

console.log(friends.indexOf('Sean'));
// shows what the position of the element
// returns the value of the position

console.log(friends.indexOf('Ryan'));
// if tried to put at element not in the array it will return -1

// checks if the element is in the array true, false -
// has strict equality, does not type coersion
friends.push(13);
console.log(friends.includes('Sean'));
//true
console.log(friends.includes('Ryan'));
//false
console.log(friends.includes('13'));
// string so false
console.log(friends.includes(13));
//number so true

// can be used in conditions
if (friends.includes('Sean')) { //true
    console.log('You have a friend named Sean');
}



// const bill = bill >= 50 && <= 300 ? bill * .15 : bill * .2;
// calcTip(bill){
//     bill >= 50 && bill <= 300 ? console.log(`The bill is ${bill}, the tip was ${bill * .15}, and the total value is ${bill + bill * .15}`) : console.log(`The bill is ${bill}, the tip was ${bill * .2}, and the total value is ${bill + bill * .2}`);
// }

// Coding Challenge #2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(`${total[0]}, ${total[1]}, ${total[2]}`)

console.log(bill, tip, total);



const sean = [
    'Sean', //u can declare array element in multiple lnes
    'Monton',
    2022 - 2006,
    'Student',
    ['Marco', 'Matthew', 'Milk']
];


// Object Most Fundamental in JS
const Sean = { //Object literal
    firstName: 'Sean',
    lastName: 'Monton',
    age: 2022 - 2006,
    Occupation: 'Student',
    friends: ['Marco', 'Matthew', 'Milk']
};

console.log(Sean);

// Dot notation
console.log(Sean.lastName);

// Bracket notation for expression
console.log(Sean['lastName']);

const nameKey = 'Name';
console.log(Sean['first' + nameKey])
console.log(Sean['last' + nameKey])

// const interestedIn = prompt('What do you want to know about Sean? Choose between firstName, lastName, age, Occupation, and friends');

// if (Sean[interestedIn]) {
//     console.log(Sean[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, Occupation, and friends');
// }

Sean.location = 'Portugal';
Sean['Insta'] = 'snplmntn';

console.log(Sean);

console.log(`${Sean.firstName} has ${Sean.friends.length} friends, and his best friends is called ${Sean.friends[0]}`)

*/
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [], totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2, 4]));

// "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// const printForecast = function (arr) {
//     console.log(`"... ${arr[0]}ºC in 1
// days ... ${arr[1]}ºC in 2 days ... ${arr[2]}ºC in 3 days ..."`);
// }

// printForecast([17, 21, 23]);

// console.log('nicole ganda and sean');
