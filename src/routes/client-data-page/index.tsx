import BlurAssetLeft from '@/assets/images/client-data-page/blur-asset-left.svg'
import BlirAssetRight from '@/assets/images/client-data-page/blur-asset-right.svg'
import BlurAssetLeftMobile from '@/assets/images/client-data-page/blur-asset-left-mobile.svg'
import BlirAssetRightMobile from '@/assets/images/client-data-page/blur-asset-right-mobile.svg'
import Header from '@/components/header'
import ClientDataForm from './client-data-form'
import FooterLogo from '@/assets/images/client-data-page/footer-logo.svg'
import FooterLogoMobile from '@/assets/images/client-data-page/footer-logo-mobile.svg'
import './index.scss'

const ClientDataPage = () => {
  return (
    <div className="client-data-page">
      <div className="client-data-page__content">
        <div className="client-data-page__content__background">
          <img
            className="client-data-page__content__background__blur-asset-left"
            src={BlurAssetLeft}
          />
          <img
            className="client-data-page__content__background__blur-asset-right"
            src={BlirAssetRight}
          />
          <img
            className="client-data-page__content__background__blur-asset-left__mobile"
            src={BlurAssetLeftMobile}
          />
          <img
            className="client-data-page__content__background__blur-asset-right__mobile"
            src={BlirAssetRightMobile}
          />
        </div>
        <Header />
        <ClientDataForm />
      </div>
      <footer className="client-data-page__footer">
        <div className="client-data-page__footer__content">
          <img
            className="client-data-page__footer__content__logo"
            src={FooterLogo}
          />
          <img
            className="client-data-page__footer__content__logo__mobile"
            src={FooterLogoMobile}
          />
          <div className="client-data-page__footer__content__vertical-separator" />
          <p className="client-data-page__footer__content__copyright">
            © 2023 RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ClientDataPage
