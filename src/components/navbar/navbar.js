import { React, useState, useEffect } from 'react'
import logo from '../../asset/logo.jpg';
import LogoWhite from '../../asset/logo-white.png';
import Burger from '../../asset/burger.svg'
import './navbar.scss'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);
  return (
    <div>
      <section className={scroll ? "fixed" : "no-fixed"}>
        <div className='container'>
          <div className='navbar'>
            <div className='box-navigation'>
              <img src={logo} className="App-logo" alt="logo" />
              <div className='burger'
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded)
                }}
              >
                <img src={Burger} className="burger" alt="logo" />
              </div>
              <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <div className='logo-mobile'>
                  <img src={LogoWhite} className="logo-image-mobile" alt="logo" />
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
