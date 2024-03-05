import TechProvider from '../../context/TechProvider'
import Button from '../Button'
import GalleryTech from '../GalleryTech/GalleryTech'

const Technologies = (): JSX.Element => {
  return (
    <TechProvider>
      <Button />
      <GalleryTech />
    </TechProvider>
  )
}

export default Technologies
