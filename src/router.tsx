import ClientDataPage from '@/routes/client-data-page'
import useStore from './hooks/use-store'

const Router = () => {
  const { userData } = useStore()
  if (!userData) return <ClientDataPage />
}

export default Router
