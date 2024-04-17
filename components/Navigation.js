import component from '../styles/components/navigation.module.scss'
import logo from '../images/logo.svg';
import Image from 'next/image';
import BurgerMenu from '../images/icon-burger.svg';
import CloseNav from '../images/icon-close-nav.svg';
import { useState } from 'react';

function Navigation() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = async (event) => {
    event.preventDefault();
    setToggle(!isToggled);
  }
  const link_wrapper_class = isToggled ? `${component.nav_link_wrapper} ${component.nav_toggle} ` : `${component.nav_link_wrapper}`;

  return (
    <nav className={component.nav}>
      <Image
        src={logo}
        height={30}
        alt="Shortly Logo"
      />
          
      <div className={link_wrapper_class}>
        <ul id='link_menu'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>

        <ul>
          <li>Login</li>
          <li id='signUp'>Sign Up</li>
        </ul>
      </div>

      <div className={component.nav_small}>
        <Image
          src={isToggled ? CloseNav: BurgerMenu }
          height={30}
          alt="Menu"
          onClick={handleToggle}
        />
      </div>
    </nav>
  );
}
 
export default Navigation;