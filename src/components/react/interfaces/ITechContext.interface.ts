import { type ITechGalleryData } from "../../../interfaces/ITechnology.interface" 

export interface ITechContext {
  gallery: ITechGalleryData
  setTechIcons: (data: ITechGalleryData) => void
}
