import useStore from '@/hooks/use-store'
import { processPlanPrice } from '@/utils/plan-prices'
import { FC, useMemo } from 'react'
import Family from '@/assets/images/icons/family.svg'
import Card from '@/components/card'
import BackButton from '@/back-button'
import './index.scss'

type Props = {
  isPlanForSomeoneElse: boolean
}

const Summary: FC<Props> = ({ isPlanForSomeoneElse }) => {
  const { chosenPlan, userData, setChosenPlan } = useStore()
  const price = useMemo(() => {
    if (!chosenPlan) throw new Error('Plan no seleccionado.')
    return processPlanPrice(chosenPlan, isPlanForSomeoneElse)
  }, [chosenPlan, isPlanForSomeoneElse])

  function backToFirstStep() {
    setChosenPlan(null)
  }

  return (
    <div className="summary">
      <BackButton className="summary__back-button" onClick={backToFirstStep} />
      <h1 className="summary__title">Resumen del seguro</h1>
      <Card className="summary__card">
        <div className="summary__card__header">
          <p className="summary__card__header--message">
            PRECIOS CALCULADOS PARA:
          </p>
          <div className="summary__card__header--info">
            <img src={Family} />
            <p>
              {userData?.name} {userData?.lastName}
            </p>
          </div>
        </div>
        <div className="summary__card__spacer" />
        <div className="summary__card__details">
          <h2 className="summary__card__details--title">Responsable de pago</h2>
          <p>
            {userData?.document.type}: {userData?.document.number}
          </p>
          <p>Celular: {userData?.phoneNumber}</p>
        </div>
        <div className="summary__card__details-spacer" />
        <div className="summary__card__details">
          <h2 className="summary__card__details--title">Plan elegido</h2>
          <p>{chosenPlan?.name}</p>
          <p>Costo del Plan: ${price} al mes</p>
        </div>
      </Card>
    </div>
  )
}

export default Summary
