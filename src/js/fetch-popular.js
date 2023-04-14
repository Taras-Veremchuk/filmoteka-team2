import FilmRestAPI from './restAPI';
import { renderMovies } from './render-cards';
import { pagination } from './pagination-home';
import { refs } from './refs';
import refreshLibrary from './refresh-library'
import {hideSpinner} from './spiner'
const fetchedData = new FilmRestAPI();

fetchedData
  .fetchMovies()
  .then(data => {
    refreshLibrary.currentField = 'popular';
    const markupFilms = renderMovies(data.results);
    refs.cardSetEl.innerHTML = markupFilms;
    hideSpinner();

    // PAGINATION
    pagination.setTotalItems(Math.ceil(data.total_results / 20));
    pagination.movePageTo(1);
    pagination.on('beforeMove', async ({ page }) => {
      try {
        // console.log('Denys');
        fetchedData.page = page;
        const data = await fetchedData.fetchMovies();
        const markupsFilms = renderMovies(data.results);
        refs.cardSetEl.innerHTML = markupsFilms;
        hideSpinner();
      } catch (err) {
        console.error;
      }
    });
    // PAGINATION
  })
  .catch(err => console.log('Error: ', err));
