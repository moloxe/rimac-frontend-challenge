export type UserFormData = {
  document: {
    type: string
    number: string
  }
  phoneNumber: string
}

export type UserData = UserFormData & {
  name: string
  lastName: string
  birthDay: string
}
