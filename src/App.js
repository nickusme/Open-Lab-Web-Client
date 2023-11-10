import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction/Introduction.jsx';
import Search from './components/Search/Search.jsx';
import Update from './components/Update/Update.jsx';
import MoreInfo from './components/MoreInfo/MoreInfo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import { ApplicationContextProvider } from './context/ApplicationContext.jsx';

function App() {
	return (
		<>
			<ApplicationContextProvider>
				<BrowserRouter>
					<Navigation />
					<Routes>
						<Route path='/' element={<Introduction />} />
						<Route path='/Search' element={<Search />} />
						<Route path='/MoreInfo' element={<MoreInfo />} />
						<Route path='/Update' element={<Update />} />
					</Routes>
				</BrowserRouter>
			</ApplicationContextProvider>
		</>
	);
}

export default App;
