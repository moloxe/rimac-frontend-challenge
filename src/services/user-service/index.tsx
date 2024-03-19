import { UserData, UserFormData } from '@/types/user-data'
import { BASE_URL } from '../endpoints'
import { UserResponse } from './types'
import UserMapper from './mapper'

const UserService = {
  async getUser(userFormData: UserFormData): Promise<UserData> {
    const res = await fetch(`${BASE_URL}/user.json`)
    if (!res.ok) throw new Error('Error fetching user')
    const userResponse = (await res.json()) as UserResponse
    const userData = UserMapper.toClient(userFormData, userResponse)
    return userData
  },
}

export default UserService
