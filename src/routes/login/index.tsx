import BlurAssetLeft from '@/assets/images/login/blur-asset-left.svg'
import BlirAssetRight from '@/assets/images/login/blur-asset-right.svg'
import BlurAssetLeftMobile from '@/assets/images/login/blur-asset-left-mobile.svg'
import BlirAssetRightMobile from '@/assets/images/login/blur-asset-right-mobile.svg'
import Header from '@/components/header/index'
import FooterLogo from '@/assets/images/login/footer-logo.svg'
import FooterLogoMobile from '@/assets/images/login/footer-logo-mobile.svg'
import './index.scss'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__content">
        <div className="login-page__content__background">
          <img
            className="login-page__content__background__blur-asset-left"
            src={BlurAssetLeft}
          />
          <img
            className="login-page__content__background__blur-asset-right"
            src={BlirAssetRight}
          />
          <img
            className="login-page__content__background__blur-asset-left__mobile"
            src={BlurAssetLeftMobile}
          />
          <img
            className="login-page__content__background__blur-asset-right__mobile"
            src={BlirAssetRightMobile}
          />
        </div>
        <Header />
        <div className="login-page__content__form-container">Hola!</div>
      </div>
      <footer className="login-page__footer">
        <div className="login-page__footer__content">
          <img className="login-page__footer__content__logo" src={FooterLogo} />
          <img
            className="login-page__footer__content__logo__mobile"
            src={FooterLogoMobile}
          />
          <div className="login-page__footer__content__vertical-separator" />
          <p className="login-page__footer__content__copyright">
            © 2023 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage
