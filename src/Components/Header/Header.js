import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/images/logo_dre.svg';
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
						<Link to='/' className='header__link'>Home</Link>
						<Link to='/about' className='header__link'>About Us</Link>
						<DropdownButton
							id="dropdown-basic-button"
							title="Services"
							className='headerdropdown'
						>
						  <Dropdown.Item><Link to='/specialtyservices' className='header__link header__link--dropdown'>Specialty Services</Link></Dropdown.Item>
						  <Dropdown.Item><Link to='/inshopservices' className='header__link header__link--dropdown'>In Shop Services</Link></Dropdown.Item>
						</DropdownButton>
						{/* <Link to='/ontario' className='header__link'>Membership</Link> */}
						
					</div>
				</nav>
				{/* <a className='header__buttonbox' href="" target="_blank">
					<button className='header__button'>JOIN MEMBERSHIP</button>
				</a> */}
			</header>
		</>
	);
}

export default Header;
