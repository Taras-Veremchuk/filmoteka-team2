import FilmRestAPI from '../restAPI/restAPI';
import Notiflix from 'notiflix';
import { renderMovies } from '../render-cards';
import { pagination } from '../pagination-home/pagination-home';
const exemplarFilms = new FilmRestAPI();

const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadeMoreBtn: document.querySelector('button[type="submit"]'),
  cardSetEl: document.querySelector('.card-set'),
};

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
  console.log(page);
  try {
    exemplarFilms.page = page;
    console.log(exemplarFilms.searchQuery);
    const data = await exemplarFilms.searchMovies();
    console.log(data);
    renderMovies(data);
  } catch (err) {
    console.log;
  }
});
// pagination.on('afterMove', ({ page }) => console.log(page));