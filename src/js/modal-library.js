import { refs } from './refs';
import { openModal } from './open-modal';
import refreshLibrary from './refresh-library'

refreshLibrary.showQueue();
refs.cardSetEl.addEventListener('click', openModalLibrary);
function openModalLibrary(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'A') {
    return;
  }
  const allFilmsObj = [...JSON.parse(localStorage.getItem('WATCHED_MOVIES')), ...JSON.parse(localStorage.getItem('QUEUE_MOVIES'))];  
  openModal(allFilmsObj, evt.target.dataset.id);
}
