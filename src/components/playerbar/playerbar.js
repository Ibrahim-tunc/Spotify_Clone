import Left from './left'
import Middle from './middle'
import Right from './right'
import Data from './datamusic'
import { Col, Row } from 'reactstrap'
import { Maincontext } from './context'
import { useState } from 'react'


function Playerbar() {

    const [count, setCount] = useState(0)
    const [music, setMusic] = useState(Data[0])
    const [volume, setVolume] = useState(1)

    const data = {
        count,
        setCount,
        music,
        setMusic,
        Data,
        volume, 
        setVolume
    }


    return (
        < Maincontext.Provider value={data}>
            <Row className="playerbar">
                <Col md={{
                    size: 3
                }}
                >
                    <Left music={music} />
                </Col>
                <Col md={{
                    size: 6
                }}
                    sm="12">
                    <Middle />
                </Col>
                <Col>
                <Right />
                </Col>
            </Row>
        </Maincontext.Provider>
    )
}

export default Playerbar