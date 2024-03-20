import { Plan } from '@/types/plan'
import { DISCOUNT_FOR_SOMEONE_ELSE } from './constants/plan-prices'

export function processPlanPrice(plan: Plan, isPlanForSomeoneElse: boolean) {
  let price = plan.price
  if (isPlanForSomeoneElse) {
    price = price - price * DISCOUNT_FOR_SOMEONE_ELSE
    return price.toFixed(2)
  }
  return price
}
