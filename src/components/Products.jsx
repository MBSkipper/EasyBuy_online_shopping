import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products(props) {
    const [products, setProducts] = useState([ ])

    useEffect(() => {
        fetchProducts()
    }, [ ])

    async function fetchProducts() {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Row className='mt-5'>
            {/*note ternary operator below to show products if there is anything in the array or to show 'Sorry ..etc' if nothing */}
            {products.length ? products.map(product => ( 
                <Col>
                    <Card style={{ width: '18rem', margin:'1em auto'}}> {/*margin style added to ensure centered text and card for sm screen */}
                            <Card.Img variant="top" src={product.images[0]} /> {/*selects first image in array of images in API data*/} 
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                {product.price}
                                </Card.Text>
                                <Button variant="warning" className="me-1">Add to cart</Button>
                                <Button variant="info" className="me-1">Checkout</Button>
                            </Card.Body>
                    </Card>
                </Col>
            )) : (
                <p className='lead'>Sorry, no products in stock</p>
            )}
        </Row>
    );
}

export default Products;