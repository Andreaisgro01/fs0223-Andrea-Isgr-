const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/"

const getProducts = function () {

    fetch(PRODUCT_URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMyZjg4Zjc0MDAwMTQyODc0ZDQiLCJpYXQiOjE2ODM4OTczNTUsImV4cCI6MTY4NTEwNjk1NX0.nVOj6q_Y-TKi3h-BNxCo1IrYUsMDC_rTNbEeS4DQLZs"
        }
    })

        .then((res) => {
            console.log('RES', res)
            if (res.ok) {

                return res.json()
            } else {
                throw new Error('Errore nel recupero dei prodotti!')
            }
        })
        .then((data) => {

            data.forEach((product) => {
                let colTemplate = `
         <div class="col-12 col-md-4">
           <div class="card my-3">
           <img src=${product.imageUrl} class='card-img-top' alt='prod.img'/>
             <div class="card-body">
               <h5 class="card-title">${product.name}</h5>
               <p class="card-text">
               ${product.description}
               </p>
               <p> ${product.brand}</p>
               <p> ${product.price}€</p>
               <a href="./backoffice.html?productId=${product._id}" class="btn btn-primary">Edit</a>
               <a href="./details.html?productId=${product._id}" class="btn btn-secondary">Show more</a>
             </div>
           </div>
         </div>
         `
                let rowReference = document.getElementById('products-container')
                rowReference.innerHTML += colTemplate
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = () => {
    getProducts()
}


