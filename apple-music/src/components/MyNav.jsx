import { Button, Container, Nav, Navbar, NavItem } from 'react-bootstrap'
import { Apple } from 'react-bootstrap-icons'
import { Link } from 'react-router'

const MyNav = () => {
  return (
    <Navbar expand="lg" className=" bg-dark">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className=" border-0 bg-danger fs-6"
        />
        <div className=" d-flex align-items-center">
          <Apple className=" text-white fs-5" />
          <NavItem className="text-white fs-4">Music</NavItem>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={`nav-link text-white ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="*"
              className={`nav-link text-white ${
                location.pathname === '*' ? 'active' : ''
              }`}
            >
              Settings
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          className=" bg-transparent border-0 fw-bold"
          variant="outline-danger"
        >
          Accedi
        </Button>
      </Container>
    </Navbar>
  )
}

export default MyNav
