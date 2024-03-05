export interface IStudy {
  title: string
  description: string
  images: string[]
  typeContent: contentType
}

export type contentType = 'studies' | 'training' | 'extra' | 'expectations'
