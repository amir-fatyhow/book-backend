import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import BookItem from "./BookItem";

const BookList = observer(() => {
    const {book} = useContext(Context)
    return (
        <Row className="d-flex flex-wrap mb-5">
            {book.books.map(book =>
                <BookItem key={book.id} book={book}/>
            )}
        </Row>
    );
});

export default BookList;