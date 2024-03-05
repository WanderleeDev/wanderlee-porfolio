export interface ITechnology {
  svg: string
  color: string
  name: string
}

export interface ITechGalleryData {
  tech: ITechnology[]
  title: string
}

export interface IMarqueeData extends Omit<ITechnology, 'svg'> { }
