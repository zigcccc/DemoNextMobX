import React from 'react';
import PropTypes from 'prop-types';

import NextHead from 'next/head';

const Head = ({ title }) => {
	return (
		<NextHead>
			<title>{title} | Delivery App</title>
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
};

Head.propTypes = {
	title: PropTypes.string,
};

export default Head;
