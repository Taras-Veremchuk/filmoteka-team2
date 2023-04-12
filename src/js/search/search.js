import FilmRestAPI from '../restAPI/restAPI';
import Pagination from 'tui-pagination';
import { refs } from '../refs/refs';
import Notiflix from 'notiflix';
import { renderMovies } from '../render-cards';
import { options } from '../pagination-home/pagination-home';

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

    const markupFilms = renderMovies(data.results);
    refs.cardSetEl.innerHTML = markupFilms;

    const pagination = new Pagination('pagination', options);
    // PAGINATION
    pagination.setTotalItems(Math.ceil(data.total_results / 20));
    pagination.movePageTo(1);

    pagination.on('beforeMove', async ({ page }) => {
      // console.log(page);
      try {
        exemplarFilms.page = page;
        const data = await exemplarFilms.searchMovies();
        const markupsFilms = renderMovies(data.results);
        refs.cardSetEl.innerHTML = markupsFilms;
      } catch (err) {
        console.error;
      }
    });
    // PAGINATION
  } catch (err) {
    console.error;
  }
}

// pagination.on('afterMove', ({ page }) => console.log(page));
