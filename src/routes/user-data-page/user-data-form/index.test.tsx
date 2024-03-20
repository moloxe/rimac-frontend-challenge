import { expect, test } from 'vitest'
import UserDataForm from './index'
import { Browser } from 'happy-dom'
import { renderToString } from 'react-dom/server'
import { UserFormData } from '@/types/user-data'

const userFormData: UserFormData = {
  document: {
    type: 'DNI',
    number: '12345678',
  },
  phoneNumber: '123456789',
}

const browser = new Browser()
const page = browser.newPage()

function getField<Type>(name: string) {
  return page.mainFrame.document.querySelector(`[name="${name}"]`) as Type
}

test('routes/user-data-page/user-data-form: Fill form', async () => {
  page.content = renderToString(<UserDataForm />)

  const documentType = getField<HTMLInputElement>('document-type')
  const documentNumber = getField<HTMLInputElement>('document-number')
  const phoneNumber = getField<HTMLInputElement>('phone-number')
  const privacyPolicy = getField<HTMLInputElement>('privacy-policy')
  const commercialCommunications = getField<HTMLInputElement>(
    'commercial-communications'
  )

  documentType.value = userFormData.document.type
  documentNumber.value = userFormData.document.number
  phoneNumber.value = userFormData.phoneNumber
  privacyPolicy.checked = true
  commercialCommunications.checked = true

  expect(documentType.value).toBe(userFormData.document.type)
  expect(documentNumber.value).toBe(userFormData.document.number)
  expect(phoneNumber.value).toBe(userFormData.phoneNumber)
  expect(privacyPolicy.checked).toBe(true)
  expect(commercialCommunications.checked).toBe(true)
})

test('routes/user-data-page/user-data-form: Required fields', async () => {
  page.content = renderToString(<UserDataForm />)

  const documentType = getField<HTMLInputElement>('document-type')
  const documentNumber = getField<HTMLInputElement>('document-number')
  const phoneNumber = getField<HTMLInputElement>('phone-number')
  const privacyPolicy = getField<HTMLInputElement>('privacy-policy')
  const commercialCommunications = getField<HTMLInputElement>(
    'commercial-communications'
  )

  expect(documentType.required).toBe(true)
  expect(documentNumber.required).toBe(true)
  expect(phoneNumber.required).toBe(true)
  expect(privacyPolicy.required).toBe(true)
  expect(commercialCommunications.required).toBe(true)
})
