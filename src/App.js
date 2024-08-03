import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as constants from './constants';

import SearchBar from './components/header';
import SideBar from './components/sidebar';
import FileExplorer from './components/explorer';
import FileSwitcher from './components/switcher';
import Footer from './components/footer';
import Home from './pages/home.js'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [backgroundColor] = useState(constants.mainColor);
	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor
	}, [backgroundColor])

	return (
		<Router>

			<SearchBar />

			<main className='flex row' style={{ color: constants.textColor, maxHeight: constants.mainHeight, minHeight: constants.mainHeight, maxWidth: constants.mainWidth }}>

				<SideBar />
				
				<FileExplorer />

				<FileSwitcher />

				<Routes>
					<Route path="/" element={<Home />} />
                    <Route path="/github" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    <Route path="/contact" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/settings" element={<Home />} />
				</Routes>

			</main>

			<Footer />

		</Router>
	);
}

export default App;
