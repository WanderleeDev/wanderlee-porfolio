import { useRef } from 'react'
import type { IManagerVideo } from '../interfaces/IManagerVideo.interface'

const useManagerVideo = (): IManagerVideo => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleVideo = (startTime = 0): void => {
    const video = videoRef.current
    if (video instanceof HTMLVideoElement) {
      video.currentTime = startTime
      video.play()
        .then((): void => {
          video.addEventListener('ended', () => { video.pause() })
        })
        .catch(e => {
          (e instanceof Error)
            ? console.log(e.message)
            : console.log(`Ha ocurrido un error inesperado - ${e}`)
        })
    }
  }

  return {
    handleVideo,
    videoRef
  }
}

export default useManagerVideo
