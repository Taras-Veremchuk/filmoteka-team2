import { refs } from '../refs/refs';

refs.cardSetEl.addEventListener('click', findFilm);
export function findFilm(evt) {
  evt.preventDefault(); 
  if (evt.target.nodeName !== 'A') {
    return;
  }
  console.dir(evt.target); 
    const allFilmsObj = JSON.parse(localStorage.getItem('CURRENT_ITEMS'));
    const selectedFilm = allFilmsObj?.results.find(movie => movie.id == evt.target.dataset.id);
    // ОБЄКТ З ЯКОГО МАЛЮЄМО
    console.log(selectedFilm);
  
}

function renderModal(film) {
  
};
