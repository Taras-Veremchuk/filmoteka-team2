const themeSwitch = document.querySelector('#switch');
const theme = document.querySelector('.theme');
const footer = document.querySelector('footer');
const footerContainer = document.querySelector('.footer__container');
const titleElements = document.querySelectorAll('.movie-card__title');
const genreElements = document.querySelectorAll('.movie-card__genre');

// Функція для зберігання значення теми в localStorage
const setTheme = isDark => {
  localStorage.setItem('isDark', isDark);
};

// Функція для отримання значення теми з localStorage
const getTheme = () => {
  return localStorage.getItem('isDark') === 'true';
};

// Перевіряємо, чи збережене значення теми в localStorage
if (getTheme()) {
  document.body.classList.add('dark');
  theme.classList.add('active');
  themeSwitch.classList.add('active');
  footer.classList.add('active');
  footerContainer.classList.add('footer--dark');
  titleElements.forEach(title => {
    title.classList.add('active');
  });
  genreElements.forEach(genre => {
    genre.classList.add('active');
  });
} else {
  document.body.classList.remove('dark');
  theme.classList.remove('active');
  themeSwitch.classList.remove('active');
  footer.classList.remove('active');
  footerContainer.classList.remove('footer--dark');
  titleElements.forEach(title => {
    title.classList.remove('active');
  });
  genreElements.forEach(genre => {
    genre.classList.remove('active');
  });
}

// Додаємо слухач подій
themeSwitch.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  theme.classList.toggle('active');
  themeSwitch.classList.toggle('active');
  footer.classList.toggle('active');
  footerContainer.classList.toggle('footer--dark');
  titleElements.forEach(title => {
    title.classList.toggle('active');
  });
  genreElements.forEach(genre => {
    genre.classList.toggle('active');
  });
  // Зберігаємо значення теми в localStorage
  setTheme(isDark);
});
