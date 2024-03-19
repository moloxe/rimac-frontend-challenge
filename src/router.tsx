import UserDataPage from '@/routes/user-data-page'
import useStore from './hooks/use-store'

const Router = () => {
  const { userData } = useStore()
  if (!userData) return <UserDataPage />
}

export default Router
