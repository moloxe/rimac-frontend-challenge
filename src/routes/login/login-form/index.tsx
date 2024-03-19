import FamilyImage from '@/assets/images/login/family.png'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import './index.scss'

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="login-form__hero">
        <img className="login-form__hero__image" src={FamilyImage} />
      </div>
      <div className="login-form__container">
        <div className="login-form__container__info">
          <div className="login-form__container__info__intro">
            <div className="login-form__container__info__intro__chip">
              Seguro Salud Flexible
            </div>
            <h1 className="login-form__container__info__intro__title">
              Creado para ti y tu familia
            </h1>
            <img
              className="login-form__container__info__intro__image"
              src={FamilyImage}
            />
          </div>
          <div className="login-form__container__info__mobile-spacer" />
          <p className="login-form__container__info__message">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
        </div>
        <form className="login-form__container__form">
          <div className="login-form__container__form__fields">
            <div className="login-form__container__form__fields__document">
              <label className="login-form__container__form__fields__document--type">
                <select className="login-form__container__form__fields__document--type--dropdown">
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
                </select>
                <img
                  className="login-form__container__form__fields__document--type--icon"
                  src={ArrowDown}
                />
              </label>
              <label className="login-form__container__form__fields__document--number">
                <p className="login-form__container__form__fields__document--number--label">
                  Nro. de documento
                </p>
                <input
                  type="text"
                  placeholder="..."
                  className="login-form__container__form__fields__document--number--input"
                />
              </label>
            </div>
            <label className="login-form__container__form__fields__phone">
              <p className="login-form__container__form__fields__phone--label">
                Celular
              </p>
              <input
                className="login-form__container__form__fields__phone--input"
                placeholder="..."
                type="tel"
              />
            </label>
          </div>
          <div className="login-form__container__form__conditions">
            <label>
              <input
                className="login-form__container__form__conditions--checkbox"
                type="checkbox"
              />
              Acepto la Política de Privacidad
            </label>
            <label>
              <input
                className="login-form__container__form__conditions--checkbox"
                type="checkbox"
              />
              Acepto la Política de Comunicaciones Comerciales
            </label>
            <a
              className="login-form__container__form__conditions--terms"
              href="/#"
            >
              Aplican Términos y Condiciones.
            </a>
          </div>
          <button className="login-form__container__form__submit" type="submit">
            Cotiza aquí
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
