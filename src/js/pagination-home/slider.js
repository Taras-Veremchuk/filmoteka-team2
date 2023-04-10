

const slider = document.querySelector('.carouselbox')
var scrollPerClick;
var imagePadding = 20
    

renderTrendy();

async function renderTrendy() {
    const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
    
    var result = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    )

    result = result.data.results;

    result.map(function (index) {
        slider.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}"`

        )
    })

    scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
}

    