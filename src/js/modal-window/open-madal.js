import { refs } from '../refs/refs';

refs.cardSetEl.addEventListener('click', selectedObject);
export function selectedObject(evt) {
  evt.preventDefault();
  // ЗМІНИТИ НА А
  const correctlyEl = evt.target.nodeName === 'IMG';
  if (!correctlyEl) {
    return;
  }
  const filmdId = evt.target.dataset.id;
  console.log(filmdId);
  try {
    const allFilmsObj = JSON.parse(localStorage.getItem('CURRENT_ITEMS'));
    const currentFilmObj = allFilmsObj.results.find(card => card.id == filmdId);
    // ОБЄКТ З ЯКОГО МАЛЮЄМО
    console.log(currentFilmObj);
  } catch (err) {
    console.error;
  }
}
