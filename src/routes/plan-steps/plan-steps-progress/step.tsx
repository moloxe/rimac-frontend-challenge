import { FC } from 'react'

type Props = {
  step: string
  title: string
  active: boolean
}

const Step: FC<Props> = ({ active, step, title }) => {
  return (
    <div className={`plan-steps-progress__step${active ? '-active' : ''}`}>
      <div
        className={`plan-steps-progress__step${active ? '-active' : ''}-number`}
      >
        {step}
      </div>
      <div
        className={`plan-steps-progress__step${active ? '-active' : ''}-title`}
      >
        {title}
      </div>
    </div>
  )
}

export default Step
