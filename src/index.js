import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/base';
import reportWebVitals from './reportWebVitals';

import './index.css';

const pages = {
	'home': {
		label: "home.html",
		icon: "vscode-icons:file-type-html",
		sidebarIcon: "mdi:files",
		url: "/"
	},
	'github': {
		label: "github.js",
		icon: "logos:javascript",
		sidebarIcon: "iconoir:github",
		url: "/github"
	},
	'projects': {
		label: "projects.py",
		icon: "logos:python",
		sidebarIcon: "grommet-icons:projects",
		url: "/projects"
	},
	'contact': {
		label: "contact.c",
		icon: "devicon:c",
		sidebarIcon: "fluent:contact-card-28-regular",
		url: "/contact"
	},
	'about': {
		icon: "iconamoon:profile-circle-fill",
		sidebarIcon: "iconamoon:profile-circle-fill",
		url: "/about"
	},
	'settings': {
		icon: "material-symbols:settings",
		sidebarIcon: "material-symbols:settings",
		url: "/settings"
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default pages;
