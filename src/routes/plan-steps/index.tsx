import Header from '@/components/header'
import PlanStepsProgress from './plan-steps-progress'
import { useState } from 'react'

type PlanFor = 'for-me' | 'for-my-family' | 'deselected'

const PlanStepsPage = () => {
  const [planFor, setPlanFor] = useState<PlanFor>('deselected')
  const isPlanChosen = planFor !== 'deselected'

  return (
    <div className="plan-stepts-page">
      <Header />
      <PlanStepsProgress isPlanChosen={isPlanChosen} />
    </div>
  )
}

export default PlanStepsPage
