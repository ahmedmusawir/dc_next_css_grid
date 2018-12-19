/**
 *
 * <GridTextBlock />
 *
 * A Text Container with Props
 * Props: title, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H1, H3, P } from 'components/general';
export const GridTextContainer = styled.div`
	padding-bottom: 2rem;
`;

export const GridTextBlock = props => {
	const { title, subtitle, details, theme } = props;

	if (theme === 'dark') {
		return (
			<GridTextContainer>
				<H1 light>{title}</H1>
				<H3 light>{subtitle}</H3>
				<P light> {details}</P>
			</GridTextContainer>
		);
	} else {
		return (
			<GridTextContainer>
				<H1>{title}</H1>
				<H3>{subtitle}</H3>
				<P>{details}</P>
			</GridTextContainer>
		);
	}
};

GridTextBlock.defaultProps = {
	title: 'Default Title',
	subtitle: 'Default Subtitle',
	details: 'Default detail text .... more text...',
};

export default GridTextBlock;
