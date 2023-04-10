const themeSwitch = document.querySelector('#switch');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  theme.classList.toggle('active');
  themeSwitch.classList.toggle('active');
});
