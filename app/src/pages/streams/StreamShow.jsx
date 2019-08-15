import React, { useRef, useEffect } from 'react'
import flv from 'flv.js'
import config from '../../config.json'
import useFetchStream from '../../hooks/useFetchStream'

export default function StreamShow({ match }) {
  const stream = useFetchStream(match.params.id)
  const videoPlayer = useRef(null)

  useEffect(() => {
    if (videoPlayer.current === null) return
    const flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `${config.RTMP_HOST}/live/${stream.id}.flv`
    })
    flvPlayer.attachMediaElement(videoPlayer.current)
    flvPlayer.load()

    return () => {
      flvPlayer.destroy()
    }
  }, [stream, videoPlayer])

  return (
    <div>
      <video ref={videoPlayer} style={{ width: '100%' }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  )
}
