import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import { observer } from 'mobx-react';

import styled, { useTheme } from 'styled-components';

import { Head, Container } from '../components/layout';
import { IconBox, IconLoading } from '../components/icons';
import { Logo } from '../components/graphics';
import {
	Backdrop,
	CircledIcon,
	PrimaryButton,
	Modal,
	TextButton,
	OrderItem,
} from '../components/ui';
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
	const [modalActive, setModalActive] = React.useState(false);

	const router = useRouter();
	const { colors } = useTheme();
	const { ordersStore } = useStores();

	React.useEffect(() => {
		if (!ordersStore.customerName && ordersStore.state === 'inactive') {
			ordersStore.getCustomerName();
		}
	}, [ordersStore.customerName]);

	React.useEffect(() => {
		if (ordersStore.ordersCount === 0 && modalActive) {
			setModalActive(false);
		}
	}, [ordersStore.ordersCount, modalActive, setModalActive]);

	return (
		<Container background={colors.selectedViolet}>
			<Head title="Non-Contact Deliveries" />
			<Logo />
			<Backdrop>
				<CircledIcon
					rotating={ordersStore.state === 'loading'}
					icon={ordersStore.state === 'loading' ? <IconLoading /> : <IconBox />}
				/>
				{ordersStore.state === 'done' && (
					<>
						<BackdropTitle
							tag="h1"
							size={2}
							align="center"
							color={colors.textPrimary}
						>
							Non-Contact Deliveries
						</BackdropTitle>
						<Text color={colors.textSecondary} align="center" size={1.2}>
							{ordersStore.customerName}, you have this many active orders:{' '}
							<span id="ordersCount">{ordersStore.ordersCount}</span>
						</Text>
						{ordersStore.ordersCount > 0 && (
							<TextButton
								text="Show orders"
								onPress={() => setModalActive(true)}
							/>
						)}
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
										ordersStore.addOrder({
											id: Math.round(Math.random() * 1000),
										})
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
					</>
				)}
			</Backdrop>
			<Modal visible={modalActive} onClose={() => setModalActive(false)}>
				<Text tag="h2" size={1.5}>
					Your orders
				</Text>
				{ordersStore.orders.map(({ id }, index) => (
					<React.Fragment key={id}>
						<OrderItem id={id} onDelete={() => ordersStore.deleteOrder(id)} />
						{index + 1 !== ordersStore.ordersCount && <hr />}
					</React.Fragment>
				))}
			</Modal>
		</Container>
	);
};

Home.propTypes = {
	name: PropTypes.string,
};

export default observer(Home);
