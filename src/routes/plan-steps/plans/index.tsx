import { FC, useEffect, useState } from 'react'
import { Plan } from '@/types/plan'
import PlanService from '@/services/plan-service'
import LoadingAnimation from '@/components/loading-animation'
import Card from '@/components/card'
import useStore from '@/hooks/use-store'
import { stringDateToAge } from '@/utils/dates'
import SaveHouse from '@/assets/images/icons/save-house.svg'
import Clinic from '@/assets/images/icons/clinic.svg'
import './plans.scss'
import { processPlanPrice } from '@/utils/plan-prices'

type Props = {
  isPlanForSomeoneElse: boolean
}

const Plans: FC<Props> = ({ isPlanForSomeoneElse }) => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const { userData, setChosenPlan } = useStore()

  function getImageSrc(plan: Plan) {
    if (plan.name === 'Plan en Casa') return SaveHouse
    if (plan.name === 'Plan en Casa y Clínica') return Clinic
    if (plan.name === 'Plan en Casa + Chequeo ') return SaveHouse
    return undefined
  }

  function onChoosePlan(plan: Plan) {
    setChosenPlan(plan)
  }

  useEffect(() => {
    async function loadPlanse() {
      setIsLoading(true)
      try {
        if (!userData?.birthDay)
          throw new Error('Fecha de nacimiento no disponible.')
        const age = stringDateToAge(userData.birthDay)
        const plans = await PlanService.getPlansByAge(age)
        setPlans(plans)
      } catch {
        setErrorMessage('Error al cargar los planes.')
      } finally {
        setIsLoading(false)
      }
    }
    loadPlanse()
  }, [userData])

  return (
    <div className="plans">
      <div className="plans__options">
        {errorMessage && <div>{errorMessage}</div>}
        {isLoading && <LoadingAnimation />}
        {plans.map((plan) => {
          const price = processPlanPrice(plan, isPlanForSomeoneElse)
          const imageSrc = getImageSrc(plan)
          const isRecommended = plan.name === 'Plan en Casa y Clínica'
          return (
            <Card key={plan.name} className="plans__options__plan">
              {isRecommended && (
                <p className="plans__options__plan--recommended">
                  Plan recomendado
                </p>
              )}
              <div className="plans__options__plan--top">
                <div className="plans__options__plan--top__left">
                  <h2 className="plans__options__plan--top__left--title">
                    {plan.name}
                  </h2>
                  <p className="plans__options__plan--top__left--price-message">
                    COSTO DEL PLAN
                  </p>
                  <h3 className="plans__options__plan--top__left--price">
                    ${price} al mes
                  </h3>
                </div>
                {imageSrc && <img src={imageSrc} alt={plan.name} />}
              </div>
              <div className="plans__options__plan--spacer" />
              <ul className="plans__options__plan--description">
                {plan.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
              <button
                className="plans__options__plan--select-button"
                onClick={() => onChoosePlan(plan)}
              >
                Seleccionar Plan
              </button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Plans
