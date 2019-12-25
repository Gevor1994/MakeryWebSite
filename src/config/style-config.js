import styled from 'styled-components';
import withTheme from './themes/withTheme';

// Screen Sizes
export const xsEdgeMin = 358;
export const xsPlusMin = 412;
export const smMin = 600;
export const mdMin = 992;
export const lgMin = 1200;
export const xsMax = xsEdgeMin - 1;
export const xsEdgeMax = xsPlusMin - 1;
export const xsPlusMax = smMin - 1;
export const smMax = mdMin - 1;
export const mdMax = lgMin - 1;

// Gutters
export const xsGutter = 12;
export const xsEdgeGutter = 12;
export const xsPlusGutter = 12;
export const smGutter = 20;
export const mdGutter = 28;
export const lgGutter = 28;

// Number of Grid Columns

export const xsContainer = 300;
export const xsEdgeContainer = 336;
export const xsPlusContainer = 390;
export const smContainer = 560;
export const mdContainer = 940;
export const lgContainer = 1148;

// Media Query Ranges
export const mediaxs =              `screen and (max-width: ${xsMax}px)`;
export const mediaxsEdge =          `screen and (min-width: ${xsEdgeMin}px) and (max-width: ${xsEdgeMax}px)`;
export const mediaxsPlus =          `screen and (min-width: ${xsPlusMin}px) and (max-width: ${xsPlusMax}px)`;
export const mediasm =              `screen and (min-width: ${smMin}px) and (max-width: ${smMax}px)`;
export const mediamd =              `screen and (min-width: ${mdMin}px) and (max-width: ${mdMax}px)`;
export const medialg =              `screen and (min-width: ${lgMin}px)`;
export const mediaxsEdgeAndUp =     `screen and (min-width: ${xsEdgeMin}px)`;
export const mediaxsPlusAndUp =     `screen and (min-width: ${xsPlusMin}px)`;
export const mediasmAndUp =         `screen and (min-width: ${smMin}px)`;
export const mediamdAndUp =         `screen and (min-width: ${mdMin}px)`;
export const mediaxsEdgeAndDown =   `screen and (max-width: ${xsEdgeMax}px)`;
export const mediaxsPlusAndDown =   `screen and (max-width: ${xsPlusMax}px)`;
export const mediasmAndDown =       `screen and (max-width: ${smMax}px)`;
export const mediamdAndDown =       `screen and (max-width: ${mdMax}px)`;

export const Container = withTheme(styled.div`
	display: flex;
	align-items: center;
	width: ${lgContainer}px;
	height: 100%;

	@media ${mediamd} {
		width: ${mdContainer}px;
	}
	@media ${mediasm} {
		width: ${smContainer}px;
	}
	@media ${mediaxsPlus} {
		width: ${xsPlusContainer}px;
	}
	@media ${mediaxsEdge} {
		width: ${xsEdgeContainer}px;
	}
	@media ${mediaxs} {
		width: ${xsContainer}px;
	}
`);

//NavBar

export const topBarHeight = 72;
export const middleBarHeight = 72;
export const bottomBarHeight = 48;
export const footerHeight = 433;
export const footerHeightXS = 568;