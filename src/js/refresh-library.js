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
    const movies = JSON.parse(localStorage.getItem('QUEUE_MOVIES'));
    if(movies) {
    const markupFilms = renderMovies(movies);
    refs.cardSetEl.innerHTML = markupFilms;
    this.currentField = 'queue';}
    }
    
showWatched() {    
    const movies = JSON.parse(localStorage.getItem('WATCHED_MOVIES'));
    if(movies) {
    const markupFilms = renderMovies(movies);
    refs.cardSetEl.innerHTML = markupFilms;
    this.currentField = 'watched';}
}};

export default new RefreshLibrary();







 