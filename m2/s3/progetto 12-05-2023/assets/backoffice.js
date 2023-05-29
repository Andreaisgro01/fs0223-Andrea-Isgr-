const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/"

let addressBarContent = new URLSearchParams(window.location.search)

let productId = addressBarContent.get('productId')

console.log('PRODUCTID', productId)

if (productId) {

    document.getElementsByTagName('h2')[0].innerText =
        'change product'

    document.getElementById('save-button').innerText = 'change'

    let deleteButton = document.getElementById('delete-button')
    deleteButton.classList.remove('d-none')
    deleteButton.addEventListener('click', () => {
        const confirmed = confirm(
            "Proceed with definitive elimination?"
        );
        if (confirmed) {
            fetch(PRODUCTS_URL + productId, {
                method: 'DELETE',
                headers: {
                    "Authorization": " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMyZjg4Zjc0MDAwMTQyODc0ZDQiLCJpYXQiOjE2ODM4OTczNTUsImV4cCI6MTY4NTEwNjk1NX0.nVOj6q_Y-TKi3h-BNxCo1IrYUsMDC_rTNbEeS4DQLZs"
                }

            })
                .then((res) => {
                    if (res.ok) {
                        alert('elimination completed successfully')
                        location.assign('./homepage.html')
                    } else {
                        throw new Error("oh no elimination don't works")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
}


fetch(PRODUCTS_URL + productId, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMyZjg4Zjc0MDAwMTQyODc0ZDQiLCJpYXQiOjE2ODM4OTczNTUsImV4cCI6MTY4NTEwNjk1NX0.nVOj6q_Y-TKi3h-BNxCo1IrYUsMDC_rTNbEeS4DQLZs"
    },
})

    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Error product not found")
        }
    })
    .then((product) => {
        console.log(
            "Product it's ok" ,
            product
        )

        document.getElementById('name').value = product.name
        document.getElementById('description').value = product.description
        document.getElementById('image').value = product.imageUrl
        document.getElementById('brand').value = product.brand
        document.getElementById('price').value = product.price
    })
    .catch((error) => {
        console.log(error)
    })



const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('send datas')

    let nameInput = document.getElementById('name')
    let imageInput = document.getElementById('image')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')


    let newProduct = {
        name: nameInput.value,
        imageUrl: imageInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        price: priceInput.value,
    }
    console.log('Product is redy', newProduct)

    fetch(productId ? PRODUCTS_URL + productId : PRODUCTS_URL, {

        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGMyZjg4Zjc0MDAwMTQyODc0ZDQiLCJpYXQiOjE2ODM4OTczNTUsImV4cCI6MTY4NTEwNjk1NX0.nVOj6q_Y-TKi3h-BNxCo1IrYUsMDC_rTNbEeS4DQLZs",
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {

            console.log('check if call is good', res)
            if (res.ok) {

                alert(productId ? 'Product changed' : 'Product has been created successfully')
                location.assign('./homepage.html')
            } else {

                alert('Error')
                throw new Error('Error')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})


let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    const confirmed = confirm("Do you want to reset product?");

    if (confirmed) {
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image").value = "";
        document.getElementById("price").value = "";
        document.getElementById("brand").value = "";
    }
})