import { expect, test } from 'vitest'
import { dateDDMMYYYYToAge } from './dates'

test('utils/dates: Get age', () => {
  const birthDateDDMMYYYY = '01/01/2000'
  const today = new Date('2020-01-02')
  const expectedAge = 20
  const age = dateDDMMYYYYToAge(birthDateDDMMYYYY, today)
  expect(age).toBe(expectedAge)
})
