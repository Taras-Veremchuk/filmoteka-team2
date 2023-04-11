import { hideSpinner, showSpinner } from "./spiner";


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
            `<img class="img-${index} slider-img" src="https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}"/>`

        )
    })

    scrollPerClick = 400; 
}

async function getMovieVideos(movieId) {
    const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
        const BASE_URL = `https://api.themoviedb.org/3/`;

    const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
}

function trailerLink(eRef) {
    const trailerBtn = eRef;

    trailerBtn.forEach(el =>
        el.addEventListener('click', e => {
            showSpinner();
            renderModelTrailer(e.target.dataset.id);
        }),
    );

    function renderModelTrailer(movieId) {
        try {
            const response = getMovieVideos(movieId);
            return response
                .then(({ data }) => {
                    const id = data.results[0].key;
                    const instance = sliders.create(
                        `<iframe
    width="980"
    height="525"
    src='https://www.youtube.com/embed/${id}'
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>`
                    );
                    instance.show();
                    modalTrailer(instance);
                    hideSpinner();
                })
                .catch(() => {
                    hideSpinner();
                    const instance = sliders.create(
                        `<img 
      width="980" 
      height="525" 
      src="https://moviemaker.minitool.com/images/uploads/articles/2020/08/youtube-video-not-available/youtube-video-not-available-1.png" 
      alt="no found trailer" 
      class="trailer_video">`
                    );
                    instance.show();
                    modalTrailer(instance);
                });
        } catch (error) {
            console.log(error);
        }
    }

    function modalTrailer(instance) {
        const modalBox = document.querySelector
    }
}