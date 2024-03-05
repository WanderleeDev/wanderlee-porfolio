export interface ILocalStorage<T> {
  setLocalStorage: (data: T, key: string) => void
  getLocalStorage: (key: string) => void
  clearLocalStorage: (key: string) => void
  localData: T | null
  error: string | null
}
