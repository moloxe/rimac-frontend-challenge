import { expect, test } from 'vitest'
import { UserFormData } from '@/types/user-data'
import UserService from '.'

const userFormData: UserFormData = {
  document: {
    type: 'DNI',
    number: '12345678',
  },
  phoneNumber: '123456789',
}

test('services/user-service: Test environment should be for unique user', async () => {
  const userData = await UserService.getUser(userFormData)
  expect(userData).toBeTruthy()
  expect(userData.name).toBe('Rocío')
  expect(userFormData.document.number).toBe(userFormData.document.number)
})
