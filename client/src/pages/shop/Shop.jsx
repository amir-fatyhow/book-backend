import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from "../../components/genreBar/GenreBar";
import BookList from "../../components/bookList/BookList";
import "./Shop.css"
import ScrollToTop from "react-scroll-to-top";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBooks, fetchGenres} from "../../http/bookApi";

const Shop = observer(() => {
    const {book} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => book.setGenre(data))
        fetchBooks(1).then(
            data => {
                book.setBooks(data.rows)
            }

        )
    }, [])

    useEffect(() => {
        fetchBooks(book.selectedGenre.id).then(
            data => {
                book.setBooks(data.rows)
            }

        )
    }, [book.selectedGenre])

    return (
        <Container className="container-sm shop__container">
            <ScrollToTop smooth />
            <Row>
                <Col md={2}>
                    <GenreBar/>
                </Col>
                <Col md={10}>
                    <BookList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;