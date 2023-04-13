import refreshLibrary from './refresh-library';
// const watchedBtn = document.querySelector('.btn-top-watched');
// const queueBtn = document.querySelector('.btn-top-queue');
const libraryBtns = document.querySelector('.tab__desk-btn');
const mobileLibraryBtns = document.querySelector('.btn-library');
libraryBtns.addEventListener('click', filterGallery);
mobileLibraryBtns.addEventListener('click', filterGallery);

function filterGallery(evt) {
    const currentActiveBtn = evt.currentTarget.querySelector('.btn-top--active');
const classList = evt.target.classList;
    if(classList.contains('btn-top-queue') || classList.contains('btn__queue-bot')) {
        refreshLibrary.showQueue();
        currentActiveBtn?.classList.remove('btn-top--active');
        evt.target.classList.add('btn-top--active');
        return;
    }
    if(classList.contains('btn-top-watched') || classList.contains('btn__watched-bot')) {    
        refreshLibrary.showWatched();
        currentActiveBtn?.classList.remove('btn-top--active');
        evt.target.classList.add('btn-top--active');
    }
};