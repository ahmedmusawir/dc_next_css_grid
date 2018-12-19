import styled from 'styled-components';

export const GridBlockSmall = styled.div`
	cursor: move;
	box-shadow: 2px 2px 4px #aaa;
	background: linear-gradient(to top, #2a6797 0, #72bdf7 100%);
	@media screen and (min-width: 760px) {
		grid-area: span 2 / span 3;
	}
`;

GridBlockSmall.defaultProps = {};

export default GridBlockSmall;
