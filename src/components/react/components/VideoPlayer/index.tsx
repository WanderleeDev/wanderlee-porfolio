import './VideoPlayer.scss'

import videoUnWrapper from '../../../../assets/video/unwrapped.mp4'
import useVideoControls from '../../../../hooks/useVideoControls'

const VideoPlayer = (): JSX.Element => {
  const { togglePlay, videoPlayer, isMuted, isPlaying, toggleMute, toggleFullScreen } = useVideoControls()

  return (
    <div className="video-wrapper u-shadow-2" >
      <video className="video" preload="auto" width="100%" muted ref={videoPlayer}>
        <source type="video/mp4" src={videoUnWrapper}/>
        Your browser does not support the video tag.
      </video>
      <div className="video-controls">
        <button aria-label='iniciar o detener video' onClick={ togglePlay} className={`video-btn ${isPlaying ? 'play' : 'pause'}`} type="button">
        </button>
        <button aria-label='activar o desactivar sonido' onClick={toggleMute} className={`video-btn ${!isMuted ? 'muted' : 'sound'}`} type="button"></button>
        <button aria-label='activar o desactivar fullscreen' onClick={toggleFullScreen} className="video-btn fullScreen" type="button"></button>
      </div>
    </div>
  )
}

export default VideoPlayer
