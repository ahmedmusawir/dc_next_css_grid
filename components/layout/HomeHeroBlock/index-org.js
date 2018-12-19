/**
 *
 * HomeHeroBlock.js
 *
 * A Row Container with Props
 * Props: classes [Utility Reactstrap Classes]
 *
 */
import React from 'react';
import styled from 'styled-components';
import { HeroBlock } from 'components/layout';
import { Container, Col, P, H1, H3 } from 'components/general';

const HeroBlockWithBgImage = styled.div`
	min-height: 50vh;
	background-image: url('/static/images/oil-rig.png');
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: right bottom;
	// background-color: darkblue;
	// background-color: linear-gradient(to right, #000055 0%, #003099 100%);

	@media (min-width: 600px) {
		background-size: 80%;
	}
	@media (min-width: 900px) {
		background-size: 60%;
	}
	@media (min-width: 1150px) {
		background-size: 50%;
	}
	@media (min-width: 1350px) {
		background-size: 40%;
	}
	@media (min-width: 1700px) {
		background-size: 35%;
	}
`;
const HeroTextBox = styled.div`
	padding: 5rem;
	background: white;
	margin-top: -8rem;

	@media (max-width: 500px) {
		padding: 2rem;
	}
	@media (max-width: 991px) {
		@media screen and (orientation: landscape) {
			margin-top: -2rem;
		}
		@media screen and (orientation: portrait) {
			margin-top: -4rem;
		}
	}
	@media (min-width: 992px) {
		@media screen and (orientation: landscape) {
			margin-top: -10rem;
		}
		@media screen and (orientation: portrait) {
			margin-top: -15rem;
		}
	}
`;
const HomeHeroHeading = styled(H1)`
	padding-top: 15vh;
	@media (max-width: 650px) {
		font-size: 2rem;
		padding-top: 0;
	}
	@media (max-width: 750px) {
		font-size: 2.5rem;
		padding-top: 0;
	}
	@media (max-width: 767px) {
		padding-top: 5vh;
		@media screen and (orientation: portrait) {
			padding-top: 15vh;
		}
	}
	@media (min-width: 768px) {
		@media screen and (orientation: portrait) {
			font-size: 3.5rem;
			padding-top: 13vh;
		}
		@media screen and (orientation: landscape) {
			font-size: 3.5rem;
			padding-top: 10vh;
		}
	}
`;

export const HomeHeroBlock = props => {
	const { title, subtitle, description } = props;
	return (
		<React.Fragment>
			<HeroBlock>
				<HeroBlockWithBgImage>
					<Container>
						<Col xl="8">
							<HomeHeroHeading light>{title}</HomeHeroHeading>
						</Col>
					</Container>
				</HeroBlockWithBgImage>
			</HeroBlock>
			<Container>
				<Col md="10" lg="8">
					<HeroTextBox>
						<H3>{subtitle}</H3>
						<P>{description}</P>
					</HeroTextBox>
				</Col>
			</Container>
		</React.Fragment>
	);
};

export default HomeHeroBlock;
