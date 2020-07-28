import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledBackdrop = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: auto;
	padding: ${({ theme }) => `${theme.spacings.xl} ${theme.spacings.m}`};
	border-top-left-radius: ${({ theme }) => theme.radius.m};
	border-top-right-radius: ${({ theme }) => theme.radius.m};
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 66vh;
`;

const Backdrop = ({ children }) => {
	return <StyledBackdrop className="backdrop">{children}</StyledBackdrop>;
};

Backdrop.propTypes = {
	children: PropTypes.node,
};

export default Backdrop;
