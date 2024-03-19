import { UserData, UserFormData } from '@/types/user-data'
import { UserResponse } from './types'

const UserMapper = {
  toClient(userFormData: UserFormData, remoteUserData: UserResponse): UserData {
    return {
      ...userFormData,
      ...remoteUserData,
    }
  },
}

export default UserMapper
