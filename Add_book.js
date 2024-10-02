let name = prompt("Enter your Name");
let element= document.querySelector("h2");
element.textContent = "Hello   "+name +" !";

let books = [];

function addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const genreInput = document.getElementById('genre');

    const newBook = {
        id: books.length + 1,
        title: titleInput.value,
        author: authorInput.value,
        genre: genreInput.value,
        available: true,
    };

    books.push(newBook);
    renderBookList();

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    genreInput.value = '';
}

function removeBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        renderBookList();
    }
}

function borrowBook(id) {
    const book = books.find(book => book.id === id);
    if (book && book.available) {
        book.available = false;
        renderBookList();
    }
}

function renderBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${book.title}</strong> by ${book.author} [${book.available ? 'Available' : 'Borrowed'}]
            ${book.available ? `<button onclick="borrowBook(${book.id})">Borrow</button>` : ''}
            <button onclick="removeBook(${book.id})">Remove</button>
        `;
        bookList.appendChild(li);
    });
}