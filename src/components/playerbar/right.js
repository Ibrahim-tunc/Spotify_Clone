 import { useEffect, useState } from "react"
 import highvol from './images/highvol.png'
 import lowvol from './images/lowvol.png'
 import midvol from './images/medvol.png'
 import mutvol from './images/mutvol.png'
 import { Col, Row, } from 'reactstrap'
 import { Maincontext, useContext } from './context'

function Right() {
    const [volsrc, setVolsrc] = useState(highvol)
    const {volume, setVolume } = useContext(Maincontext)


    useEffect(() => {
        changevolsrc()
    },[volume])

    const onclick = () => {
        setVolsrc( volsrc === highvol ? mutvol : highvol )
        setVolume( volume === 0 ? 0.5 : 0)
    }

    const changevol = (e) => {
        let newVol = e.target.value
        setVolume(newVol)
    }

    const changevolsrc = () => {
        if(volume == 0 ) {
            setVolsrc(mutvol)
        }
        else if(volume < 0.3 ) {
            setVolsrc(lowvol)
        }
        else if(volume < 0.7 ) {
            setVolsrc(midvol)
        }
        else {
            setVolsrc(highvol)
        }
    }

  return (
    <Row className="playerbar_right">

        <Col className='col__img' xs="auto"><img onClick={onclick} src={volsrc} /></Col>
        <Col><input type='range' onChange={changevol} step='0.1' min='0' max='1' value={volume} style={{width:"7rem"}}/></Col>
    </Row>
  )
}

export default Right 
