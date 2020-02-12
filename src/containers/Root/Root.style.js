import styled from 'styled-components';
import withTheme from '../../config/themes/withTheme';


const RootWrapper = withTheme(styled.div`
	width: 100%;
	font-family: ${({ theme }) => theme.fonts.primary};
	box-sizing: border-box;

	.fix-head {
		top: 0;
		z-index: 10;
	}
`);

export const ContentWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: auto;
	min-height: inherit;
	width: 100%;
`;

export const Main = styled.div`
	position: absolute;
	height: auto;
	width: 100%;
`;



export default RootWrapper;
