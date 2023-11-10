import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file for styling

function Navigation() {
	return (
		<>
			<nav className='navbar'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<Link
							to='/Search'
							// className={
							// 	location.pathname === '/Search' ? 'active' : ''
							// }
						>
							Search
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/Update'
							// className={
							// 	location.pathname === '/Update' ? 'active' : ''
							// }
						>
							Update
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/MoreInfo'
							// className={
							// 	location.pathname === '/MoreInfo'
							// 		? 'active'
							// 		: ''
							// }
						>
							More Info
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
