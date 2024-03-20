import { PlanResponse } from './types'
import { Plan } from '@/types/plan'

const PlanMapper = {
  toClient(planResponse: PlanResponse): Plan[] {
    return planResponse.list
  },
}

export default PlanMapper
