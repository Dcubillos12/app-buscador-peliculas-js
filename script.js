document.getElementById('searchButton').addEventListener('click', searchMovies)

let apiKey = '0b5a3f061ea8c1914cf49e718ecdf0de'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'

let resultContainer = document.getElementById('results')

function searchMovies() {
    resultContainer.innerHTML = 'Cargango...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${apiKey}&query=${searchInput}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => displayMovies(respuesta.results))
}

function displayMovies(movies) {
    resultContainer.innerHTML = ''

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>No se encontro resultado para tu busqueda</p>'
        return
    }

    movies.forEach(movie => {
        let moviDiv = document.createElement('div')
        moviDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let realseDate = document.createElement('p')
        realseDate.textContent = 'la fecha de lanzamiento fue' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPatch = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPatch

        moviDiv.appendChild(poster)
        moviDiv.appendChild(title)
        moviDiv.appendChild(realseDate)
        moviDiv.appendChild(overview)

        resultContainer.appendChild(moviDiv)

    });
}
console.log(resultContainer)