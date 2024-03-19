import { useEffect, useState } from 'react'

const LoadingAnimation = () => {
  const [messange, setMessange] = useState('Cargando')

  useEffect(() => {
    const interval = setInterval(() => {
      setMessange((prev) => {
        if (prev === 'Cargando...') {
          return 'Cargando'
        }
        return prev + '.'
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return <p>{messange}</p>
}

export default LoadingAnimation
