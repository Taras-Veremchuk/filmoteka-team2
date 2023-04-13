import FilmRestAPI from './restAPI';
import { renderMovies } from './render-cards';
import { pagination } from './pagination-home';
import { refs } from './refs';
const fetchedData = new FilmRestAPI();

fetchedData
  .fetchMovies()
  .then(data => {
    const markupFilms = renderMovies(data.results);
    refs.cardSetEl.innerHTML = markupFilms;

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
      } catch (err) {
        console.error;
      }
    });
    // PAGINATION
  })
  .catch(err => console.log('Error: ', err));
