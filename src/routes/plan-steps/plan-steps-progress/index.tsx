import Step from './step'
import StepSeparator from '@/assets/images/plan-steps-page/step-separator.svg'
import { FC } from 'react'
import './index.scss'

type Props = {
  isPlanChosen: boolean
}

const PlanStepsProgress: FC<Props> = ({ isPlanChosen }) => {
  return (
    <div className="plan-steps-progress">
      <Step step="1" title="Planes y coberturas" active={!isPlanChosen} />
      <img src={StepSeparator} />
      <Step step="2" title="Resumen" active={isPlanChosen} />
    </div>
  )
}

export default PlanStepsProgress
