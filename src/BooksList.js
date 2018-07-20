import React from "react";

class BookList extends React.Component {

}

export default ListBook

componentDidMount() { //extract books
    BooksAPI.getAll().then(books => console.log(books));
    //let query = "react";
    //BooksAPI.search(query).then(books => console.log(books));
}