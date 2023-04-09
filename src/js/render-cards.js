import FilmRestAPI from './restAPI/restAPI';
const cardSetEl = document.querySelector('.card-set');

const getMovies = new FilmRestAPI().fetchMovies();
getMovies.then(renderMovies).catch(err => console.log('Error: ', err));

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
      return `<li class="card-set__item movie-card"><a href="" class="movie-card__link"><div class="movie-card__holder"><img src=${
        IMG_BASE + posterPath
      } alt="${title} poster" class="movie-card__img" width="100%"></div><p class="movie-card__title">${title}            
            </p><p class="movie-card__genre">${
              genreIds.length < 3 ? genreIds : genreIds.slice(0, 2) + ', Other'
            } | 
                <span class="movie-card__date">${releseDate.slice(0, 4)}</span>
            </p></a></li>`;
    })
    .join('');

  cardSetEl.insertAdjacentHTML('beforeend', markup);
  
}


