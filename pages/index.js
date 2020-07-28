import React from 'react';
import PropTypes from 'prop-types';

import styled, { useTheme } from 'styled-components';

import axios from 'axios';

import { Head, Container } from '../components/layout';
import { IconBox } from '../components/icons';
import { Logo } from '../components/graphics';
import { Backdrop, CircledIcon, PrimaryButton } from '../components/ui';
import { Text } from '../components/typography';

const BackdropTitle = styled(Text)`
	margin: ${({ theme }) => theme.spacings.m};
`;

const BackdropParagraph = styled(Text)`
	margin-bottom: ${({ theme }) => theme.spacings.l};
`;

const Home = () => {
	const { colors } = useTheme();
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
				<BackdropParagraph color={colors.textSecondary} align="center">
					You have clicked order now button 0 times!
				</BackdropParagraph>
				<PrimaryButton text="ORDER NOW" />
			</Backdrop>
		</Container>
	);
};

Home.propTypes = {
	name: PropTypes.string,
};

export default Home;

export async function getStaticProps() {
	const { data } = await axios.get('http://localhost:3000/api/hello?name=Ziga');
	const { name } = data;

	return {
		props: {
			name,
		},
	};
}
