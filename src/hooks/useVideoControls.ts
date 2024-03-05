import { useRef, useState } from 'react'
import type { IVideoControls } from '../interfaces/IVideControls.interface' 

const useVideoControls = (): IVideoControls => {
  const videoPlayer = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  const togglePlay = (): void => {
    if (!(videoPlayer.current instanceof HTMLVideoElement)) return

    if (videoPlayer.current.paused) {
      videoPlayer.current.play().then((): void => {
        setIsPlaying(true)
      }).catch((error: Error): void => {
        setIsPlaying(false)
        console.error('Error al reproducir el video:', error.message)
      })
    } else {
      videoPlayer.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (): void => {
    if (!(videoPlayer.current instanceof HTMLVideoElement)) return

    videoPlayer.current.muted = !videoPlayer.current.muted
    setIsMuted((prev) => !prev)
  }

  const toggleFullScreen = (): void => {
    const video = videoPlayer.current
    if (!(video instanceof HTMLVideoElement)) return

    if (video.requestFullscreen !== undefined) {
      video.requestFullscreen()
        .then()
        .catch((e: Error): void => { console.log(e.message) })
    }
  }

  return {
    videoPlayer,
    isPlaying,
    togglePlay,
    isMuted,
    toggleMute,
    toggleFullScreen
  }
}

export default useVideoControls
