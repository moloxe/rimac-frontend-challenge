import { BASE_URL } from '../endpoints'
import PlanMapper from './mapper'
import { Plan } from '@/types/plan'
import { PlanResponse } from './types'

const PlanService = {
  async getPlansByAge(age: number): Promise<Plan[]> {
    const res = await fetch(`${BASE_URL}/plans.json`)
    if (!res.ok) throw new Error('Error fetching user')
    const planResponse = (await res.json()) as PlanResponse
    const plans = PlanMapper.toClientFilterByAge(planResponse, age)
    return plans
  },
}

export default PlanService
