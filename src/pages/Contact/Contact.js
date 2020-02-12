import React  from 'react';
import { Wrap, Wrapper } from './Contact.style'
import svg from '../../images/svg.svg'
import Iframe from 'react-iframe'
import contactsbg from '../../images/contactsbg.jpg'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Contact = React.memo(
	() => {
		return (
			<Wrap>
				<Wrapper>
					<div className='bg_cover'><img src={contactsbg} alt="background" /></div>
					<div className='global_cover'>
						<div className="svg_wrapper"><img src={svg} alt="lines" /></div>
						<div className='banner'>
							<div className='wrap'>
								<h1>MAKERY LLC</h1>
								<div className='ocunt'>
									<div className='first-column'>
										<h2>YEREVAN OFFICE</h2>
										<p>57/19 Zavaryan street. 47,zip 0019, Yerevan, Armenia </p>
										<h2>LOS ANGELES OFFICE</h2>
										<p>6728 Babcock Ave North Hollywood, CA 91606, USA </p>
										<h2>FLORIDA OFFICE</h2>
										<p>130 White Cap Way, Panama City Beach, FL 32407, USA</p>
									</div>
									<div className='second-column'>
										<div className='second_wrap'>
											<h2>SEND US A MESSAGE</h2>
											<p>dev@makerylabs.com</p>
											<h2>FOR JOB APPLICANTS</h2>
											<p>job@makerylabs.com</p>
										</div>
									</div>
									<div className='third-column'>
										<div className='second_wrap'>
											<h2>FEEL FREE TO CALL US</h2>
											<p>(+374) 98 14 56 61</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Wrapper>
				<Tabs type="card">
					<TabPane tab={<p>YEREVAN</p>} key="1">
						<Iframe className='iframe' url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.4226672973966!2d44.5159039581658!3d40.16799719484876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc5fd333f1d3%3A0xf1b55dcec622d115!2s57%2F19%20Zavarian%20St%2C%20Yerevan%200070%2C%20Armenia!5e0!3m2!1sen!2s!4v1568700505961!5m2!1sen!2s"
								width="100%"
								height={(window.innerWidth <= 990) ? "560px" : "400px"}
								display="initial"
						/>
					</TabPane>
					<TabPane tab={<p>LOS ANGELES</p>} key="2">
						<Iframe className='iframe' url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.1716956779783!2d-118.4085722848249!3d34.19308928056786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c296885c6f73a1%3A0x4808876f191becb3!2s6728%20Babcock%20Ave%2C%20North%20Hollywood%2C%20CA%2091606%2C%20USA!5e0!3m2!1sen!2s!4v1568611994684!5m2!1sen!2s"
								width="100%"
								height={(window.innerWidth <= 990) ? "560px" : "400px"}
								display="initial"
						/>
					</TabPane>
					<TabPane tab={<p>FLORIDA</p>} key="3">
						<Iframe className='iframe' url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.556050944685!2d-85.81815198492696!3d30.19267328182864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88938ed1b6e98867%3A0xe7dc546371927257!2s130%20White%20Cap%20Way%2C%20Panama%20City%20Beach%2C%20FL%2032407%2C%20USA!5e0!3m2!1sen!2s!4v1568612496659!5m2!1sen!2s"
								width="100%"
								height={(window.innerWidth <= 990) ? "560px" : "400px"}
								display="initial"
						/>
					</TabPane>
				</Tabs>
			</Wrap>
		);
	}
)

export default Contact;

