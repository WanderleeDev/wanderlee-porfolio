import { useContext, useState } from 'react'
import './Button.scss'
import TechContext from '../../context/TechContext'
import { mySkills, learningSkills } from '../../../../data/dataGallery'
import type { ITechGalleryData } from '../../../../interfaces/ITechnology.interface'

const Button = (): JSX.Element => {
  const { setTechIcons } = useContext(TechContext)
  const [activeFilter, setActiveFilter] = useState(0)
  const filterIcons = (icons: ITechGalleryData, i: number): void => {
    setTechIcons(icons)
    setActiveFilter(i)
  }

  return (
      <div className='buttons u-shadow-2'>
        <button
          className={`buttons-btn ${activeFilter === 0 && 'activeFilter'}`}
          onClick={() => { filterIcons(mySkills, 0) }}>
          mis tecnologías
        </button>
        <button
          className={`buttons-btn ${activeFilter === 1 && 'activeFilter'}`}
          onClick={() => { filterIcons(learningSkills, 1) }}>
          aprendiendo
        </button>
      </div>
  )
}

export default Button
