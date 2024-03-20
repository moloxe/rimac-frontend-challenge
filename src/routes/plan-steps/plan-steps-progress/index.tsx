import Step from './step'
import StepSeparator from '@/assets/images/plan-steps-page/step-separator.svg'
import { FC } from 'react'
import BackButtonOpaque from '@/assets/images/icons/back-button-opaque.svg'
import useStore from '@/hooks/use-store'
import './index.scss'

type Props = {
  isFinished: boolean
}

const PlanStepsProgress: FC<Props> = ({ isFinished }) => {
  const currentStep = isFinished ? 2 : 1
  const { setChosenPlan, setUserData } = useStore()

  function backToFirstStep() {
    if (isFinished) setChosenPlan(null)
    else setUserData(null)
  }

  return (
    <>
      <div className="plan-steps-progress-mobile">
        <button
          onClick={backToFirstStep}
          className="plan-steps-progress-mobile--back-button"
        >
          <img src={BackButtonOpaque} />
        </button>
        <p className="plan-steps-progress-mobile--steps">
          Paso {currentStep} de 2
        </p>
        <div
          className={`plan-steps-progress-mobile--progress-bar${
            isFinished ? '-finished' : ''
          }`}
        />
      </div>
      <div className="plan-steps-progress">
        <Step step="1" title="Planes y coberturas" active={!isFinished} />
        <img src={StepSeparator} />
        <Step step="2" title="Resumen" active={isFinished} />
      </div>
    </>
  )
}

export default PlanStepsProgress
