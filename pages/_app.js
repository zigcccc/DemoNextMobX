/* eslint-disable react/prop-types */
import React from 'react';
import NextApp from 'next/app';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '../styles';

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider {...{ theme }}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}

export default App;
