import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from  '../img/SOCABblanc.jpg';

function Header() {
    return (
        <header className="mb-5">
            <Navbar id='nav' expand="lg" className="fixed-top bg-white border-bottom">
            <Container>
                <Navbar.Brand href="/">
                    <img
                    src={Logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="SOCAB Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#mission">Notre mission</Nav.Link>
                    <Nav.Link href="#event">Nos événements</Nav.Link>    
                    <Nav.Link href="#team">La Team</Nav.Link>
                    <Nav.Link href="#contact">Nous contacter</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
}

export default Header;