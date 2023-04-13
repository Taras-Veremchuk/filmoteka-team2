import { renderMovies } from './render-cards';
import { refs } from './refs';



class RefreshLibrary {
set currentField(newField) {
    this.field = newField;
};
get  currentField() {
    return this.field;
};

refreshMarkup() {
    if(this.field === 'queue') {        
        this.showQueue();
        return;
    } 

    if(this.field === 'watched') {
        this.showWatched()
    }
}

showQueue() {
    const markupFilms = renderMovies(JSON.parse(localStorage.getItem('QUEUE_MOVIES')));
    refs.cardSetEl.innerHTML = markupFilms;
    this.currentField = 'queue';
    }
    
showWatched() {
    const markupFilms = renderMovies(JSON.parse(localStorage.getItem('WATCHED_MOVIES')));
    refs.cardSetEl.innerHTML = markupFilms;
    this.currentField = 'watched';
}};

export default new RefreshLibrary();







 