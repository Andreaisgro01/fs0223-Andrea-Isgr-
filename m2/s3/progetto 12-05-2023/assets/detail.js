const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";

let detailsIns = function (details) {
    let detailsCol = `
    <div class="col-4"></div>
    <div class="col-4">
    <div class="card">
    <img src=${details.imageUrl} class='card-img-top' alt='prod.img'/>
      <div class="card-body">
        <h5 class="card-title">${details.name}</h5>
        <p class="card-text">
        ${details.description}
        </p>
        <p> ${details.brand}</p>
        <p> ${details.price}€</p>
         <a href="./homepage.html" class="btn btn-primary">Back</a>
         
      </div>
    </div>
   </div>
   <div class="col-4"></div>

   `;
    let fillCol = document.querySelector(".row");
    fillCol.innerHTML = detailsCol;
}

const getDetailProduct = function () {
    let productIdAddressBar = new URLSearchParams(window.location.search).get(
        "productId"
    );

    fetch(PRODUCTS_URL + productIdAddressBar, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMyZjg4Zjc0MDAwMTQyODc0ZDQiLCJpYXQiOjE2ODM4OTczNTUsImV4cCI6MTY4NTEwNjk1NX0.nVOj6q_Y-TKi3h-BNxCo1IrYUsMDC_rTNbEeS4DQLZs"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Error')
            }
        })
        .then((data) => {
            detailsIns(data);
        })
        .catch((error) => {
            console.log(error);
        })
}
window.onload = function () {
    getDetailProduct();
};