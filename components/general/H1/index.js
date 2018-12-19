import styled from 'styled-components';

export const H1 = styled.h1`
	font-family: ${props => props.theme.texts.headingFont};
	color: ${props => {
		let color;
		if (props.dark) {
			color = props.theme.colors.textColorDark;
		} else if (props.light) {
			color = props.theme.colors.textColorLight;
		} else {
			color = props.theme.colors.primaryColor
				? props.theme.colors.primaryColor
				: props.color;
		}
		return color;
	}};
	font-size: ${props =>
		props.theme.texts.h1FontSize ? props.theme.texts.h1FontSize : props.size};
	padding-bottom: 1rem;
`;

H1.defaultProps = {
	size: '2.5rem',
	color: 'midnightblue',
};

export default H1;
