const themeSwitch = document.querySelector('#switch');
const theme = document.querySelector('.theme');
const footer = document.querySelector('footer');
const titleElements = document.querySelectorAll('.movie-card__title');
const genreElements = document.querySelectorAll('.movie-card__genre');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  theme.classList.toggle('active');
  themeSwitch.classList.toggle('active');
  footer.classList.toggle('active');

  titleElements.forEach(title => {
    title.classList.toggle('active');
  });

  genreElements.forEach(genre => {
    genre.classList.toggle('active');
  });
});
const container = document.querySelector('.footer__container');
const link = document.querySelector('.footer__link');

link.addEventListener('click', () => {
  container.classList.add('active');
});
