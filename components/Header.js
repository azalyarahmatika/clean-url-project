import component from '../styles/components/header.module.scss'
import jumbotron from '../images/illustration-working.svg';
import Image from 'next/image';

function Header() {
  return (
    <div className={component.header}>
      <div className={component.header_slogan}>
        <h1>More than just shorter links</h1>
        <p>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
      </div>
      <div className={component.header_jumbotron}>
        <Image
          src={jumbotron}
          height={30}
          alt="Shortly Logo"
        />
      </div>
    </div>
  );
}
 
export default Header;