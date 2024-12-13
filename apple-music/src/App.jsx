import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MyNav from './components/MyNav'
import NotFound from './components/NotFound'
import Home from './components/Home'
import MoreExplore from './components/MoreExplore'
import MyFooter from './components/MyFooter'
import MusicPlayer from './components/MusicPlayer'
import { Row, Col } from 'react-bootstrap'
import Player from './components/Player'

function App() {
  return (
    <BrowserRouter>
      <Row className="p-0 m-0">
        <Col lg={2} className="m-0 p-0">
          <MyNav />
        </Col>
        <Col lg={10} className="m-0 p-0">
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Player />
                    <Home />
                    <MoreExplore />
                    <MusicPlayer />
                  </div>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer>
            <MyFooter />
          </footer>
        </Col>
      </Row>
    </BrowserRouter>
  )
}

export default App
