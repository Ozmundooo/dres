import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import icnFb from '../../assets/icons/icn_fb.svg';
import icnIg from '../../assets/icons/icn_ig.svg';
import icnLinkedin from '../../assets/icons/icn_linkedin.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__navbox'>
        <nav className='footer__nav'>
          <div className='footer__navgroup'>
            <Link to='/about' className='footer__link'>About</Link>
            <Link to='/specialtyservices' className='footer__link'>Specialty Services</Link>
            <Link to='/inshopservices' className='footer__link'>In Shop Services</Link>
          </div>
          <div className='footer__navgroup footer__navgroup--tablet'>
            {/* <DropdownButton
              id="dropdown-basic-button"
              title="ONTARIO & FLORIDA"
              className='headerdropdown'
            >
              <Dropdown.Item href={`${ontarioURL}`}>ONTARIO</Dropdown.Item>
              <Dropdown.Item href={`${floridaURL}`}>FLORIDA</Dropdown.Item>
            </DropdownButton> */}
           
            <div className='footer__hiddensns'>
              <a
                className='footer__sns'
                href="#"
                target="_blank"
              >
                <img className='footer__snsimage' src={icnFb} alt="" />
              </a>
              <a
                className='footer__sns'
                href="#"
                target="_blank"
              >
                <img className='footer__snsimage' src={icnIg} alt="" />
              </a>
            </div>
          </div>
          <div className='footer__snsgroup'>
            <a
              className='footer__sns'
              href="#"
              target="_blank"
            >
              <img className='footer__snsimage' src={icnFb} alt="" />
            </a>
            <a
              className='footer__sns'
              href="#"
              target="_blank"
            >
              <img className='footer__snsimage' src={icnIg} alt="" />
            </a>
          </div>
        </nav>
      </div>
      <div className='footer__bar'>
        <p className='footer__bartext'>© 2022 by Dres Auto Detailing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;