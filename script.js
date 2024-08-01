let movieNameRef = document.getElementById("movie-name");
let SearchBtn = document.getElementById("search-btn");
let Result = document.getElementById("result");
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=2fddff03`;
    if (movieName.length <= 0) {
        Result.innerHTML = `<h3 class="msg">Please Enter Movie Name</h3>`;
    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response == 'True') {
                    Result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <span>Rating:</span>
                                <img src="star.png">
                                <h4>${data.imdbRating}/10</h4>
                            </div>
                            <div class="details">
                                <span>Rated: ${data.Rated}</span>                  
                                <span>Year: ${data.Year}</span>
                                <span>Screen Time: ${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>
                                    ${data.Genre.split(",").join("</div><div>")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                    `;
                } else {
                    Result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
                }
            })
            .catch(() => {
                Result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
            });
    }
};
SearchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
