import prev from './images/prev.svg'
import loop from './images/loop.svg'
import mix from './images/mix.svg'
import playsrc from './images/play.svg'
import pausesrc from './images/pause.svg'
import { Col, Row, } from 'reactstrap'
import { useEffect, useRef, useState } from 'react'
import { Maincontext, useContext } from './context'
import Button from './button'

const Middle = () => {

  const [play, setPlay] = useState(false)
  const [playing, setPlaying] = useState(playsrc)
  const [to, setTo] = useState('0.00')
  const [past, setPast] = useState('0.00')
  const [len, setLen] = useState(0)
  const [current, setCurrent] = useState(0)

  const audioRef = useRef([])
  const { music, setMusic, Data, count, setCount,volume } = useContext(Maincontext)


  useEffect(() => {
    const audio = audioRef.current
    audio.volume = volume
  },[volume])

  useEffect(() => {
    updateTime()
  }, [current])

  useEffect(() => {
    onloaded()
  },[len])

  useEffect(() => {
    onplay()
  }, [play])

  useEffect(() => {
    onrlclick()
  }, [count])
  // Right And Left Click


  const onrlclick = () => {
    if (count < 0) {
      setMusic(Data[Data.length - 1])
    }
    else if (count > Data.length - 1) {
      setMusic(Data[0])
    }
    else {
      setMusic(Data[count])
    }
  }


  const updateTime = () => {
    const toFormat = durationFormat(len - current)
    const pastFormat = durationFormat(current)
    setTo(toFormat)
    setPast(pastFormat)
  }

  const onloaded = () => {
    const format = durationFormat(len)
    setTo(format)
  }

  const onplay = () => {
    const audio = audioRef.current
    play ? audio.play() : audio.pause()
    play ? setPlaying(pausesrc) : setPlaying(playsrc)

  }

  const onchange = (e) => {
    const audio = audioRef.current
    audio.currentTime = e.target.value
    setCurrent(e.target.value)
  }

  const durationFormat = (dur) => {
    const format = `${Math.round(dur / 60)}.
    ${Math.round(dur % 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })}`
    return format
  }

  return (
    <Row className='player__mid'>

      <Row className='playing'>
        <Button src={mix} />
        <Button src={prev}
          onclick={() => { setCount(count === 0 ? Data.length - 1 : count - 1) }} />
        <Button src={playing} onclick={() => { setPlay(!play) }} />
        <Button src={prev} clas={'rotate__180'}
          onclick={() => { setCount(count === Data.length - 1 ? 0 : count + 1) }} />
        <Button src={loop} />
      </Row>





      <Row className='playing'>
        <Col xs="auto" className='font'>{past}</Col>
        <Col xs="auto">
          <input type="range" className='progress' step="1" value={current} min="0" max={len}
            onChange={onchange} />
          <audio ref={audioRef} src={music.songsrc}
            onLoadedData={(e) => { setLen(e.currentTarget.duration)}}
            onTimeUpdate={(e) => { setCurrent(e.currentTarget.currentTime) }}
            onEnded={() => {setCount(count === Data.length - 1 ? 0 : count + 1)}}
            onDurationChange={ onplay }
            >     
          </audio>
        </Col>
        <Col xs="auto" className='font'> {to} </Col>
      </Row>

    </Row>
  )
}

export default Middle











