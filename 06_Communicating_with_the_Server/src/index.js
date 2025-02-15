// Create variables to hold onto the URLs so we don't hardcode them in. This will make life easy for us in the future!!! 🤓
const firstStoreUrl = 'http://localhost:3000/stores/1'
const booksUrl = 'http://localhost:3000/books'

//////////////////////////////////////
// render functions (DOM Manipulation)
//////////////////////////////////////

// Renders Header
function renderHeader(store){
    document.querySelector('h1').textContent = store.name
}
// Renders Footer
function renderFooter(store){
    const footerDivs = document.querySelectorAll('footer div')
    footerDivs[0].textContent = store.name
    footerDivs[1].textContent = store.address
    footerDivs[2].textContent = store.hours
}

function renderBookCard(cardData) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')
    
    h3.textContent = cardData.title
    pAuthor.textContent = cardData.author
    pPrice.textContent = `$${cardData.price}`
    btn.textContent = 'Delete'
    
    img.src = cardData.imageUrl
    li.className = 'list-li'
    
    //Event Listener 
    btn.addEventListener('click',()=>li.remove())
    
    li.append(h3,pAuthor,pPrice,img,btn)
    document.querySelector('#book-list').append(li)
}

function renderBooks(books) {
    // render the books on the DOM
    books.forEach((book) => renderBookCard(book))
}

// Write a function to fetch the books from our db.json file!!! 🙌
function fetchBooks() {
    fetch(booksUrl)
        .then((response) => response.json())
        .then(renderBooks)
}
fetchBooks()

// A function that will now fetch our store information!
function getFirstStore() {
    fetch(firstStoreUrl)
        .then((response) => response.json())
        .then((store) => {
            renderHeader(store)
            renderFooter(store)
        })
}
getFirstStore()
// console.log("before fetch")
// fetch("http://localhost:3000/stores") //endpoint
//     .then(resp => resp.json()) //parsing it from JSON to JS 
//     .then((data) => console.log(data))
//     .catch(err=> console.error(err))
//     //JSON : JS object notation 
//     //JSON is not vanilla JS object