import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'

//Refer to notes at bottom of page

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#cart">Cart</Nav.Link>
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
  - refer to file index.html and view the first <link> tage where the logo.png file is included as a prop thus: href="/logo.png".  This adds the logo to the browser tab

 
 */