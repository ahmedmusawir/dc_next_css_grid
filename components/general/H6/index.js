import styled from 'styled-components';

export const H6 = styled.h6`
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
		props.theme.texts.h1FontSize ? props.theme.texts.h6FontSize : props.size};
`;

H6.defaultProps = {
	size: '1rem',
	color: 'midnightblue',
};

export default H6;
