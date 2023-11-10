import './OLHeader.css';
import OpenLabPNG from '../../assets/openlab-new-neon-header2.png';
import { Link } from 'react-router-dom';
import React from 'react';

function OLHeader() {
	return (
		<div className='header'>
			<Link to='/'>
				<img src={OpenLabPNG} alt='Open Lab' />
			</Link>
		</div>
	);
}

export default OLHeader;
