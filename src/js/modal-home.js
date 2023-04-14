import { refs } from './refs';
import { openModal } from './open-modal';

refs.cardSetEl.addEventListener('click', openModalHome);

function openModalHome(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'A') {
    return;
  }
  const allFilmsObj = JSON.parse(localStorage.getItem('CURRENT_ITEMS'));
  openModal(allFilmsObj.results, evt.target.dataset.id);
}
