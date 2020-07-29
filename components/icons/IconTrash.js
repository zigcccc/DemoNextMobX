import React from 'react';

const IconTrash = (props) => {
	return (
		<svg
			viewBox="0 0 24 24"
			width="1em"
			height="1em"
			stroke="currentColor"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
		</svg>
	);
};

export default IconTrash;
