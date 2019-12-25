import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.img`
	width: auto;
	height: 32px;
`;

export const Wrapper = (styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
    padding: 0px 16px;
    color: #706565;    
`);


export const DrawerLink = (styled(NavLink)` 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  margin: 0;
  height: 100%;
  overflow: hidden;
  @font-face {
    font-family: Roboto
  }
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #706565;  

  padding: 24px 0px 0px 56px;
  
`);

