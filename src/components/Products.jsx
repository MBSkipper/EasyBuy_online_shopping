import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Products({ cart, addToCart }) {
    const [products, setProducts] = useState([ ])
    const [filteredProducts, setFilteredProducts] = useState([ ])
    const [categories, setCategories] = useState([ ])
    const [category, setCategory] = useState('all')

    useEffect(() => {
        fetchProducts()
    }, [ ])

    useEffect(() => {
        if(category == 'all'){
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter(p => p.category == category))
        }
    }, [category])
    

    async function fetchProducts() {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data.products)
            setFilteredProducts(data.products)

            {/*the following creates the categories dynamically using the data in the API */}
            let productCategories = data.products.map(p => p.category) 
            const uniqueCategories = [ ]
            productCategories.forEach(c => {
                if(!uniqueCategories.includes(c)){
                    uniqueCategories.push(c)
                }
            })
            setCategories(uniqueCategories)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='d-flex justify-content-end align-items-center'>
                <label>Categories</label>
                <Form.Select 
                    value= {category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{width:'10em'}}
                >
                    <option value='all'>All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category[0].toUpperCase() + category.slice(1)} {/*categories are lower case in the API this code adds a capital letter to the word and adds it to the slice of the remaining word */}
                        </option>
                    ))}
                </Form.Select>
            </div>

            <Row className='mt-5'>
                {/*note ternary operator below to show products if there is anything in the array or to show 'Sorry ..etc' if nothing */}
                {filteredProducts.length ? filteredProducts.map(product => ( 
                    <Col key={product.id}>   {/*When using map need a unique key for each product so product.id is used */}
                        <Card style={{ width: '18rem', margin:'1em auto'}}> {/*margin style added to ensure centered text and card for sm screen */}
                                <Card.Img variant="top" src={product.images[0]} /> {/*selects first image in array of images in API data*/} 
                                <Card.Body>
                                    <Card.Title style={{minHeight:'48px'}}>{product.title}</Card.Title>
                                    <Card.Text>
                                    £{product.price}
                                    </Card.Text>
                                    <Button 
                                        variant="warning" 
                                        className="me-1"
                                        onClick={() => addToCart(product.id)}
                                        >
                                        { cart.includes(product.id) ? 
                                        'Added to cart': 
                                        'Add to cart'
                                        }
                                    </Button>
                                    <Button variant="info" className="me-1">Checkout</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                )) : (
                    <p className='lead'>Sorry, no products in stock</p>
                )}
            </Row>
        </>
    );
}

export default Products;


{/** NOTES
Categories of items 
found by code on line starting const categories ... followed by console.log(categories).  Review in console and pasted below

async function fetchProducts() {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data.products)

            const categories = data.products.map(p => p.category)
            console.log(categories)
        } catch (error) {
            console.log(error)
        }
    }


    
    Categories
    (30) ['beauty', 'beauty', 'beauty', 'beauty', 'beauty', 'fragrances', 'fragrances', 'fragrances', 'fragrances', 'fragrances', 'furniture', 'furniture', 'furniture', 'furniture', 'furniture', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries', 'groceries']
    
    */}