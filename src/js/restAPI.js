// API-Key
// 4c6e55add2f00844e9f979bd7b0fac7c

//-created class with methods:
//  -fetchMovies(movies for main page)
//  -searchMovies(for search form)
//  -getGenres(returned array of objects, which include genreID and genreName)
import {showSpinner} from './spiner'
export default class FilmRestAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    showSpinner();
    const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
    const searchParams = new URLSearchParams({
      page: this.page,
    });
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&${searchParams}`;

    if (!localStorage.getItem('MOVIE_GENRES')) {
      this.getGenres();
    }

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      localStorage.removeItem('CURRENT_ITEMS');
      localStorage.setItem('CURRENT_ITEMS', JSON.stringify(data));
      this.incrementPage();

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async searchMovies() {
    showSpinner();
    const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
    const searchParams = new URLSearchParams({
      page: this.page,
      query: this.searchQuery,
    });

    const BASE_URL = ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&${searchParams}`;

    if (!localStorage.getItem('MOVIE_GENRES')) {
      this.getGenres();
    }

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      localStorage.removeItem('CURRENT_ITEMS');
      localStorage.setItem('CURRENT_ITEMS', JSON.stringify(data));

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getGenres() {
    const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
    const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      const parsedGenres = {};
      data.genres.forEach(({ id, name }) => (parsedGenres[id] = name));
      localStorage.setItem('MOVIE_GENRES', JSON.stringify(parsedGenres));

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    return (this.page += 1);
  }

  resetPage() {
    return (this.page = 1);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
