import type { IStudy } from "../interfaces/IStudy.interface" 

export const studies: IStudy[] = [
  {
    title: 'Estudios',
    description: 'Mis estudios realizados en programación',
    images: ['https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1', 'https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1'],
    typeContent: 'studies'
  },
  {
    title: 'Capacitaciones',
    description: 'Mis capacitaciones mas recientes, mantenerse actualizado es importante pero nunca se debe olvidar las bases.',
    images: ['https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1', 'https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1', 'https://www.dropbox.com/scl/fi/4m35mktvnb1voch8aw6wr/Certificado-Curso-de-signals-en-Angular.webp?rlkey=u8w6jddjlr9sibkup0kwy45gs&raw=1'],
    typeContent: 'training'

  },
  {
    title: 'Expectativas',
    description: '',
    typeContent: 'expectations',
    images: []
  },
  {
    title: 'extra',
    description: 'Resumen de mi primer año aprendiendo programación. Generado por #GitHubUnwrapped que brinda un video personalizado de mi actividad en GitHub 2023.',
    typeContent: 'extra',
    images: []
  }
]
