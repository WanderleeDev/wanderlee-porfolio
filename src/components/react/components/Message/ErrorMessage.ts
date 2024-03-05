import type { IErrorMessages } from '../../interfaces/IErrorMessage.interface'

export const errorMessage: IErrorMessages = {
  required: 'Campo requerido',
  minLength: (n: number) => `Mínimo de longitud permitida ${n}`,
  maxLength: (n: number) => `Máximo de longitud permitida ${n}`
}
