import styled from 'styled-components';
import withTheme from '../../config/themes/withTheme';
import { mediamdAndDown } from '../../config/style-config'

export const NavWrapper = withTheme(styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	background: transparent;
    justify-content: center;
	align-items: center;
	height: 92px;
	padding-top: 32px;
	position: absolute;
    z-index: 4;
		
`);

export const Wrapper = withTheme(styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	background: transparent;

	.wrapping_test{
		width: 80%;
		@media (max-width: 1400px) {
			width: 85%;
		}
		@media (max-width: 1300px) {
			width: 90%;
		}
		@media ${mediamdAndDown} {
			width: 95%;
		}
	}

	.wrapping_test > div:first-child > div:first-child p{
		display: none;
	}
	.sc-fjdhpX:nth-of-type(3)
		
	}

	.sc-fjdhpX:nth-of-type(4){
		
	}

	.sc-fjdhpX:nth-of-type(5){
		
	}
`)

export const Contain = withTheme(styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	background: transparent;
	align-items: flex-end;

img{
	object-fit: contain;
	width: 100%;
	height: 100%;
}

.img_cover{
	object-fit: cover;
	width: 93px;
	height: 86px;
}

`)