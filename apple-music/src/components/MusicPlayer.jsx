import { Container, Image, Button } from 'react-bootstrap'
import { FastForwardFill, PlayFill } from 'react-bootstrap-icons'

const MusicPlayer = () => {
  return (
    <Container className=" d-lg-none d-flex align-items-center justify-content-between bg-dark rounded-4 fixed-bottom py-2 mb-2 ">
      <Image
        src="/assets/images/2e.png"
        className="ms-3 rounded-2"
        width={'50px'}
      />
      <div className="d-flex align-items-center">
        <Button variant="link" className="text-light p-0 opacity-75">
          <PlayFill size={36} />
        </Button>
        <Button variant="link" className="text-light opacity-75">
          <FastForwardFill size={25} />
        </Button>
      </div>
    </Container>
  )
}

export default MusicPlayer
