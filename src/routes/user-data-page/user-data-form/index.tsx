import FamilyImage from '@/assets/images/user-data-page/family.png'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import useStore from '@/hooks/use-store'
import UserService from '@/services/user-service'
import { useState } from 'react'
import LoadingAnimation from '@/components/loading-animation'
import './index.scss'

const UserDataForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { setUserData } = useStore()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const documentType = formData.get('document-type') as string
    const documentNumber = formData.get('document-number') as string
    const phoneNumber = formData.get('phone-number') as string
    const userFormData = {
      document: {
        type: documentType,
        number: documentNumber,
      },
      phoneNumber,
    }

    try {
      const userData = await UserService.getUser(userFormData)
      setUserData(userData)
    } catch {
      setErrorMessage('Error al obtener los datos del usuario.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="user-data-form">
      <div className="user-data-form__hero">
        <img className="user-data-form__hero__image" src={FamilyImage} />
      </div>
      <div className="user-data-form__container">
        <div className="user-data-form__container__info">
          <div className="user-data-form__container__info__intro">
            <div className="user-data-form__container__info__intro__chip">
              Seguro Salud Flexible
            </div>
            <h1 className="user-data-form__container__info__intro__title">
              Creado para ti y tu familia
            </h1>
            <img
              className="user-data-form__container__info__intro__image"
              src={FamilyImage}
            />
          </div>
          <div className="user-data-form__container__info__mobile-spacer" />
          <p className="user-data-form__container__info__message">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
        </div>
        <form className="user-data-form__container__form" onSubmit={onSubmit}>
          <div className="user-data-form__container__form__fields">
            <div className="user-data-form__container__form__fields__document">
              <label className="user-data-form__container__form__fields__document--type">
                <select
                  required
                  className="user-data-form__container__form__fields__document--type--dropdown"
                  name="document-type"
                >
                  <option value="DNI">DNI</option>
                  <option value="PASSPORT">Pasaporte</option>
                </select>
                <img
                  className="user-data-form__container__form__fields__document--type--icon"
                  src={ArrowDown}
                />
              </label>
              <label className="user-data-form__container__form__fields__document--number">
                <p className="user-data-form__container__form__fields__document--number--label">
                  Nro. de documento
                </p>
                <input
                  required
                  type="text"
                  minLength={8}
                  maxLength={16}
                  pattern="[0-9]*"
                  placeholder="..."
                  className="user-data-form__container__form__fields__document--number--input"
                  name="document-number"
                />
              </label>
            </div>
            <label className="user-data-form__container__form__fields__phone">
              <p className="user-data-form__container__form__fields__phone--label">
                Celular
              </p>
              <input
                pattern="[+0-9]*"
                className="user-data-form__container__form__fields__phone--input"
                minLength={9}
                placeholder="..."
                type="tel"
                name="phone-number"
              />
            </label>
          </div>
          <div className="user-data-form__container__form__conditions">
            <label>
              <input
                required
                className="user-data-form__container__form__conditions--checkbox"
                type="checkbox"
              />
              Acepto la Política de Privacidad
            </label>
            <label>
              <input
                required
                className="user-data-form__container__form__conditions--checkbox"
                type="checkbox"
              />
              Acepto la Política de Comunicaciones Comerciales
            </label>
            <a
              className="user-data-form__container__form__conditions--terms"
              href="/#"
            >
              Aplican Términos y Condiciones.
            </a>
          </div>
          {errorMessage && <p>Error: {errorMessage}</p>}
          {isLoading && <LoadingAnimation />}
          {!isLoading && (
            <button
              className="user-data-form__container__form__submit-button"
              type="submit"
            >
              Cotiza aquí
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default UserDataForm
