import FilmRestAPI from '../restAPI/restAPI';
import Notiflix from 'notiflix';

const exemplarFilms = new FilmRestAPI();

const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadeMoreBtn: document.querySelector('button[type="submit"]'),
  cardSetEl: document.querySelector('.card-set'),
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(e) {
  e.preventDefault();

  exemplarFilms.searchQuery = e.currentTarget.elements.name.value.trim();

  if (!exemplarFilms.searchQuery) {
    Notiflix.Notify.info('Please write something');
    return;
  }
  exemplarFilms.resetPage();
  try {
    const data = await exemplarFilms.searchMovies();
    if (data.results.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no films watching your search query. Please try again.'
      );
      return;
    }
    refs.cardSetEl.innerHTML = '';
    console.log(data);
    Notiflix.Notify.success(`Hooray! We found ${data.total_results} films.`);
    renderMovies(data);
  } catch (err) {
    console.log;
  }
}
function renderMovies(movies) {
  //   console.log(movies.results);
  const IMG_BASE = 'https://image.tmdb.org/t/p/w400';
  const markup = movies.results
    .map(movie => {
      const {
        poster_path: posterPath,
        title,
        genre_ids: genreIds,
        release_date: releseDate,
      } = movie;
      return `<li class="card-set__item movie-card"><a href="#!" class="movie-card__link"><div class="movie-card__holder"><img src=${
        IMG_BASE + posterPath
      } alt="${title} poster" class="movie-card__img" width="100%"></div><p class="movie-card__title">${title}
            </p><p class="movie-card__genre">${
              genreIds.length < 3 ? genreIds : genreIds.slice(0, 2) + ', Other'
            } |
                <span class="movie-card__date">${releseDate.slice(0, 4)}</span>
            </p></a></li>`;
    })
    .join('');

  refs.cardSetEl.insertAdjacentHTML('beforeend', markup);
}
