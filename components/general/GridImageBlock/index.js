/**
 *
 * <GridImageBlock />
 *
 * An Image Container with Props
 * Props: src, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H3, P, Img } from 'components/general';
export const GridImageContainer = styled.div`
	padding: 0rem;
`;
export const GridImage = styled(Img)`
	width: 100%;
	padding-bottom: 1rem;
`;
export const GridImageBlock = props => {
	const { imageLink, alt, caption, details, theme } = props;

	if (theme === 'dark') {
		return (
			<GridImageContainer>
				<GridImage src={imageLink} alt={alt} />
				<H3 light>{caption}</H3>
				<P light> {details}</P>
			</GridImageContainer>
		);
	} else {
		return (
			<GridImageContainer>
				<GridImage src={imageLink} alt={alt} />
				<H3>{caption}</H3>
				<P>{details}</P>
			</GridImageContainer>
		);
	}
};

GridImageBlock.defaultProps = {
	imageLink: 'https://via.placeholder.com/525x300',
	alt: 'Deep Cast',
	caption: '',
	details: '',
};

export default GridImageBlock;
