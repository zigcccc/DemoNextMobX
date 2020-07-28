import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledText = styled.p`
	font-size: ${({ size, unit }) => `${size}${unit}`};
	text-align: ${({ align }) => align};
	color: ${({ color, theme }) =>
		color ? (color.includes('#') ? color : theme.colors[color]) : 'inherit'};
`;

const Text = ({ children, tag, ...rest }) => {
	return (
		<StyledText as={tag} {...rest}>
			{children}
		</StyledText>
	);
};

Text.propTypes = {
	children: PropTypes.node,
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
	size: PropTypes.number,
	unit: PropTypes.oneOf(['px', 'em', 'rem', '%']),
	align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
	color: PropTypes.string,
};

Text.defaultProps = {
	tag: 'p',
	unit: 'rem',
	size: 1,
	align: 'left',
};

export default Text;
