import styled from 'styled-components';

export const H4 = styled.h4`
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
		props.theme.texts.h1FontSize ? props.theme.texts.h4FontSize : props.size};
`;

H4.defaultProps = {
	size: '1.5rem',
	color: 'midnightblue',
};

export default H4;
