import { PlanResponse } from './types'
import { Plan } from '@/types/plan'

const PlanMapper = {
  toClientFilterByAge(planResponse: PlanResponse, age: number): Plan[] {
    return planResponse.list.filter((plan) => age <= plan.age)
  },
}

export default PlanMapper
