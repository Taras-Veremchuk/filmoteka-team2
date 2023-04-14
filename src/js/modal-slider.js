import { openModal } from './open-modal';

export function openModalSlider(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const allFilmsObj = JSON.parse(localStorage.getItem('WEEK_POPULAR'));
  openModal(allFilmsObj, evt.target.dataset.id);
}
