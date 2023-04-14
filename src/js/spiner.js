export function showSpinner () {
  const spinner = document.querySelector('.spiner-box');
  spinner.classList.remove('spinner--hidden');
  
}

export function hideSpinner() {
  const spinner = document.querySelector('.spiner-box');
  spinner.classList.add('spinner--hidden');
}