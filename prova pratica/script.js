let apiKey = "fo8jXn3LWNGMKaBZoe5tE2JsnkzycP7d1N8FTL43oZNk3clzPqbJ5P6x"
fetch ('https://api.pexels.com/v1/search?query=cities', {
    headers: {
        authorization: apiKey
    }
})
.then(res=>{
    if (res.ok)
    return res.json();
    else {
        throw new Error("errore nell'elaborazione della richiesta")
    }
})
.then(data =>{
    console.log(data);
    firstLoad(data);
})
.catch(err =>{
    console.log(err);
})

const firstLoad = function(images){
    images = images.slice(0,9)
    let row = document.get
    let firstLoadButton = document.getElementById("loadImage")
    firstLoadButton.addEventListener("click",()=>{
        images.forEach(image) => {
            let newCard = document.createElement("div")
            newCard.classList.add("col-md-4")
            newCard.innerHTML =`
            <div class="card mb-4 shadow-sm">
            <img src="${image.url} alt="image" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </img>
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
            
                  `
        }
    })
}