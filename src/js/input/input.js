const input = document.querySelector('.search-input');
const svg = document.querySelector('.fliper');

const addFlipClass = async () => {
  svg.classList.add('fliper');
};

const removeFlipClass = async () => {
  svg.classList.remove('fliper');
};

removeFlipClass();

input.addEventListener('focus', async () => {
  await addFlipClass();
});

input.addEventListener('blur', async () => {
  await removeFlipClass();
});
