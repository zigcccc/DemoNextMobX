import React from 'react';

import { observer } from 'mobx-react';

import { useRouter } from 'next/router';

import styled, { useTheme } from 'styled-components';
import { transparentize } from 'polished';

import { useStores } from '../hooks';

import { Head, Container } from '../components/layout';
import { Text } from '../components/typography';
import { PrimaryButton, CircledIcon } from '../components/ui';
import { IconCheck } from '../components/icons';

const StyledIconContainer = styled.div`
	display: flex;
	align-items: center;
`;

const StyledButtonContainer = styled.div`
	position: fixed;
	padding: ${({ theme }) => theme.spacings.m};
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${({ theme }) =>
		transparentize(0.5, theme.colors.background)};
	display: flex;
	justify-content: center;
`;

const StyledOrdersContainer = styled.div`
	padding-bottom: 100px;
`;

const Checkout = () => {
	const { ordersStore } = useStores();
	const { colors } = useTheme();
	const router = useRouter();

	React.useEffect(() => {
		if (!ordersStore.validNumOfOrders) {
			router.push('/');
		}
	}, [ordersStore.ordersCount]);

	return (
		<Container>
			<Head title="Congrats!" />
			<StyledIconContainer>
				<CircledIcon icon={<IconCheck />} />
			</StyledIconContainer>
			<Text tag="h1" size={2}>
				Congrats, you have made it!
			</Text>
			<Text color={colors.textSecondary} size={0.85}>
				You have completed your order. Good job! This are your orders:
			</Text>
			<StyledOrdersContainer id="ordersContainer">
				{ordersStore.orders.map(({ id }, index) => (
					<React.Fragment key={id}>
						<Text color={colors.textPrimary}>Order #{id}</Text>
						{index + 1 !== ordersStore.ordersCount && <hr />}
					</React.Fragment>
				))}
			</StyledOrdersContainer>
			<StyledButtonContainer>
				<PrimaryButton
					id="repeatButton"
					text="Repeat the proccess"
					onPress={() => ordersStore.resetOrders()}
				/>
			</StyledButtonContainer>
		</Container>
	);
};

export default observer(Checkout);
