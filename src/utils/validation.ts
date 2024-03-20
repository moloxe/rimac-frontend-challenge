import { KeyboardEvent } from 'react'

export function validateTextInput(event: KeyboardEvent) {
  const key = event.key
  const isLetterRegex = /[a-zA-Z]/
  if (isLetterRegex.test(key) && key.length === 1) {
    event.preventDefault()
  }
}
