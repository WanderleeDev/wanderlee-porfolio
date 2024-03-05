import { technologies, learningTech } from './myTech'
import { type ITechGalleryData } from '../interfaces/ITechnology.interface' 

export const mySkills: ITechGalleryData = {
  tech: technologies,
  title: 'Tecnologías que actualmente manejo'
}

export const learningSkills: ITechGalleryData = {
  tech: learningTech,
  title: 'Tecnologías que actualmente me encuentro estudiando'
}
