import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from "../components/genreBar/GenreBar";
import BookList from "../components/bookList/BookList";
import "./Shop.css"
import ScrollToTop from "react-scroll-to-top";

const Shop = () => {
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
};

export default Shop;