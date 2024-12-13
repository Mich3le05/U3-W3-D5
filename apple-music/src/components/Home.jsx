import { useState, useEffect } from 'react'
import { Alert, Card, CardText, Col, Container, Row } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'

const Home = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        let resp = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=pop'
        )
        if (resp.ok) {
          let data = await resp.json()
          console.log(data)
          setTracks(data.data)
          setLoading(false)
        } else {
          setError(true)
          setLoading(false)
        }
      } catch (error) {
        setError(true)
        setLoading(false)
        console.log(error)
      }
    }

    fetchTracks()
  }, [])

  return (
    <div className="bg-black">
      <Container className="text-white pt-4">
        {/* Novità */}
        <div>
          <h1>Novità</h1>
          <hr className="bg-opacity-100" />
          <div className="d-flex justify-content-between">
            <Col xs={7} sm={10} className="mb-4">
              <Card.Body>
                <Card.Title className="mt-1 fs-6 opacity-75">
                  NUOVA STAZIONE RADIO
                </Card.Title>
                <CardText>
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </CardText>
                <Card.Img src="/assets/images/1a.png" className="rounded-3" />
              </Card.Body>
            </Col>
            <Col xs={5} sm={10} className="mb-4 ms-3">
              <Card.Body>
                <Card.Title className="mt-1 fs-6 opacity-75">
                  NUOVA STAZIONE RADIO
                </Card.Title>
                <CardText>Ecco la nuova casa della musica latina</CardText>
                <Card.Img src="/assets/images/1b.png" className="rounded-3" />
              </Card.Body>
            </Col>
          </div>
        </div>

        {/* Nuovi episodi radio */}
        <Row className="mt-5">
          <h5 className="mb-3">
            Nuovi episodi radio <ChevronRight className="opacity-50" />
          </h5>

          <Col xs={3} className="mb-4 me-2">
            <Card.Img src="/assets/images/2a.png" className="rounded-3" />
            <Card.Body>
              <Card.Title className="mt-1 fs-6">Pròlogo con Abuelo</Card.Title>
            </Card.Body>
          </Col>

          <Col xs={3} className="mb-4">
            <Card.Img
              variant="top"
              src="/assets/images/2b.png"
              className="rounded-3"
            />
            <Card.Body>
              <Card.Title className="fs-6 mt-1">The Wanderer</Card.Title>
            </Card.Body>
          </Col>

          <Col xs={3} className="mb-4">
            <Card.Img
              variant="top"
              src="/assets/images/2c.png"
              className="rounded-3"
            />
            <Card.Body>
              <Card.Title className="fs-6 mt-1">
                Michael Bublé & Carly Pearce
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>

        {/* Nuove uscite */}
        <Row className="mt-5">
          <h5 className="mb-3">
            Nuove uscite <ChevronRight className="opacity-50" />
          </h5>
          {error && (
            <Alert variant="danger" className="text-center">
              An error has occurred, please try again!
            </Alert>
          )}
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <Row>
              {tracks.slice(0, 6).map((track) => (
                <Col key={track.id} xs={3} lg={2} className="mb-4">
                  <Card.Img
                    src={track.album.cover_medium}
                    alt={track.title}
                    className="rounded-3"
                  />
                  <Card.Body>
                    <Card.Title className="mt-1 fs-6">{track.title}</Card.Title>
                    <Card.Text className="opacity-75">
                      {track.artist.name}
                    </Card.Text>
                  </Card.Body>
                </Col>
              ))}
            </Row>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Home
