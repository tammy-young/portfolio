import { useEffect, useState } from 'react';
import '../App.css';

import * as constants from './constants';

import SearchBar from './header';
import SideBar from './sidebar';
import FileExplorer from './explorer';
import FileSwitcher from './switcher';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

	const [backgroundColor] = useState(constants.mainColor);
	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor
	}, [backgroundColor])

	return (
		<div>

			<SearchBar />

			<main className='flex row' style={{ color: constants.textColor, maxHeight: constants.mainHeight, minHeight: constants.mainHeight, maxWidth: constants.mainWidth }}>

				<SideBar />
				
				<FileExplorer />

				<FileSwitcher />

			</main>

			<Footer />

		</div>
	);
}

export default Home;
