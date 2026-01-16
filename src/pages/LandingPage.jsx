import Header from '../components/Header.jsx';
import Products from '../components/Products.jsx';

function LandingPage({ cart, addToCart }) {
    return (
        <div>
            <Header />
            <hr/>
            <Products 
                cart={cart} 
                addToCart={addToCart} 
            />
        </div>

    );
}

export default LandingPage;