import React, { Component, Suspense } from 'react';
import BottomBar from './BottomBar';
import makery from '../../images/makery.png'
import { NavWrapper, Wrapper, Contain } from './TopNav.style';
import { Link } from 'react-router-dom'
import Media from 'react-responsive';
import { mdMin } from '../../config/style-config'
import ViewMobile from './response/ViewMobile'

class TopNav extends Component {
	render() {
		return (
			<NavWrapper id="topnav">
				<Suspense fallback={<div />}>
					<Media maxWidth={mdMin - 1}>
						<ViewMobile />
					</Media>
					<Media minWidth={mdMin}>
						<Contain>
							<div className='img_cover'>
								<Link to='/'><img src={makery} alt="Global Link" /></Link>
							</div>
							<Wrapper>
								<div className="wrapping_test"><BottomBar /></div>
							</Wrapper>
						</Contain>
					</Media>
				</Suspense>
			</NavWrapper>
		);
	}
}

export default TopNav;
