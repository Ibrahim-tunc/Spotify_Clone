import { Col } from 'reactstrap'

function Button({src, clas, onclick}) {
  return (
    <Col className='col__img' xs="auto" onClick={onclick}><img src={src} className={clas}  /></Col>
  )
}

export default Button