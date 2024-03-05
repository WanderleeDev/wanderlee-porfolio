import { useState } from 'react'
import { type ITechGalleryData } from '../../../interfaces/ITechnology.interface'
import { mySkills } from '../../../data/dataGallery' 

import TechContext from './TechContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const TechProvider = ({ children }: Props): JSX.Element => {
  const [tech, setTech] = useState<ITechGalleryData>(mySkills)
  const setTechIcons = (data: ITechGalleryData): void => {
    setTech(data)
  }

  return (
    <TechContext.Provider value={{ gallery: tech, setTechIcons }}>
      {children}
    </TechContext.Provider>
  )
}

export default TechProvider
