import { renderMovies } from './render-cards';
import { refs } from './refs';

class RefreshLibrary {
  
  refreshMarkup() {
        if (this.currentField === 'queue') {
      this.showQueue();
      return;
    }

    if (this.currentField === 'watched') {
      this.showWatched();
    }
  }

  showQueue() {
    const movies = JSON.parse(localStorage.getItem('QUEUE_MOVIES'));
    if (movies) {
      let markupFilms = '';
      if (this.filmName) {
        if(this.filmName?.length < 2) {
            // refs.cardSetEl.innerHTML = '';
            return;
        }
        const foundMovies = movies.filter(movie =>
          movie.title.toLowerCase().includes(this.filmName)
        );
        markupFilms = renderMovies(foundMovies);
      } else {
        markupFilms = renderMovies(movies);
      }
      refs.cardSetEl.innerHTML = markupFilms;
      this.currentField = 'queue';
    }
  }

  showWatched() {
    const movies = JSON.parse(localStorage.getItem('WATCHED_MOVIES'));
    if (movies) {
      let markupFilms = '';
      if (this.filmName) {
        if(this.filmName?.length < 2) {
            // refs.cardSetEl.innerHTML = '';
            return;
        }
        const foundMovies = movies.filter(movie =>
          movie.title.toLowerCase().includes(this.filmName)
        );
        
        markupFilms = renderMovies(foundMovies);
      } else {
        markupFilms = renderMovies(movies);
      }
      refs.cardSetEl.innerHTML = markupFilms;
      this.currentField = 'watched';
    }
  }

  showAll(movieName) {
    this.filmName = movieName?.toLowerCase().trim();
    if (this.currentField === 'queue') {
      this.showQueue();
      return;
    }

    if (this.currentField === 'watched') {
      this.showWatched();
    }
    //     const movies = [...JSON.parse(localStorage.getItem('QUEUE_MOVIES')), ...JSON.parse(localStorage.getItem('WATCHED_MOVIES'))];
    //     if(movies) {
    //         let ids = [];
    //     const foundMovies = movies.filter((movie) => {
    //         if(!ids.includes(movie.id)) {
    //         ids.unshift(movie.id);
    //     return movie.title.toLowerCase().includes(movieName.toLowerCase().trim());}}
    //     );
    // const markupFilms = renderMovies(foundMovies);
    // refs.cardSetEl.innerHTML = markupFilms;
    // this.currentField = 'library';}
  }
}

export default new RefreshLibrary();
