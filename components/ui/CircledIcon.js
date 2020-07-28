import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

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
`;

const CircledIcon = ({ icon }) => {
	return <StyledCircledIcon>{icon}</StyledCircledIcon>;
};

CircledIcon.propTypes = {
	icon: PropTypes.node,
};

export default CircledIcon;
