/**
 *
 * GridSection.js
 *
 * Renders a Content Section with CSS Grid
 */

import styled from 'styled-components';

export const GridSection = styled.section`
	padding: 0 1rem;

	@media screen and (min-width: 760px) {
		display: grid;
		grid-gap: 8px;
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
		grid-auto-flow: row dense;
		list-style: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		width: 100%;
		max-width: 120rem;
	}
`;

export default GridSection;
