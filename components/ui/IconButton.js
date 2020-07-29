import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';

const hoverCss = css`
	background-color: ${({ theme, color }) =>
		darken(0.05, color ? color : theme.colors.primaryButton)};
`;

const StyledButton = styled.button`
	background-color: ${({ theme, disabled, color }) =>
		transparentize(
			disabled ? 0.7 : 0,
			color ? color : theme.colors.primaryButton
		)};
	color: ${({ theme }) => theme.colors.white};
	font-size: 0.88rem;
	font-weight: 600;
	text-transform: uppercase;
	outline: none;
	border: none;
	text-align: center;
	padding: ${({ theme }) => `${theme.spacings.s} ${theme.spacings.sm}`};
	border-radius: ${({ theme }) => theme.radius.s};

	&:hover {
		cursor: pointer;
		${({ disabled }) => !disabled && hoverCss};
	}

	&:active {
		background-color: ${({ theme, color }) =>
			transparentize(0.5, color ? color : theme.colors.primaryButton)};
	}
`;

const IconButton = ({ icon, onPress, disabled, ...rest }) => {
	return (
		<StyledButton
			onClick={disabled ? null : onPress}
			disabled={disabled}
			{...rest}
		>
			{icon}
		</StyledButton>
	);
};

IconButton.propTypes = {
	icon: PropTypes.node,
	color: PropTypes.string,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
};

export default IconButton;
