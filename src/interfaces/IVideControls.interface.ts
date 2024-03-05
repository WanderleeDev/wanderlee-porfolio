export interface IVideoControls {
  videoPlayer: React.RefObject<HTMLVideoElement>
  isPlaying: boolean
  isMuted: boolean
  togglePlay: () => void
  toggleMute: () => void
  toggleFullScreen: () => void
}
