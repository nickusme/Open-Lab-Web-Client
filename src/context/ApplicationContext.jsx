import React, { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

const ApplicationContextProvider = ({ children }) => {
	const [items, setItems] = useState([
		{ value: 'Printable Vinyl' },
		{ value: 'Super Glue' },
		{ value: 'Arduinos' },
		{ value: 'Scissors' },
	]);
	const [locations, setLocations] = useState([
		{
			label: 'Drawer 1',
			value: '1',
			description: 'This is a description',
		},
	]);

	const updateItems = (newValues) => {
		setItems(newValues);
	};

	const updateLocations = (newValues) => {
		setLocations(newValues);
	};

	const getItemsAndLocations = () => {
		//TODO: fetch items and locations from webserver
	};

	const getLocationForItem = (itemName) => {
		//TODO: fetch location for item from webserver
	};

	const updateLocationForItem = (itemName, location) => {
		//TODO: update location for item through webserver
	};

	return (
		<ApplicationContext.Provider
			value={{
				items,
				locations,
				updateItems,
				updateLocations,
				getItemsAndLocations,
				getLocationForItem,
				updateLocationForItem,
			}}>
			{children}
		</ApplicationContext.Provider>
	);
};

const useApplicationContext = () => {
	return useContext(ApplicationContext);
};

export {
	ApplicationContext,
	ApplicationContextProvider,
	useApplicationContext,
};
