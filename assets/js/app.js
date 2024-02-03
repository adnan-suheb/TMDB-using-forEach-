

let cl = console.log;


cl(movieArray);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

let result1 = ``;

var postCard = document.getElementById('postCard');


movieArray.forEach(move=> {

    result1 += `   <div class="col-md-4">
    <div class="card mb-4">
        <figure class="movieCard mb-0">
            <img src="https://image.tmdb.org/t/p/w342${move.poster_path}" alt="">
            <figcaption>
                <div class="ratingSection">
                    <div class="row">
                        <div class="col-10">
                        
                        <h4 class="movieName mb-0">${move.title}
                        </h4>
                        
                        </div>

                        <div class="col-2">
                            <div class="rating text-center ">    
                            ${move.vote_average >= 8 ? `<p class="bg-success">${move.vote_average}</p>` :
                                move.vote_average<= 7 && move.vote_average>=5 ? `<p class="bg-warning">${move.vote_average}</p>` : 
                                move.vote_average<5 ? `<p class="bg-danger">${move.vote_average}</p>`:`<p class="bg-warning">${move.vote_average}</p>`}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overviewSection">
                    <h4>${move.original_title}</h4>
                    <em>Overview</em>
                    <p>${move.overview}</p>
                </div>
            </figcaption>
        </figure>

    </div>
</div>`


})
cl(result1)

postCard.innerHTML = result1;
