import React from 'react';
import PropTypes from 'prop-types';

import styled, { useTheme } from 'styled-components';

import { Text } from '../typography';
import { IconTrash } from '../icons';
import IconButton from './IconButton';

const StyledOrderItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const OrderItem = ({ id, onDelete }) => {
	const { colors } = useTheme();
	return (
		<StyledOrderItem>
			<Text color={colors.textPrimary}>Order #{id}</Text>
			<IconButton
				icon={<IconTrash />}
				onPress={onDelete}
				color={colors.danger}
			/>
		</StyledOrderItem>
	);
};

OrderItem.propTypes = {
	id: PropTypes.number,
	onDelete: PropTypes.func,
};

export default OrderItem;
