import axios from 'axios';

const APIKey = "AIzaSyB8mf2ppVCxtfL33imlWiMFknuJt8B_Ezk";


const GoogleBooksAPI = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

const getBooksByTerm = (SearchTerm, setBooks,  startIndex, setTotalPages) => {

    console.log("Start Index "+ startIndex);
    GoogleBooksAPI.get('', {
        params: {
            q: SearchTerm,
            key: APIKey,
            startIndex: startIndex,
        },
    }).then((response) => {
        setBooks(response.data.items);
        setTotalPages(Math.ceil((response.data.totalItems/20)));
    })
}

const getBookDetails = (book_id, setCurrentBook) => {
    GoogleBooksAPI.get(''+book_id)
        .then((response) => {
            console.log("book ", response.data);
            setCurrentBook(response.data);
        });
}

export  {getBooksByTerm, getBookDetails};