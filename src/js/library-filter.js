import refreshLibrary from './refresh-library';
// const watchedBtn = document.querySelector('.btn-top-watched');
// const queueBtn = document.querySelector('.btn-top-queue');
const libraryBtns = document.querySelector('.tab__desk-btn');
libraryBtns.addEventListener('click', filterGallery);

function filterGallery(evt) {
    const currentActiveBtn = evt.currentTarget.querySelector('.btn-top--active');

    if(evt.target.classList.contains('btn-top-queue')) {
        refreshLibrary.showQueue();
        currentActiveBtn?.classList.remove('btn-top--active');
        evt.target.classList.add('btn-top--active');
        return;
    }

    if(evt.target.classList.contains('btn-top-watched')) {
        refreshLibrary.showWatched();
        currentActiveBtn?.classList.remove('btn-top--active');
        evt.target.classList.add('btn-top--active');
    }
};