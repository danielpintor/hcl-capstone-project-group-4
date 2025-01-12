import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from "./ProductCard";

export const ProductList = ({products}) => {

    return(<Container fluid>
        <Row className="p-3" xxl={5} xl={4} md={3} sm={2} xs={1}>
            {products.map( p => {
                return (<Col className="mb-4" key={p.id}><ProductCard product={p}/></Col>);
            })}
        </Row>
    </Container>);
}