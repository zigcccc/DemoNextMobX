import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';

const hoverCss = css`
	background-color: ${({ theme }) => darken(0.05, theme.colors.primaryButton)};
`;

const StyledButton = styled.button`
	background-color: ${({ theme, disabled }) =>
		transparentize(disabled ? 0.7 : 0, theme.colors.primaryButton)};
	color: ${({ theme }) => theme.colors.white};
	font-size: 0.88rem;
	font-weight: 600;
	text-transform: uppercase;
	outline: none;
	border: none;
	text-align: center;
	width: 100%;
	max-width: 450px;
	padding: ${({ theme }) => theme.spacings.sm};
	border-radius: ${({ theme }) => theme.radius.s};

	&:hover {
		cursor: pointer;
		${({ disabled }) => !disabled && hoverCss};
	}

	&:active {
		background-color: ${({ theme }) =>
			transparentize(0.5, theme.colors.primaryButton)};
	}
`;

const PrimaryButton = ({ text, onPress, disabled, ...rest }) => {
	return (
		<StyledButton
			onClick={disabled ? null : onPress}
			disabled={disabled}
			{...rest}
		>
			{text}
		</StyledButton>
	);
};

PrimaryButton.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
};

export default PrimaryButton;
