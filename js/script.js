'use strict';
// let numberOfFilms = +prompt('How many films did you whatch?', ''); 

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('One of the last film that did you whatch', ''),
//     b = prompt('Please give your mark', ''),
//     c = prompt('One of the last film that did you whatch', ''),
//     d = prompt('Please give your mark', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB.movies);

// // 2.

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('A lot');
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error!'); //Тернарный оператор


// let number = 12;

// switch (number){
//     case 14:
//         console.log('No');
//         break;
//     case 13:
//         console.log('No');
//         break;
//     case 12:
//         console.log('Yes!');
//         break;
// }

// // 3.

// first: for (let i = 0; i < 3; i++) {
//     console.log(`Second level ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Second level ${j}`);
//         for (let k = 0; k < 7; k++) {
//             if (k === 2) {
//                 continue first;
//             }
//             console.log(`Third level ${k}`);
//         }
//     }
// }

// let result = '';
// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n'; 
// }

// console.log(`${result}`);

// 18 lesson

// const movieDB = {
//     movies: {}
// };

// for (let i = 0; i < 2; i++) {
//     let a = prompt('One of the last film that did you whatch', ''),
//         b = prompt('Please give your mark', '');
//     if (a != null && b != null && a.length < 50 && a != '' && b != ''){
//         movieDB.movies[a] = b;
//         console.log(`done ${i+1} times`);
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// console.log(movieDB.movies);

//19 lesson

// let a = 10;

// function showFirstMessage (text) {
//     console.log(text);
//     let num = 20; 
// }
// showFirstMessage(a);


// function calc(a, b){
//     return (a + b);
// }
// console.log(calc(4, 6));

// function ret() {  //Можно вызвать до создания/написания функции
//     let num = 50;
//     return num;
// }
// console.log(ret);

// let foo = function() { //Можно вызвать только после объявления
//     console.log('hello');
// };

// foo();


// const calculator = (a, b) => {
//     return a + b;
// };

// calculator();

//20 lesson
// const usdCurr = 30;
// const eurCurr = 34;

// function convert(curr, amound) {
//     console.log(curr * amound);
// }

// convert(usdCurr, 500);
// convert(eurCurr, 500);


//21 lesson
// const usdCurr = 30,
//       discount = 0.9;

// function convert(curr, amound) {
//     return curr * amound;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(usdCurr, 500));

// function test () {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if ( i ==3 ) {
//             return;
//         }
//     }
//     console.log('Done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);


//22 lesson
// const str = 'test';
// const arr = [1,'43232',4];

// console.log(arr[1].length);

// console.log(str.toUpperCase());
// const fruit = 'Some fruit';
// console.log(fruit.indexOf("q"));

// const logg = 'Hello World!';
// console.log(logg.slice(0, 5));
// console.log(logg.substring(0, 5));

// const a = 13.5;
// console.log(Math.round(a));

// const text = '13.5px';
// console.log(parseInt(text));
// console.log(parseFloat(text));


//23 lesson
// let numberOfFilm;

// function start() {
//     numberOfFilm = +prompt('How many films did you watch?', '');
//     while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)){
//         numberOfFilm = +prompt('How many films did you watch?', '');
//     }
// }
// start();

// const personalfilmDB = {
//     count: numberOfFilm,
//     movie: {},
//     genres: [],
//     privat: false
// };

// function showMyDB(isItPrivate){
//     if (!isItPrivate) {
//         console.log(personalfilmDB);
//     } else {
//         console.log('This DB is private');
//     }
// }
// showMyDB(personalfilmDB.privat);


// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalfilmDB.genres[i] = prompt(`Your favourite janr on number ${i+1}`, '');
//     }
// }
// writeYourGenres();


// 24 lesson
// let a = ("    Hello    ").trim(); // Убирает все пробелы
// console.log(a);


// 25 lesson
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 10);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     setTimeout(function() {
//         console.log(`Я учу: ${lang}`);
//     }, 500);
//     callback();
// }
// function done() {
//     console.log('Я прошёл этот урок!');
// }

// learnJS('JS', done);

// 26 lesson

// const options = {
//     name: 'test',
//     width: '1024',
//     height: '1024',
//     colors: {
//         border: 'black',
//         backgroung: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     } //Создание своего метода
// };

// options.makeTest();
// console.log(Object.keys(options).length);

// const {border, bg} = options.colors;
// console.log(border);

// let counter = 0;
// for (let key in options) {
//     counter++;
//     if (typeof(options[key]) === 'object'){
//         for (let jkey in options[key]){
//             console.log(`Svoistvo ${jkey} imeet znachenie ${options[key][jkey]}`);
//         }
//     } else {
//         console.log(`Svoistvo ${key} imeet znachenie ${options[key]}`);
//     }
// }

// console.log(counter); //Количество свойст в объекте


// 27 lesson
const arr = [1, 40, 67, 28, 49, 10, 13, 26, 2];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

arr.shift();
arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i of arr) {
    console.log(i);
}

const str = 'Bom, Am, Shock';
const products = str.split(", ");
products.sort();
console.log(products.join('; '));


