import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from "../components/GenreBar";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <GenreBar/>
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
};

export default Shop;