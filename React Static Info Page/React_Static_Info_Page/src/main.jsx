import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

/* Old Syntax
ReactDOM.render(
	<StrictMode>
		<ul>
			<li>First one</li>
			<li>Second one</li>
		</ul>
	</StrictMode>
  ,document.getElementById('root')
); */
