import { use } from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

function CartPage({ cart }) {
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [subTotal, setSubTotal] = useState(0)

    const deliveryCharge = 5

useEffect(() => {
    fetchProducts()
}, [])

useEffect(() => {
    setCartProducts(products.filter(p => cart.includes(p.id)))
}, [products, cart])

useEffect(() => {
    let sum = 0
    cartProducts.forEach(cp => {
        sum += cp.price
    })
    setSubTotal(sum)

}, [cartProducts])

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
        <div>
           <h2 className='display-5'>Cart items</h2>
            <Row className='mt-5'>
                {cartProducts.length ? cartProducts.map(product => ( 
                    <Col key={product.id}>   {/*When using map need a unique key for each product so product.id is used */}
                        <Card style={{ width: '18rem', margin:'1em auto'}}> {/*margin style added to ensure centered text and card for sm screen */}
                                <Card.Img variant="top" src={product.images[0]} /> {/*selects first image in array of images in API data*/} 
                                <Card.Body>
                                    <Card.Title style={{minHeight:'48px'}}>{product.title}</Card.Title>
                                    <Card.Text>
                                    £{product.price}
                                    </Card.Text>
                                    <Button 
                                        className="mx-1"
                                        variant="info" 
                                    >-</Button>
                                    <Button 
                                    className="mx-1"
                                    variant="info"
                                    >+</Button>
                                    <Button 
                                        variant="warning" 
                                        className="me-1"
                                        onClick={() => addToCart(product.id)}
                                        >
                                        { cart.includes(product.id) ? 
                                        'Remove from cart': 
                                        'Add to cart'
                                        }
                                    </Button> 
                                </Card.Body>
                        </Card>
                    </Col>
                )) : (
                    <p className='lead'>No products in the cart</p>
                )}
            </Row>
            {Boolean(cart.length) && (
                <>
                    <p className='lead'>Summary</p>
                    <Card style={{ width: '18rem', margin:'auto', textAlign: 'left' }}>
                        <Card.Body>
                            <Card.Title>Summary</Card.Title>
                            <Card.Text>
                            Total Number of Items: {cart.length}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span>Subtotal:</span>
                                <span>£{subTotal.toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span>Delivery Charge:</span>
                                <span>£{deliveryCharge.toFixed(2)}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between">
                                <span>Total:</span>
                                <span>£{(subTotal + deliveryCharge).toFixed(2)}</span>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Body style={{textAlign: 'right'}}>
                            <Card.Link className='btn btn-success'>Proceed to checkout</Card.Link>
                        </Card.Body>
                        </Card>
                </>
            )}
        </div>     
           
    )
}

export default CartPage



{/**
 * NOTES below </Row> possibly insert code below
    
        </div>
           {cartProducts.map(cp => (
            <div key={cp.id}>{cp.id}{cp.title}</div>
           ))}
        </div> *******
    */}