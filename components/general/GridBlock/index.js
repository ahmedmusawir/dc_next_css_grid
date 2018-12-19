import styled from 'styled-components';

export const GridBlock = styled.div`
	cursor: move;
	padding: 1rem;
	@media screen and (min-width: 760px) {
		grid-area: span 3 / span 3;
	}
`;

GridBlock.defaultProps = {};

export default GridBlock;
