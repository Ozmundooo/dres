import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

function Sidebar() {
  return (
    <Menu right>
      <Link to='/' className='header__link'>Home</Link>
      <Link to='/about' className='header__link'>About Us</Link>
      <Link to='/specialtyservices' className='header__link'>Specialty Services</Link>
      <Link to='/inshopservices' className='header__link'>In Shop Services</Link>
      <Link to='/contact' className='header__link'>Contact Us</Link>
    </Menu>
  )
}

export default Sidebar;