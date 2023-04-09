import FilmRestAPI from './restAPI/restAPI';
import defaultPoster from '../images/default-poster.jpg';
const cardSetEl = document.querySelector('.card-set');

new FilmRestAPI()
  .fetchMovies()
  .then(renderMovies)
  .catch(err => console.log('Error: ', err));

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
                movieGenres.length < 3 ? movieGenres.join(', ') : movieGenres.slice(0, 2).join(', ') + ', Other'
            } | 
                <span class="movie-card__date">${releseDate.slice(0, 4)}</span>
            </p></a></li>`;
    })
    .join('');

  cardSetEl.insertAdjacentHTML('beforeend', markup);

  //   const links = cardSetEl.querySelectorAll('.movie-card__link');
  cardSetEl
    .querySelectorAll('.movie-card__link')
    .forEach(element => element.addEventListener('click', onClick));
}

function onClick(evt) {
  evt.preventDefault();
  console.log(evt);
}