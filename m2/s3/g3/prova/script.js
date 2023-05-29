fetch ("https://striveschool-api.herokuapp.com/books")
.then((res) =>{
    if (res.ok ){
    return res.json()
    }
    else{
        throw new Error('errore nella rquest al server')
    }
})
.then((data)=>{
    console.log(data);
    renderBooks(data);
})
.catch((err)=>{
    console.log(err);
})
const renderBooks = function(books){
    let booksList = document.getElementById("booksContainer")
books.forEach((book) => {
        let newCol = document.createElement("div")
        newCol.classList.add("col-6","col-md-4", "col-xl-3", "col-xxl-2");
        newCol.innerHTML = `
    <div class="card">
        <img src="${book.img}" alt="...">
         <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.category}</p>
            <p class="card-text h6">${book.price}</p>
            <a href="#" class="btn btn-primary">Buy now</a>
            <a href="#" id="deleteButton" class="btn btn-primary">Delete</a>
        </div>
    </div> `
    
    

    let deleteButton = newCol.querySelector('#deleteButton');
        deleteButton.addEventListener('click', () => {
        newCol.remove();
        });
    
    booksList.appendChild(newCol)
    });
}

