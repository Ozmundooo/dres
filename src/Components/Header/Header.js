import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/images/WhiteLogoDre.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';


function Header(props) {
	function showSettings(event) {
		event.preventDefault();
	}

	return (
		<>
			<Sidebar />
			<header className='header'>
				<nav className='header__nav'>
					<Link to='/' className='header__link--logo'>
						<img className='header__logo' src={logo} alt="" />
					</Link>
					<div className='header__container'>
						
						<Link to='/about' className='header__link'>About Us</Link>
						<Link to='/specialtyservices' className='header__link'>Specialty Services</Link>
						<Link to='/inshopservices' className='header__link'>In Shop Services</Link> 
						<Link to='/contact' className='header__link'>Contact Us</Link> 
					</div>
				</nav>
				<Link className='header__buttonbox' to='/contact'>
					<button className='header__button'>BOOK APPOINTMENT</button>
				</Link>
			</header>
		</>
	);
}

export default Header;
