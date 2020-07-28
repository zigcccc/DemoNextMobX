import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledContainer = styled.main`
	padding-top: 63px;
	padding-left: 20px;
	padding-right: 20px;
	background-color: ${({ theme, background }) =>
		background ? background : theme.colors.background};
	min-height: 100vh;
`;

const Container = ({ children, background }) => {
	return <StyledContainer {...{ background }}>{children}</StyledContainer>;
};

Container.propTypes = {
	children: PropTypes.node,
	background: PropTypes.string,
};

export default Container;
