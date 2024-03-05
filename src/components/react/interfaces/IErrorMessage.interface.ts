export interface IErrorMessages {
  required: string
  minLength: (n: number) => string
  maxLength: (n: number) => string
}
