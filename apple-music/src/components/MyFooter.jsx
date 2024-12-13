import { Container } from 'react-bootstrap'

const MyFooter = () => {
  return (
    <div className="bg-dark">
      <Container className="text-light py-4 pt-4 pb-5">
        <div className="mb-3 d-flex ">
          <p className="text-light">Italia</p>
          <p className="text-light opacity-75">
            <span className="text-light mx-3 ">|</span>English (UK)
          </p>
        </div>

        <p className="mb-3">
          Copyright © 2024 Apple Inc. Tutti i diritti riservati.
        </p>
        <div className="mb-3 d-flex flex-wrap ">
          <p className="text-light">Condizioni dei servizi internet</p>
          <p className="text-light">
            <span className="text-light mx-3 opacity-50">|</span>Apple Music e
            privacy
          </p>
          <p className="text-light">
            <span className="text-light mx-3 opacity-50">|</span>Avviso sui
            cookie
          </p>
          <p className="text-light">
            <span className="text-light mx-3 opacity-50">|</span>Supporto
          </p>
          <p className="text-light">
            <span className="text-light mx-3 opacity-50">|</span>Feedback
          </p>
        </div>
      </Container>
    </div>
  )
}

export default MyFooter
