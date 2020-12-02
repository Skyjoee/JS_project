const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genrest: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
    b = prompt('На с колько оцените его?', ''),
    c = prompt('Один из просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


if (4 == 4) {
    console.log('true');
} else {
    console.log('false');
}




// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

const num = 50;
switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 50:
        console.log(' It`s True!');
        break;
    default:
        console.log('Not today!');
        break;
}