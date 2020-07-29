import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { transparentize, darken } from 'polished';
import { IconClose } from '../icons';

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${({ theme }) =>
		transparentize(0.5, darken(0.4, theme.colors.selectedViolet))};
	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		min-width: 50vw;
		min-height: 25vh;
		background-color: ${({ theme }) => theme.colors.background};
		border-radius: ${({ theme }) => theme.radius.s};
		padding: 1em;
	}

	.close-icon-container {
		position: absolute;
		top: 1em;
		right: 1em;
		color: ${({ theme }) => theme.colors.background};
		font-size: 24px;

		&:hover {
			cursor: pointer;
		}
	}
`;

const Modal = ({ children, visible, onClose }) => {
	if (visible) {
		return ReactDOM.createPortal(
			<StyledModal>
				<div className="close-icon-container">
					<IconClose onClick={onClose} />
				</div>
				<div className="content">{children}</div>
			</StyledModal>,
			document.getElementById('modal-root')
		);
	}
	return null;
};

Modal.propTypes = {
	children: PropTypes.node,
	visible: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
};

export default Modal;
