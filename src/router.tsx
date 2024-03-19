import UserDataPage from '@/routes/user-data-page'
import useStore from './hooks/use-store'
import PlanStepsPage from './routes/plan-steps'

const Router = () => {
  const { userData } = useStore()
  if (!userData) return <UserDataPage />
  return <PlanStepsPage />
}

export default Router
