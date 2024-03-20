import Card from '@/components/card'
import { FC } from 'react'
import CheckBoxActive from '@/assets/images/icons/checkbox-active.svg'
import CheckBoxDisabled from '@/assets/images/icons/checkbox-disabled.svg'

type Props = {
  active: boolean
  title: string
  description: string
  imageSrc: string
  onClick: () => void
}

const PlanForOption: FC<Props> = ({
  active,
  description,
  imageSrc,
  title,
  onClick,
}) => {
  return (
    <Card
      className={`
      plan-stepts-page__plan-for__options__card${active ? '-active' : ''}`}
      clickable
      onClick={onClick}
    >
      <img
        className="plan-stepts-page__plan-for__options__image"
        src={imageSrc}
      />
      <h2 className="plan-stepts-page__plan-for__options__title">{title}</h2>
      <p>{description}</p>
      <img
        className="plan-stepts-page__plan-for__options__checkbox"
        src={active ? CheckBoxActive : CheckBoxDisabled}
      />
    </Card>
  )
}

export default PlanForOption
