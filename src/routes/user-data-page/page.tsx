import BlurAssetLeft from '@/assets/images/user-data-page/blur-asset-left.svg'
import BlirAssetRight from '@/assets/images/user-data-page/blur-asset-right.svg'
import BlurAssetLeftMobile from '@/assets/images/user-data-page/blur-asset-left-mobile.svg'
import BlirAssetRightMobile from '@/assets/images/user-data-page/blur-asset-right-mobile.svg'
import Header from '@/components/header'
import UserDataForm from './user-data-form'
import FooterLogo from '@/assets/images/user-data-page/footer-logo.svg'
import FooterLogoMobile from '@/assets/images/user-data-page/footer-logo-mobile.svg'
import './page.scss'

const UserDataPage = () => {
  return (
    <div className="user-data-page">
      <div className="user-data-page__content">
        <div className="user-data-page__content__background">
          <img
            className="user-data-page__content__background__blur-asset-left"
            src={BlurAssetLeft}
          />
          <img
            className="user-data-page__content__background__blur-asset-right"
            src={BlirAssetRight}
          />
          <img
            className="user-data-page__content__background__blur-asset-left__mobile"
            src={BlurAssetLeftMobile}
          />
          <img
            className="user-data-page__content__background__blur-asset-right__mobile"
            src={BlirAssetRightMobile}
          />
        </div>
        <Header />
        <UserDataForm />
      </div>
      <footer className="user-data-page__footer">
        <div className="user-data-page__footer__content">
          <img
            className="user-data-page__footer__content__logo"
            src={FooterLogo}
          />
          <img
            className="user-data-page__footer__content__logo__mobile"
            src={FooterLogoMobile}
          />
          <div className="user-data-page__footer__content__vertical-separator" />
          <p className="user-data-page__footer__content__copyright">
            © 2024 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default UserDataPage
