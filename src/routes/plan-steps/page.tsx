import Header from '@/components/header'
import PlanStepsProgress from './plan-steps-progress'
import { useState } from 'react'
import Plans from './plans'
import useStore from '@/hooks/use-store'
import PlanForOption from './plan-for-option'
import ForMeImage from '@/assets/images/plan-steps-page/for-me.svg'
import ForSomeoneElseImage from '@/assets/images/plan-steps-page/for-someone-else.svg'
import Summary from './summary'
import BackButton from '@/components/back-button'
import './page.scss'

type PlanFor = 'deselected' | 'for-me' | 'for-someone-else'

const PlanStepsPage = () => {
  const [planFor, setPlanFor] = useState<PlanFor>('deselected')
  const isPlanForChosen = planFor !== 'deselected'
  const isPlanForSomeoneElse = planFor === 'for-someone-else'
  const { userData, setUserData, chosenPlan } = useStore()
  const isFinished = chosenPlan !== null

  function onChangePlanFor(newPlanFor: PlanFor) {
    if (newPlanFor === planFor) setPlanFor('deselected')
    else setPlanFor(newPlanFor)
  }

  function backToUserDataForm() {
    setUserData(null)
  }

  return (
    <div className="plan-steps-page">
      <Header />
      <PlanStepsProgress isFinished={isFinished} />
      {!isFinished && (
        <div className="plan-steps-page__plan-for">
          <BackButton
            className="plan-steps-page__plan-for__back-button"
            onClick={backToUserDataForm}
          />
          <div className="plan-steps-page__plan-for__description">
            <h1 className="plan-steps-page__plan-for__description--title">
              {userData?.name} ¿Para quién deseas cotizar?
            </h1>
            <p className="plan-steps-page__plan-for__description--subtitle">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>
          <div className="plan-steps-page__plan-for__options">
            <PlanForOption
              active={planFor === 'for-me'}
              title="Para mi"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              imageSrc={ForMeImage}
              onClick={() => onChangePlanFor('for-me')}
            />
            <PlanForOption
              active={planFor === 'for-someone-else'}
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
              imageSrc={ForSomeoneElseImage}
              onClick={() => onChangePlanFor('for-someone-else')}
            />
          </div>
        </div>
      )}
      {!isFinished && isPlanForChosen && (
        <Plans isPlanForSomeoneElse={isPlanForSomeoneElse} />
      )}
      {isFinished && <Summary isPlanForSomeoneElse={isPlanForSomeoneElse} />}
    </div>
  )
}

export default PlanStepsPage
