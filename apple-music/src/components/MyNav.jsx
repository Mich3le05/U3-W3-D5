import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Apple } from 'react-bootstrap-icons'
import { Link, useLocation } from 'react-router'

const MyNav = () => {
  const location = useLocation()

  return (
    <div className="bg-dark h-100 me-0">
      <Navbar expand="lg">
        <Container className="d-lg-flex flex-lg-column">
          <div className="d-flex align-items-center mb-3">
            <Apple className="text-white fs-3" />
            <span className="text-white fs-4 ms-2">Music</span>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 bg-danger fs-6 mb-3"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column">
            <Form className=" d-none d-lg-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-black border-0 text-light"
                aria-label="Search"
              />
            </Form>
            <Nav className="d-flex flex-column">
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
                Novità
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            className="d-lg-none mt-auto bg-transparent border-0 fw-bold "
            variant="outline-danger"
          >
            Accedi
          </Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNav
