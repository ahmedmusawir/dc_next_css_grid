import styled from 'styled-components';

export const H5 = styled.h5`
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
		props.theme.texts.h1FontSize ? props.theme.texts.h5FontSize : props.size};
`;

H5.defaultProps = {
	size: '1.25rem',
	color: 'midnightblue',
};

export default H5;
