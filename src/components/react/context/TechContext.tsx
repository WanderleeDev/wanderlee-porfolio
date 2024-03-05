import { createContext } from 'react'
import { type ITechContext } from '../interfaces/ITechContext.interface'

const TechContext = createContext<ITechContext>({
  gallery: {
    tech: [],
    title: ''
  },
  setTechIcons: () => {}
})

export default TechContext
