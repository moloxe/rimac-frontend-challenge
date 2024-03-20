export const dateDDMMYYYYToAge = (
  dateDDMMYYYY: string,
  today: Date = new Date()
): number => {
  const [dayStr, monthStr, yearStr] = dateDDMMYYYY.split('-')
  const birthDate = new Date(`${yearStr}-${monthStr}-${dayStr}`)
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}
