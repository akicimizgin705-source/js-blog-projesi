const books = [
{
    id:1,
    title:"Suç ve Ceza",
    author:"Dostoyevski"
},
{
    id:2,
    title:"Kumarbaz",
    author:"Dostoyevski"
},
{
    id:3,
    title:"Anna Karenina",
    author:"Tolstoy"
},
{
    id:4,
    title:"Dönüşüm",
    author:"Kafka"
}
];
function searchBooks(){

    const value =
        searchInput.value.toLowerCase();

    const filtered =
        books.filter(book =>
            book.title
            .toLowerCase()
            .includes(value)
        );

    displayBooks(filtered);
}
function displayBooks(bookArray){

    bookList.innerHTML = "";

    bookArray.forEach(book => {

        const div =
            document.createElement("div");

        div.classList.add("book");

        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>

            <button
            class="favorite-btn"
            onclick="addFavorite(${book.id})">
            Favorilere Ekle
            </button>
        `;

        bookList.appendChild(div);
    });
}
let favoriteBooks = [];
function addFavorite(id){

    const book =
        books.find(book =>
            book.id === id
        );

    favoriteBooks.push(book);

    renderFavorites();
}
function renderFavorites(){

    favorites.innerHTML = "";

    favoriteBooks.forEach(book => {

        const div =
            document.createElement("div");

        div.classList.add("book");

        div.innerHTML = `
            <h4>${book.title}</h4>

            <button
            onclick="removeFavorite(${book.id})">
            Sil
            </button>
        `;

        favorites.appendChild(div);
    });
}
function removeFavorite(id){

    favoriteBooks =
        favoriteBooks.filter(
            book => book.id !== id
        );

    renderFavorites();
}
searchBtn.addEventListener(
    "click",
    searchBooks
);
localStorage.setItem(
    "favorites",
    JSON.stringify(favoriteBooks)
);
favoriteBooks =
JSON.parse(
    localStorage.getItem("favorites")
) || [];