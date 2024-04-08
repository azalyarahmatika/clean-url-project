import component from '../styles/components/navigation.module.scss'
import logo from '../images/logo.svg';
import Image from 'next/image';

function Navigation() {
  return (
    <nav className={component.nav}>
      <div className={component.nav_menu}>
        <Image
          src={logo}
          height={30}
          alt="Shortly Logo"
        />
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
    
      <ul className={component.nav_auth}>
        <li>Login</li>
        <li className={component.nav_auth_signUp}>Sign Up</li>
      </ul>
    </nav>
  );
}
 
export default Navigation;