import React, { useState } from 'react';
import { useApplicationContext } from '../../context/ApplicationContext.jsx';
import OLHeader from '../OLHeader/OLHeader.jsx';
import Introduction from '../Introduction/Introduction.jsx';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import './Search.css';

function Search() {
	const { items } = useApplicationContext();
	const [data, setData] = useState();
	const [value, setValue] = React.useState('');

	// fetch('http://127.0.0.1:8080/getItems')
	// 	.then((response) => {
	// 		if (!response.ok) {
	// 			throw new Error('Network response was not ok');
	// 		}
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		// Handle the response data
	// 		setItems(JSON.stringify(data));
	// 	})
	// 	.catch((error) => {
	// 		// Handle any errors
	// 		console.error('Error:', error);
	// 	});

	const handleSearch = () => {
		fetch('http://127.0.0.1:8080/location/<item_name>')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				// Handle the response data
				setData(JSON.stringify(data));
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	};

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
			<button onClick={handleSearch}>Test Button</button>
			<p>{data}</p>
		</>
	);
}

export default Search;
