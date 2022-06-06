import '../styles/globals.css';
import { React, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
