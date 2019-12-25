import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { instagram } from 'react-icons-kit/fa/instagram';
import { youtube } from 'react-icons-kit/fa/youtube';
import { twitter } from 'react-icons-kit/fa/twitter';
import { Link } from 'react-router-dom'
import IntlMessage from '../../../../components/utils/intlMessage';
import { makeLocalURLwithLocale } from "../../../../helpers/locationUtils";

import { Wrapper, Copyright, ContainerWrap } from './ViewMiddle.style';

const lang = {
	copy: <IntlMessage id="footer.copyright" />,
};

class ViewMiddle extends PureComponent {

	render() {
		const { langID } = this.props;
		const whatURL = makeLocalURLwithLocale('/what-we-do', langID);
		const whoURL = makeLocalURLwithLocale('/who-are-we', langID);
		const careersURL = makeLocalURLwithLocale('/careers', langID);
		const portfolioURL = makeLocalURLwithLocale('/portfolio', langID);

		return (
			<Wrapper>
				<ContainerWrap>
					<div className="row">
						<div className="your_column">
							<p className="header-link">Offices</p>
							<p className="pre-header-link">Los Angeles</p>
							<p className="p_style">6728 Babcock Ave North Hollywood, CA 91606, USA</p>
							<p className="pre-header-link">Florida</p>
							<p className="p_style">130 White Cap Way, Panama City Beach, FL 32407, USA</p>
							<p className="pre-header-link">Yerevan</p>
							<p className="p_style">57/19 Zavaryan street. 47, zip 0019, Yerevan, Armenia</p>
						</div>
						<div className="my_column">
							<div className="column">
								<p className="header-link">Be in touch</p>
								<p className="p_style">(374) 94 89 89 100</p>
								<p className="p_style">makery@somemail.com</p>
								<p className="pre-header-link">For job applications</p>
								<p className="p_style">jobsmakery@somemail.com</p>
							</div>
							<div className="column">
								<p className="header-link">Our Company</p>
								<Link to={whatURL}><p className="p_style">Services</p></Link>
								<Link to={whoURL}><p className="p_style">About us</p></Link>
								<Link to={careersURL}><p className="p_style">Jobs</p></Link>
								<Link to={portfolioURL}><p className="p_style">Portfolio</p></Link>
							</div>
						</div>
					</div>

					<div className="hr" />

					<div className="socials">
						<Copyright>
							<p>{lang.copy}</p>
						</Copyright>
						<div className="icons_wrap">
							<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Icon icon={linkedin} size={18} /></a>
							<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Icon icon={instagram} size={18} /></a>
							<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Icon icon={twitter} size={18} /></a>
							<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Icon icon={facebook} size={18} /></a>
							<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Icon icon={youtube} size={18} /></a>
						</div>
					</div>
				</ContainerWrap>
			</Wrapper>
		)
	};
}

export default connect(
	({ App }) => ({
		langID: App.get('langID'),
	})
)(ViewMiddle);