import FamilyImage from '@/assets/images/user-data-page/family.png'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import './index.scss'

const UserDataForm = () => {
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
        <form className="user-data-form__container__form">
          <div className="user-data-form__container__form__fields">
            <div className="user-data-form__container__form__fields__document">
              <label className="user-data-form__container__form__fields__document--type">
                <select className="user-data-form__container__form__fields__document--type--dropdown">
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
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
                  type="text"
                  placeholder="..."
                  className="user-data-form__container__form__fields__document--number--input"
                />
              </label>
            </div>
            <label className="user-data-form__container__form__fields__phone">
              <p className="user-data-form__container__form__fields__phone--label">
                Celular
              </p>
              <input
                className="user-data-form__container__form__fields__phone--input"
                placeholder="..."
                type="tel"
              />
            </label>
          </div>
          <div className="user-data-form__container__form__conditions">
            <label>
              <input
                className="user-data-form__container__form__conditions--checkbox"
                type="checkbox"
              />
              Acepto la Política de Privacidad
            </label>
            <label>
              <input
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
          <button
            className="user-data-form__container__form__submit"
            type="submit"
          >
            Cotiza aquí
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserDataForm
