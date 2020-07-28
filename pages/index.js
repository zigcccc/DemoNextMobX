import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import { observer } from 'mobx-react';

import styled, { useTheme } from 'styled-components';

import axios from 'axios';

import { Head, Container } from '../components/layout';
import { IconBox } from '../components/icons';
import { Logo } from '../components/graphics';
import { Backdrop, CircledIcon, PrimaryButton } from '../components/ui';
import { Text } from '../components/typography';

import { useStores } from '../hooks';

const BackdropTitle = styled(Text)`
	margin: ${({ theme }) => theme.spacings.m};
`;

const LastParagraph = styled(Text)`
	margin-bottom: ${({ theme }) => theme.spacings.l};
`;

const FirstButton = styled(PrimaryButton)`
	margin-bottom: ${({ theme }) => theme.spacings.s};
`;

const Home = () => {
	const router = useRouter();
	const { colors } = useTheme();
	const { ordersStore } = useStores();
	return (
		<Container background={colors.selectedViolet}>
			<Head title="Non-Contact Deliveries" />

			<Logo />
			<Backdrop>
				<CircledIcon icon={<IconBox />} />
				<BackdropTitle
					tag="h1"
					size={2}
					align="center"
					color={colors.textPrimary}
				>
					Non-Contact Deliveries
				</BackdropTitle>
				<Text color={colors.textSecondary} align="center" size={1.2}>
					You have this many active orders:{' '}
					<span id="ordersCount">{ordersStore.ordersCount}</span>
				</Text>
				{!ordersStore.validNumOfOrders ? (
					<>
						<LastParagraph
							color={colors.textSecondary}
							align="center"
							size={0.85}
						>
							You only need {ordersStore.neededOrdersLeft} more orders to
							continue!
						</LastParagraph>
						<FirstButton
							id="addOrderButton"
							text="ADD NEW ORDER"
							onPress={() =>
								ordersStore.addOrder({ id: Math.round(Math.random() * 1000) })
							}
						/>
					</>
				) : (
					<LastParagraph color={colors.textSecondary} align="center">
						{"Allright sparky, let's go to checkout."}
					</LastParagraph>
				)}
				<PrimaryButton
					id="goToCheckout"
					text="GO TO CHECKOUT!"
					disabled={!ordersStore.validNumOfOrders}
					onPress={() => router.push('/checkout')}
				/>
			</Backdrop>
		</Container>
	);
};

Home.propTypes = {
	name: PropTypes.string,
};

export default observer(Home);

export async function getStaticProps() {
	const { data } = await axios.get('http://localhost:3000/api/hello?name=Ziga');
	const { name } = data;

	return {
		props: {
			name,
		},
	};
}
