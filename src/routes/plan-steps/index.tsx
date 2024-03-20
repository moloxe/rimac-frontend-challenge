import Header from '@/components/header'
import PlanStepsProgress from './plan-steps-progress'
import { useState } from 'react'
import Plans from './plans'
import useStore from '@/hooks/use-store'
import PlanForOption from './plan-for-option'
import ForMeImage from '@/assets/images/plan-steps-page/for-me.svg'
import ForSomeoneElseImage from '@/assets/images/plan-steps-page/for-someone-else.svg'
import './index.scss'

type PlanFor = 'deselected' | 'for-me' | 'for-someone-else'

const PlanStepsPage = () => {
  const [planFor, setPlanFor] = useState<PlanFor>('deselected')
  const isPlanChosen = planFor !== 'deselected'
  const { userData } = useStore()

  function onChangePlanFor(newPlanFor: PlanFor) {
    if (newPlanFor === planFor) setPlanFor('deselected')
    else setPlanFor(newPlanFor)
  }

  return (
    <div className="plan-stepts-page">
      <Header />
      <PlanStepsProgress isPlanChosen={isPlanChosen} />
      <div className="plan-stepts-page__plan-for">
        <div className="plan-stepts-page__plan-for__description">
          <h1 className="plan-stepts-page__plan-for__description--title">
            {userData?.name} ¿Para quién deseas cotizar?
          </h1>
          <p className="plan-stepts-page__plan-for__description--subtitle">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        <div className="plan-stepts-page__plan-for__options">
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
      {isPlanChosen && (
        <Plans isForSomeoneElse={planFor === 'for-someone-else'} />
      )}
    </div>
  )
}

export default PlanStepsPage
