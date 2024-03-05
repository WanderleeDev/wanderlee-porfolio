import { useState } from 'react'
import type { ILocalStorage } from '../interfaces/ILocalStorage.interface' 

const useLocalStorage = <T>(): ILocalStorage<T> => {
  const [localData, setLocalData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const emptyErrorMessage = 'La key bno debe ser un espacio en blanco o una cadena vacía'
  const missingDataMessage = 'la solicitada no existe en el localStorage'

  const setLocalStorage = (data: T, key: string): void => {
    if (!data) {
      setError('La data es indefinida o nula')
      return
    }

    localStorage.setItem(key, JSON.stringify(data))
  }

  const getLocalStorage = (key: string): void => {
    if (!key.trim()) {
      setError(emptyErrorMessage)
      setLocalData(null)
      return
    }

    try {
      const backUp = localStorage.getItem(key)
      if (!backUp) {
        setError(missingDataMessage)
        return
      }
      setLocalData(JSON.parse(backUp) as T)
    } catch (e) {
      (e instanceof Error)
        ? setError(e.message)
        : setError('Error desconocido')

      setLocalData(null)
    }
  }

  const clearLocalStorage = (key: string): void => {
    if (!key) return
    localStorage.removeItem(key)
  }

  return {
    setLocalStorage,
    getLocalStorage,
    clearLocalStorage,
    localData,
    error
  }
}

export default useLocalStorage
