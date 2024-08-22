export interface IProject {
  title: string
  links: IRoutes
  deploy: string
  description: string
  image: string
  technologies: string[]
}

export interface IRoutes {
  code: string
  demo: string
}
