import { StoreData } from '@/types/store-data'
import { UserData } from '@/types/user-data'
import { createContext, FC, JSX, useEffect, useState } from 'react'

const STORE_DATA_KEY = 'store-data'

const getLocalStoreData = (): StoreData => {
  const storeData: StoreData = JSON.parse(
    localStorage.getItem(STORE_DATA_KEY) ?? '{}'
  )
  return storeData
}

const setLocalStoreData = (storeData: StoreData) => {
  localStorage.setItem(STORE_DATA_KEY, JSON.stringify(storeData))
}

type StoreContextProps = {
  userData?: UserData
  setUserData: (data: UserData) => void
}

export const StoreContext = createContext<StoreContextProps>({
  setUserData: () => {},
})

const StoreProvider: FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | undefined>(undefined)

  useEffect(() => {
    const { userData } = getLocalStoreData()
    if (userData) setUserData(userData)
  }, [])

  useEffect(() => {
    const storeData = getLocalStoreData()
    setLocalStoreData({ ...storeData, userData })
  }, [userData])

  return (
    <StoreContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
