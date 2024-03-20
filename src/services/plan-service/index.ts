import { BASE_URL } from '../endpoints'
import PlanMapper from './mapper'
import { Plan } from '@/types/plan'
import { PlanResponse } from './types'

const PlanService = {
  async getPlans(): Promise<Plan[]> {
    const res = await fetch(`${BASE_URL}/plans.json`)
    if (!res.ok) throw new Error('Error fetching user')
    const planResponse = (await res.json()) as PlanResponse
    return PlanMapper.toClient(planResponse)
  },
}

export default PlanService
