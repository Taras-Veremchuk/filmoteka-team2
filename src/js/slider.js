// import { hideSpinner, showSpinner } from "./spiner";
import { openModalSlider } from "./modal-slider";

const sliders = document.querySelector('.carouselbox')
var scrollPerClick;
const imagePadding = 20
    
document.getElementById('sliderLeft').addEventListener('click', sliderScrollLeft);
document.getElementById('sliderRight').addEventListener('click', sliderScrollRight);


renderTrendy();

let scrollAmount = 0; 

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0
    }
}

function sliderScrollRight() {
    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        })
    }
}


async function renderTrendy() {
    const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
        const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

    
    const response = await fetch(BASE_URL);
    const data = await response.json();


    const result = data.results;

    result.map(function (item,index) {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}" data-id=${item.id} />`

        )
    })
    localStorage.setItem('WEEK_POPULAR', JSON.stringify(result));
    sliders.addEventListener('click', openModalSlider);

    scrollPerClick = 400; 
}

