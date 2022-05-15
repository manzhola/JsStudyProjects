let numberOfFilms = +prompt('How many films did you whatch?', ''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last film that did you whatch', ''),
      b = prompt('Please give your mark', ''),
      c = prompt('One of the last film that did you whatch', ''),
      d = prompt('Please give your mark', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);