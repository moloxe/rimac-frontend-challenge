import { FC } from 'react'
import BackButtonIcon from '@/assets/images/icons/back-button.svg'
import './index.scss'

type Props = {
  className?: string
  onClick: () => void
}

const BackButton: FC<Props> = ({ onClick, className }) => {
  return (
    <button className={`back-button ${className ?? ''}`} onClick={onClick}>
      <img src={BackButtonIcon} />
      <p>Volver</p>
    </button>
  )
}

export default BackButton
