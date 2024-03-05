import './Message.scss'
interface Props {
  message: string
}

const Message = ({ message }: Props): JSX.Element => {
  return (
    <p className="message">
      <span className='message-icon'>
        ⓘ
      </span>
      {message}
    </p>
  )
}

export default Message
