export interface IProject {
  title: string;
  links: IRoutes;
  deploy: string;
  description: string;
  image: string;
  technologies: string[];
  concepts: string[];
}

export interface IRoutes {
  code: string;
  demo: string;
}
