import Step from './step'
import StepSeparator from '@/assets/images/plan-steps-page/step-separator.svg'
import { FC } from 'react'
import './index.scss'

type Props = {
  isFinished: boolean
}

const PlanStepsProgress: FC<Props> = ({ isFinished }) => {
  return (
    <div className="plan-steps-progress">
      <Step step="1" title="Planes y coberturas" active={!isFinished} />
      <img src={StepSeparator} />
      <Step step="2" title="Resumen" active={isFinished} />
    </div>
  )
}

export default PlanStepsProgress
