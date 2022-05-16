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

// 18 leson

const movieDB = {
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let a = prompt('One of the last film that did you whatch', ''),
        b = prompt('Please give your mark', '');
    if (a != null && b != null && a.length < 50 && a != '' && b != ''){
        movieDB.movies[a] = b;
        console.log(`done ${i+1} times`);
    } else {
        console.log('error');
        i--;
    }
}

console.log(movieDB.movies);