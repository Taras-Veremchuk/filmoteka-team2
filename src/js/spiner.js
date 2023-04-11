export function showSpinner () {
  const spinner = document.querySelector('.spinner');
  spinner.classList.contains('done') && spinner.classList.remove('done');
}

export function hideSpinner() {
  const spinner = document.querySelector('.spinner');
  const iframe = document.querySelector('iframe');
  const img = document.querySelector('.item-modal__img');
  iframe
    ? iframe.onload = function () { !spinner.classList.contains('done') && spinner.classList.add('done') }
    : img
    ? img.onload = function () { !spinner.classList.contains('done') && spinner.classList.add('done') }
    : !spinner.classList.contains('done') && spinner.classList.add('done')
}