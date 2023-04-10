import FilmRestAPI from './restAPI/restAPI';
import { renderMovies } from './render-cards';
import { pagination } from './pagination-home/pagination-home';

const fetchedData = new FilmRestAPI();

fetchedData
  .fetchMovies()
  .then(data => {
    renderMovies(data);

    // PAGINATION
    pagination.setTotalItems(Math.ceil(data.total_results / 20));
    pagination.movePageTo(1);
    pagination.on('beforeMove', async ({ page }) => {
      try {
        // console.log('Denys');
        fetchedData.page = page;
        const data = await fetchedData.fetchMovies();
        renderMovies(data);
      } catch (err) {
        console.error;
      }
    });
    // PAGINATION
  })
  .catch(err => console.log('Error: ', err));
