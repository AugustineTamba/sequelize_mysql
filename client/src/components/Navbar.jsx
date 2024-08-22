import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> Addidies </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addProduct"> Add Product </Nav.Link>
            <Nav.Link href="/products"> Product lists </Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;