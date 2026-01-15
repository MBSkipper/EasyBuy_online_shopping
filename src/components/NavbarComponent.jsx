import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EasyBuy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Featured</Nav.Link>
            <Nav.Link href="#pricing">Best Sellers</Nav.Link>           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>

            <NavDropdown title="My Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Account details</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Customer support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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