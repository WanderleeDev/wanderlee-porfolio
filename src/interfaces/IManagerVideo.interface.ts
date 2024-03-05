export interface IManagerVideo {
  handleVideo: (startTime: number) => void
  videoRef: React.RefObject<HTMLVideoElement>
}
