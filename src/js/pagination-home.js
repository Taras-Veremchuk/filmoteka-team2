import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
 import '../sass/components/_tu-pagination.scss';
const container = document.getElementById('pagination');
container.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth',
    });
  }
});
export const options = {
  // totalItems: 10,
  itemsPerPage: 1,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination('pagination', options);
