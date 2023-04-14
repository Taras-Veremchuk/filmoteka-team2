import { refs } from './refs';
import defaultPoster from '../images/default-poster.jpg';
import refreshLibrary from './refresh-library'

export function openModal(films, id) {   
  const selectedFilm = films.find(
    movie => movie.id == id
  );

  if(!localStorage.getItem('QUEUE_MOVIES')) {
    localStorage.setItem('QUEUE_MOVIES', JSON.stringify([]));
     };
  if(!localStorage.getItem('WATCHED_MOVIES')) {
      localStorage.setItem('WATCHED_MOVIES', JSON.stringify([]));
       }; 
  renderModal(selectedFilm);
  refs.movieModal.parentElement.classList.toggle('is-hidden');

  document.addEventListener('keydown', closeModal);
  refs.movieModal.parentElement.addEventListener('click', closeModal)
  refs.movieModal.querySelector('.btn-modal__watched').addEventListener('click', addToWatched);
  refs.movieModal.querySelector('.btn-modal__queue').addEventListener('click', addToQueue);
  
  
       
       function addToWatched(evt) {
               const watchedArr = JSON.parse(localStorage.getItem('WATCHED_MOVIES'));
        const filmIdx = watchedArr.findIndex(el => el.id == id);
        if(filmIdx == -1) {
         watchedArr.unshift(selectedFilm);
        } else {watchedArr.splice(filmIdx, 1)};
        localStorage.setItem('WATCHED_MOVIES', JSON.stringify(watchedArr)); 
        evt.target.textContent = evt.target.textContent === 'ADD TO WATCHED' ? 'REMOVE FROM WATCHED' : 'ADD TO WATCHED';
        refreshLibrary.refreshMarkup();
      };
      
      function addToQueue(evt) {
        const queueArr = JSON.parse(localStorage.getItem('QUEUE_MOVIES'));
        const filmIdx = queueArr.findIndex(el => el.id == id);
        if(filmIdx == -1) {
          queueArr.push(selectedFilm);
        } else {queueArr.splice(filmIdx, 1)};
        evt.target.textContent = evt.target.textContent === 'ADD TO QUEUE' ? 'REMOVE FROM QUEUE' : 'ADD TO QUEUE';
        localStorage.setItem('QUEUE_MOVIES', JSON.stringify(queueArr));
        refreshLibrary.refreshMarkup();
      };
}

// function addToWatched(evt) {
//   const filmId = evt.target.dataset.id;
//   const allFilmsObj = JSON.parse(localStorage.getItem('CURRENT_ITEMS'));
//   const selectedFilm = allFilmsObj?.results.find(
//     movie => movie.id == filmId
//   );
//   const watchedArr = JSON.parse(localStorage.getItem('WATCHED_MOVIES'));
//   const filmIdx = watchedArr.findIndex(el => el.id == filmId);
//   if(filmIdx == -1) {
//     watchedArr.push(selectedFilm);
//   } else {watchedArr.splice(filmIdx, 1)};
//   localStorage.setItem('WATCHED_MOVIES', JSON.stringify(watchedArr));  
// evt.target.textContent = evt.target.textContent === 'ADD TO WATCHED' ? 'REMOVE FROM WATCHED' : 'ADD TO WATCHED';
// };

// function addToQueue(evt) {
//   const filmId = evt.target.dataset.id;
//   const allFilmsObj = JSON.parse(localStorage.getItem('CURRENT_ITEMS'));
//   const selectedFilm = allFilmsObj?.results.find(
//     movie => movie.id == filmId
//   );
//   const queueArr = JSON.parse(localStorage.getItem('QUEUE_MOVIES'));
//   const filmIdx = queueArr.findIndex(el => el.id == filmId);
//   if(filmIdx == -1) {
//     queueArr.push(selectedFilm);
//   } else {queueArr.splice(filmIdx, 1)};
//   localStorage.setItem('QUEUE_MOVIES', JSON.stringify(queueArr));
// evt.target.textContent = evt.target.textContent === 'ADD TO QUEUE' ? 'REMOVE FROM QUEUE' : 'ADD TO QUEUE';
     // };


function renderModal({
  poster_path: posterPath,
  title,
  id,
  genre_ids: genreIds = [],
  release_date: releseDate = '',
  overview,
  vote_average: voteAverage,
  vote_count: voteCount,
  popularity,
  original_title: originalTitle,
}) {
  const IMG_BASE = 'https://image.tmdb.org/t/p/w400';
  const genresList = JSON.parse(localStorage.getItem('MOVIE_GENRES'));
  const movieGenres = genreIds.map(genre => genresList[genre]);
  // console.log(allFilmsObj?.results[0]);

  refs.movieModal.innerHTML = `<button class="btn-modal-close" type="button"></button>
  <div class="modal-movie"> <img src=${
    posterPath ? IMG_BASE + posterPath : defaultPoster
  } alt="${title} poster" class="modal-movie__img"></div>
     <div class="modal__content">
      <h2 class='modal__title'>${title}</h2>
    <table class='modal-info'>
      <tr>
        <td class='modal-info__title'>Vote / Votes</td>
        <td class='modal-info__value'>
          <span class='modal-info__rate'>${voteAverage ?voteAverage?.toFixed(1):'?'}</span>
          /
          <span class='modal-info__rate'>${voteCount}</span>
        </td>
      </tr>
      <tr>
        <td class='modal-info__title'>Popularity</td>
        <td class='modal-info__value'>${popularity?.toFixed(1)}</td>
      </tr>
      <tr>
        <td class='modal-info__title'>Original Title</td>
        <td class='modal-info__value'>${originalTitle}</td>
      </tr>
      <tr>
        <td class='modal-info__title'>Genre</td>
        <td class='modal-movie-info__value'>${movieGenres.join(', ')}</td>
      </tr>
    </table>
    <div class='modal-about'>
      <h3 class='modal-about__title'>About</h3>
      <p class='modal-about__desc'>${overview}</p>
    </div>
    <div class="modal__text"></div>
    <div class="modal-movie-btn">
      <button type="button" class="btn-modal btn-modal__watched" data-id=${id}>${localStorage.getItem('WATCHED_MOVIES')?.includes(id) ?'REMOVE FROM WATCHED' : 'ADD TO WATCHED'}</button>
      <button type="button" class="btn-modal btn-modal__queue" data-id=${id}>${localStorage.getItem('QUEUE_MOVIES')?.includes(id) ?'REMOVE FROM QUEUE':'ADD TO QUEUE'}</button>
    </div>
  </div>`;
}

function closeModal(evt) {
  if(!evt.target.classList.contains('backdrop') && !evt.target.classList.contains('btn-modal-close') && evt.key !== 'Escape') {
    return;
  }
   refs.movieModal.parentElement.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModal);
  evt.currentTarget.removeEventListener('click', closeModal);
}
