import React, { useState } from 'react';
import { useApplicationContext } from '../../context/ApplicationContext.jsx';
import OLHeader from '../OLHeader/OLHeader.jsx';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import './Search.css';

function Search() {
	const { items } = useApplicationContext();
	const [value, setValue] = React.useState('');

	const handleSearch = () => {};

	return (
		<>
			<OLHeader />
			<h1>Search for the location of random nonsense in the Open Lab!</h1>
			<div className='AutoSuggest'>
				<Autosuggest
					onChange={({ detail }) => setValue(detail.value)}
					value={value}
					options={items}
					ariaLabel='Autosuggest example with suggestions'
					placeholder='Enter value'
					empty='No matches found'
				/>
			</div>
		</>
	);
}

export default Search;
