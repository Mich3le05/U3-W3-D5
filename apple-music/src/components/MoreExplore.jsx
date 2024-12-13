import { Button, Container } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const MoreExplore = () => {
  return (
    <div className="bg-black pb-5">
      <Container className="text-white pt-4">
        <h5>Altro da esplorare</h5>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-3">
          Esplora per genere <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          {' '}
          Decenni
          <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          {' '}
          Attvità e stati d`animo
          <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          Worldwide
          <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          Classifiche
          <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          Audio spaziale <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          Video musicali <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          Nuovi artisti <ChevronRight />
        </Button>
        <Button className=" btn-outline-danger border-0 bg-dark fw-semibold d-flex align-items-center w-100 justify-content-between py-3 mt-2">
          Hit del passato <ChevronRight />
        </Button>
      </Container>
    </div>
  )
}

export default MoreExplore
