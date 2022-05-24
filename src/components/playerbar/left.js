import zoom from './images/zoom.svg'
import like from './images/like.svg'
import { Col,Row} from 'reactstrap'
import { Maincontext, useContext } from './context'

function Left() {
    
    const { music } = useContext(Maincontext)

    return (
        <Row className="playerbar__left">
        <Col xs="auto" className='playerbar__photo'><img src={music.imgsrc} /></Col>
        <Col xs="auto" className="playerbar__song"> 
            <Row className='song'>{music.song}</Row>
            <Row className='songer'>{music.songer}</Row>
        </Col>
        <Col xs="auto"> <img src={like} /> </Col>
        <Col xs="auto"> <img src={zoom} /> </Col>
        </Row>
  )
}

export default Left