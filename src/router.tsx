import UserDataPage from '@/routes/user-data-page/page'
import PlanStepsPage from './routes/plan-steps/page'
import useStore from './hooks/use-store'

const Router = () => {
  const { userData } = useStore()
  if (!userData) return <UserDataPage />
  return <PlanStepsPage />
}

export default Router
