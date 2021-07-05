import { BackToTop, INstagram, Telegram } from "../../assets/icons/base_icons"
import classes from "./Footer.module.scss"
import FaceBook from '../../assets/icons/facebook.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
const Footer = () => {
    return (
      <footer className={classes.Footer}>
        <a
          href="#home"
          rel="noreferrer"
          className={classes.BackToTop}
          data-aos="zoom-in-up"
        >
          <BackToTop />
          BACK TO TOP
        </a>
        <div className={classes.FooterLinkWrapper}>
          <a
            href="https://www.facebook.com/theAkbarov/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in-up"
          >
            <img src={FaceBook} alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/akbarov.dev"
            data-aos="zoom-in-up"
          >
            <INstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/theAkbarovDev"
            data-aos="zoom-in-up"
          >
            <Telegram />
          </a>
          <a
            href="https://www.linkedin.com/in/sardor-akbarov/"
            data-aos="zoom-in-up"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src={LinkedIn} />
          </a>
        </div>
        <p className={classes.FooterCopyRight}>
          @2021 Sardor Akbarov All Rights Reserved.
        </p>
      </footer>
    );
}

export default Footer
