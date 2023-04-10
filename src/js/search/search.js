import FilmRestAPI from '../restAPI/restAPI';
import { refs } from '../refs/refs';
import Notiflix from 'notiflix';
import { renderMovies } from '../render-cards';
import { pagination } from '../pagination-home/pagination-home';
const exemplarFilms = new FilmRestAPI();

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(e) {
  e.preventDefault();

  exemplarFilms.searchQuery = e.currentTarget.elements.name.value.trim();

  if (!exemplarFilms.searchQuery) {
    Notiflix.Notify.info('Please write something');
    return;
  }
  exemplarFilms.resetPage();
  try {
    const data = await exemplarFilms.searchMovies();
    if (data.results.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no films watching your search query. Please try again.'
      );
      return;
    }
    refs.cardSetEl.innerHTML = '';
    Notiflix.Notify.success(`Hooray! We found ${data.total_results} films.`);
    renderMovies(data);
    // PAGINATION
    pagination.setTotalItems(Math.ceil(data.total_results / 20));
    pagination.movePageTo(1);
  } catch (err) {
    console.log;
  }
}

// PAGINATION
pagination.on('beforeMove', async ({ page }) => {
  console.log('Запит');
  try {
    exemplarFilms.page = page;
    const data = await exemplarFilms.searchMovies();
    renderMovies(data);
  } catch (err) {
    console.log;
  }
});
// pagination.on('afterMove', ({ page }) => console.log(page));
