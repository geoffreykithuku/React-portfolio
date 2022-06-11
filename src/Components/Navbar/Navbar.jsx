import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Geoffrey</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link spy={true} to="intro" smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link spy={true} to="Services" smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link spy={true} to="Works" smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link spy={true} to="Portifolio" smooth={true}>
                Portifolio
              </Link>
            </li>
            <li>
              <Link spy={true} to="Testimonials" smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar
