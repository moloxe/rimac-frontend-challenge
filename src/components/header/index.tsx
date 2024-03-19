import HeaderLogo from '@/assets/images/header-logo.svg'
import Phone from '@/assets/images/icons/phone.svg'
import './index.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__content__logo" src={HeaderLogo} />
        <div className="header__content__contact">
          <p className="header__content__contact__message">
            ¡Compra por este medio!
          </p>
          <a className="header__content__contact__phone" href="tel:014116001">
            <img
              className="header__content__contact__phone__icon"
              src={Phone}
            />
            <p>(01) 411 6001</p>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
