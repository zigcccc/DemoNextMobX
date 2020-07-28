import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(365deg);
	}
`;

const animationCss = css`
	animation: 3s ${rotate} linear infinite;
`;

const StyledCircledIcon = styled.div`
	border-radius: 50%;
	width: 104px;
	height: 104px;
	background-color: ${({ theme }) => theme.colors.white};
	font-size: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.textPrimary};
	${({ rotating }) => rotating && animationCss};
`;

const CircledIcon = ({ icon, rotating }) => {
	return <StyledCircledIcon {...{ rotating }}>{icon}</StyledCircledIcon>;
};

CircledIcon.propTypes = {
	icon: PropTypes.node,
	rotating: PropTypes.bool,
};

export default CircledIcon;
