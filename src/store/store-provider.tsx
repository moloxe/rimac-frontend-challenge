import { UserData } from '@/types/user-data'
import { createContext, FC, JSX, useEffect, useState } from 'react'

const STORE_DATA_KEY = 'store-data'

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
    const storeData = localStorage.getItem(STORE_DATA_KEY)
    if (storeData) {
      const userData = JSON.parse(storeData) as UserData
      setUserData(userData)
    }
  }, [])

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
