export const dateDDMMYYYYToAge = (date: string): number => {
  const today = new Date()
  const [dayStr, monthStr, yearStr] = date.split('-')
  const birthDate = new Date(`${yearStr}-${monthStr}-${dayStr}`)
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
