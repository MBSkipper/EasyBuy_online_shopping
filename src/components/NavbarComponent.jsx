import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router'

//Refer to notes at bottom of page

function NavbarComponent({ cart }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          EasyBuy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Featured</Nav.Link>
            <Nav.Link href="#pricing">Best Sellers</Nav.Link>           
          </Nav>
          <Nav>
            <Nav.Link 
              as={NavLink} 
              to='/cart'
              className={({ isActive }) => isActive ? "active" : ""
              } >
              Cart{' '}
               <Badge pill bg="dark">{cart.length}</Badge>
            </Nav.Link>

            <NavDropdown title="My Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#account-details">Account details</NavDropdown.Item>
              <NavDropdown.Item href="#my-orders">
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="#customer-care">Customer support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

/*
NOTES
Icon 
  - downloaded from Flaticon 
  - saved in assets folder
  - logo is imported as a component at the top of this file
  - logo also saved in public folder (assets folder is not public)
  - refer to file index.html and view the first <link> tag where the logo.png file is included as a prop thus: href="/logo.png".  This adds the logo to the browser tab

NavLink for Brand icon (Line 15)
Note use of NavLink to route brand icon to home page see below for more details.  Refer to this code
  <Navbar.Brand as={NavLink} to='/'> 


NavLink for cart (Line 32)
NavLink code below uses react router to route link to cart page.  You. must import Navlink from react-router, see above. The 'to' prop routes to cart.  The className={({ isActive })...shows the cart link as active (darker color) if it is accessed via the checkout button or navbar 
            <Nav.Link 
              as={NavLink} 
              to='/cart'
              className={({ isActive }) => isActive ? "active" : ""
              } >
              Cart{' '}
               <Badge pill bg="dark">{cart.length}</Badge>
            </Nav.Link>



 */