import FilmRestAPI from './restAPI/restAPI';
import defaultPoster from '../images/default-poster.jpg';
import { pagination } from './pagination-home/pagination-home';
const cardSetEl = document.querySelector('.card-set');

new FilmRestAPI()
  .fetchMovies()
  .then(foo)
  .catch(err => console.log('Error: ', err));

function foo(data) {
  renderMovies(data);
  // pagination.setTotalItems(Math.ceil(data.total_results / 20));
  // pagination.movePageTo(1);
}

export function renderMovies(movies) {
  //   console.log(movies.results);
  const IMG_BASE = 'https://image.tmdb.org/t/p/w400';
  const genresList = JSON.parse(localStorage.getItem('MOVIE_GENRES'));
  const markup = movies.results
    .map(movie => {
      const {
        poster_path: posterPath,
        title,
        genre_ids: genreIds,
        release_date: releseDate,
      } = movie;
      const movieGenres = genreIds.map(genre => genresList[genre]);
      return `<li class="card-set__item movie-card"><a href="" class="movie-card__link"><div class="movie-card__holder"><img src=${
        posterPath ? IMG_BASE + posterPath : defaultPoster
      } alt="${title} poster" class="movie-card__img" width="100%"></div><p class="movie-card__title">${title}
            </p><p class="movie-card__genre">${
              movieGenres.length < 3
                ? movieGenres.join(', ')
                : movieGenres.slice(0, 2).join(', ') + ', Other'
            } |
                <span class="movie-card__date">${releseDate.slice(0, 4)}</span>
            </p></a></li>`;
    })
    .join('');

  cardSetEl.innerHTML = markup;

  //   const links = cardSetEl.querySelectorAll('.movie-card__link');
  cardSetEl
    .querySelectorAll('.movie-card__link')
    .forEach(element => element.addEventListener('click', onClick));
}

// PAGINATION
// pagination.on('beforeMove', async ({ page }) => {
//   console.log(page);
//   try {
//     exemplarFilms.page = page;
//     // console.log(exemplarFilms.searchQuery);
//     const data = await exemplarFilms.foo();
//     // console.log(data);
//     renderMovies(data);
//   } catch (err) {
//     console.log;
//   }
// });
// PAGINATION

function onClick(evt) {
  evt.preventDefault();
  console.log(evt);
}
