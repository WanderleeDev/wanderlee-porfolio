import './Form.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useEffect } from 'react'
import useManagerVideo from '../../../../hooks/useManagerVideo'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import eyeVideo from '../../../../assets/video/eye-Submit.webm'
//  Interfaces
import type { IFormData } from '../../interfaces/IFormData.interface' 
//  Components
import Message from '../Message'
//  Data
import { errorMessage } from '../Message/ErrorMessage'

const index = (): JSX.Element => {
  const {
    register,
    setValue,
    formState: { errors, isValid, isSubmitted },
    handleSubmit
  } = useForm<IFormData>()
  const { getLocalStorage, localData, setLocalStorage, clearLocalStorage } = useLocalStorage<IFormData>()
  const { handleVideo, videoRef } = useManagerVideo()

  const keyForm = 'myForm'
  const onSubmit: SubmitHandler<IFormData> = (data): void => {
    if (!isValid) return

    data.saveInLocalStorage
      ? setLocalStorage(data, keyForm)
      : clearLocalStorage(keyForm)

    handleVideo(0)
  }

  useEffect(() => {
    getLocalStorage(keyForm)
  }, [])

  useEffect(() => {
    if (localData) {
      const { name, message, saveInLocalStorage } = localData
      setValue('name', name)
      setValue('message', message)
      setValue('saveInLocalStorage', saveInLocalStorage)
    }
  }, [localData])

  return (
    <form
      className={`form u-min-shadow ${!isValid && isSubmitted ? 'u-danger-outset u-ani-shake' : ''}`}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-question">
        <input
          onFocus={() => { handleVideo(5) }}
          type="text"
          id="name"
          className="form-input"
          placeholder="Escribe el asusto aquí ..."
          {...register('name', {
            required: true,
            minLength: 3,
            maxLength: 50
          })}
        />
        {errors.name?.type === 'required' && <Message message={errorMessage.required} />}
        {errors.name?.type === 'minLength' && <Message message={errorMessage.minLength(3)} />}
        {errors.name?.type === 'maxLength' && <Message message={errorMessage.maxLength(50)} />}
      </div>

      <div className="form-question">
        <textarea
          onFocus={() => { handleVideo(5) }}
          className="form-input resize-none min-h-sm"
          id="message"
          placeholder="Tu mensaje aquí ..."
          {...register('message', {
            required: true,
            minLength: 10,
            maxLength: 200
          })}
        ></textarea>
        {errors.message?.type === 'required' && <Message message={errorMessage.required} />}
        {errors.message?.type === 'minLength' && <Message message={errorMessage.minLength(10)} />}
        {errors.message?.type === 'maxLength' && <Message message={errorMessage.maxLength(200)} />}
      </div>

      <div className="flex-row form-check">
        <input id="remember" type="checkbox" {...register('saveInLocalStorage')}/>
        <label htmlFor="remember" className="u-bold-600 u-text-white u-text-sm">Recordar datos</label>
      </div>

      <button type="submit" className="form-btnSubmit">Enviar mensaje</button>
      <video onMouseEnter={() => { handleVideo(5) }} className="eye" muted ref={videoRef}>
        <source type="video/webm" src={eyeVideo}/>
        Your browser does not support the video tag.
      </video>
    </form>
  )
}

export default index
