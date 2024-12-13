import { Button, Col, Container, ProgressBar } from 'react-bootstrap'
import {
  Apple,
  FastForwardFill,
  PlayFill,
  Repeat,
  Shuffle,
  VolumeUp,
} from 'react-bootstrap-icons'

const Player = () => {
  const now = 60
  return (
    <Col className="bg-dark ">
      <Container className=" d-none d-lg-flex align-items-center justify-content-between py-2 px-5">
        <div className="text-light">
          <Shuffle className="text-light me-2" />
          <FastForwardFill className="text-light me-2" />
          <PlayFill className="text-light me-2" />
          <FastForwardFill className="text-light me-2" />
          <Repeat />
        </div>
        <div className=" bg-secondary w-50 d-flex justify-content-center py-2">
          <Apple className=" text-light" />
        </div>
        <div className=" d-flex align-items-center">
          <VolumeUp className=" text-white" />
          <ProgressBar now={now} label={`${now}%`} visuallyHidden />
        </div>
        <Button variant="danger">Accedi</Button>
      </Container>
    </Col>
  )
}

export default Player
