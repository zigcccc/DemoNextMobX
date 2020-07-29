import React from 'react';

const IconClose = (props) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
			<path
				d="M18 6L6 18M6 6l12 12"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default IconClose;
