import { StoreContext } from '@/store/store-provider'
import { useContext } from 'react'

const useStore = () => {
  const store = useContext(StoreContext)
  return store
}

export default useStore
