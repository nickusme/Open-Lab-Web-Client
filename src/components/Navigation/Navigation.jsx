import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file for styling

function Navigation() {
	return (
		<>
			<nav className='navbar'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<Link to='/Search'>Search</Link>
					</li>
					<li className='nav-item'>
						<Link to='/Update'>Update</Link>
					</li>
					<li className='nav-item'>
						<Link to='/MoreInfo'>More Info</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
