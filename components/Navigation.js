import component from '../styles/components/navigation.module.scss'
import logo from '../images/logo.svg';
import Image from 'next/image';
import BurgerMenu from '../images/icon-burger.svg';
import { useState } from 'react';

function Navigation() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = async (event) => {
    event.preventDefault();
    setToggle(!isToggled);
    console.log(isToggled)
  }
  const navClass = isToggled ? `${component.nav_toggle}` : `${component.nav_none}`;

  return (
    <>
      <nav className={component.nav}>
        <div className={component.nav_menu}>
        <div className={component.nav_small}>
          <Image
            src={BurgerMenu}
            height={30}
            alt="Menu"
            onClick={handleToggle}
          />
        </div>
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

      <nav className={navClass}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <hr></hr>
        <ul>
          <li>Login</li>
          <li className={component.nav_auth_signUp}>Sign Up</li>
        </ul>
      </nav>
    </>
    
  );
}
 
export default Navigation;