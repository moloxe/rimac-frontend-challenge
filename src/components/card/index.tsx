import { FC } from 'react'
import './index.scss'

type Props = {
  children: React.ReactNode
  className?: string
  clickable?: boolean
  onClick?: () => void
}

const Card: FC<Props> = ({
  children,
  className: _className,
  clickable,
  onClick,
}) => {
  const className = `card ${clickable ? 'card-clickable' : ''} ${
    _className ?? ''
  } `
  if (clickable) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    )
  }
  return <div className={className}>{children}</div>
}

export default Card
