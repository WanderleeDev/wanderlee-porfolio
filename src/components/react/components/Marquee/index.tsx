import './Marquee.scss'
import type { IMarqueeData } from '../../../../interfaces/ITechnology.interface'

interface Props {
  valueMarquee: IMarqueeData
  numbersMarquee?: number
  isReverseScroll: boolean
}

const Marquee = ({ valueMarquee: { color, name }, numbersMarquee, isReverseScroll }: Props): JSX.Element => {
  const valuesMarquee = Array<string>(10).fill(name)
  const marquees: string[] = Array(numbersMarquee ?? 3).fill('')
  return (
    <div className="marquee" style={{ color }}>
      {
        marquees.map((_, index) => (
          <div className={`marquee-content scroll ${isReverseScroll ? 'reverse' : ''}`} role="marquee" key={index}>
            {valuesMarquee.map((value, i) => <span key={index + i} className="marquee-content-item">{value}</span>)}
          </div>
        ))
      }
    </div>
  )
}

export default Marquee
