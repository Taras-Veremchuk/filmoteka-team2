import defaultPoster from '../images/default-poster.jpg';
import { refs } from './refs/refs';

export function renderMovies(movies) {
  const IMG_BASE = 'https://image.tmdb.org/t/p/w400';
  const genresList = JSON.parse(localStorage.getItem('MOVIE_GENRES'));
  const markup = movies.results
    .map(movie => {
      const {
        poster_path: posterPath,
        title,
        id,
        genre_ids: genreIds = [],
        release_date: releseDate = '',
      } = movie;
      const movieGenres = genreIds.map(genre => genresList[genre]);
      return `<li class="card-set__item movie-card" data-id=${id}><a href=""  class="movie-card__link"><div class="movie-card__holder"><img src=${
        posterPath ? IMG_BASE + posterPath : defaultPoster
        // ДОДАВ ДВІ ТИМЧАСОВІ КНОПКИ
      } alt="${title} poster" class="movie-card__img" data-id=${id} width="100%"></div>
      <button type="submit" class="add-watch">Add to watched</button><button type="submit" class="add-que">Add to queue</button>
        <p class="movie-card__title">${title}
            </p><p class="movie-card__genre">${
              movieGenres.length < 3
                ? movieGenres.join(', ')
                : movieGenres.slice(0, 2).join(', ') + ', Other'
            } ${movieGenres.length && releseDate ? '|' : ''}
                <span class="movie-card__date">${releseDate.slice(0, 4)}</span>
            </p></a></li>`;
    })
    .join('');

  return markup;
  // ЗМІНИВ ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ

  // refs.cardSetEl.innerHTML = markup;

  //   const links = cardSetEl.querySelectorAll('.movie-card__link');
}
// =========================================================================================
refs.cardSetEl.addEventListener('click', onClick);
const libraryWatchedList = document.querySelector('.card-watched-library');
const libraryQueList = document.querySelector('.card-que-library');

function onClick(evt) {
  evt.preventDefault();
  // ПЕРЕВІРКА НА ІМГ АЛЕ ХОТІЛОСЯ Б НА ЛІШЦІ
  const isCorrectClick = evt.target.nodeName === 'IMG';
  if (!isCorrectClick) {
    return;
  }

  const filmdId = evt.target.dataset.id;
  console.log(filmdId);
  try {
    const allFilmsObj = JSON.parse(localStorage.getItem('CURRENT_ITEMS'));
    const currentFilmObj = allFilmsObj.results.find(card => card.id == filmdId);
    console.log(currentFilmObj);
    // tryThis(currentFilmObj);
    const btnWatchAdd = document.querySelector('.add-watch');
    const btnQuechAdd = document.querySelector('.add-que');

    btnWatchAdd.addEventListener(
      'click',
      onAddToWatchClick(currentFilmObj, libraryWatchedList)
    );
    btnQuechAdd.addEventListener(
      'click',
      onAddToWatchClick(currentFilmObj, libraryQueList)
    );
  } catch (err) {
    console.error;
  }
}

// function tryThis(allFilmsObj) {
// const libraryWatchedList = document.querySelector('.card-watched-library');
// const libraryQueList = document.querySelector('.card-que-library');
// const btnWatchAdd = document.querySelector('.add-watch');
// const btnQuechAdd = document.querySelector('.add-que');

// btnWatchAdd.addEventListener('click', onAddToWatchClick);
// btnQuechAdd.addEventListener('click', onAddToQueuClick);

function onAddToWatchClick(allFilmsObj, place) {
  const markupsFilms = renderMovies(allFilmsObj);
  place.innerHTML = markupsFilms;
}

// }
