import component from '../styles/components/footer.module.scss';
import Image from 'next/image';
import Logo from '../images/logo_footer.svg';
import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Instagram from '../images/icon-instagram.svg';
import FooterLinks from '../components/FooterLinks';

function Footer() {
  return (
    <div className={component.footer}>
      <Image
          className={component.footer_logo}
          src={Logo}
          height={30}
          alt="Shortly Logo"
      />
      <FooterLinks />
      <div className={component.footer_contact}>
        <Image
          src={Facebook}
          height={30}
          alt="Facebook"
        />
        <Image
          src={Twitter}
          height={30}
          alt="Twitter"
        />
        <Image
          src={Pinterest}
          height={30}
          alt="Pinterest"
        />
        <Image
          src={Instagram}
          height={30}
          alt="Instagram"
        />
        
      </div>
    </div>
  );
}
 
export default Footer;