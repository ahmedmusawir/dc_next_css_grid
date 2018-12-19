import React from 'react';
import styled from 'styled-components';
import { blueGradient } from 'components/theme/DeepCast/gradients';
import { Navbar } from 'reactstrap';

const FooterBar = styled(Navbar)`
	background: ${blueGradient};
	color: white;
`;

export const Footer = ({ children }) => (
	<FooterBar color="dark" dark expand="md" className="fixed-bottom footer">
		{children}
	</FooterBar>
);

export default Footer;
