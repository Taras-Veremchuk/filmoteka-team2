const spinners = document.querySelectorAll('.spinner');

export const spinner = {
  on: function () {
    spinners.forEach(spinner => {
      spinner.classList.remove('is-hidden');
    });
  },
  off: function () {
    spinners.forEach(spinner => {
      spinner.classList.add('is-hidden');
    });
  },
};