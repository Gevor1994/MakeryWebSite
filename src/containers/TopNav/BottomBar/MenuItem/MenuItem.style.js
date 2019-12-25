import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import withTheme from '../../../../config/themes/withTheme';

export const LinkWrap = withTheme(styled.div`
  font-size: 16px;
  font-family: Roboto;
  height: 52px;

  .activeLink {
    color: #FFC72C;
  }

  a{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

`);

export const CNavLink = withTheme(styled(NavLink)` 
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  text-decoration: none;
  margin: 0;
  height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.palette.topBar[0]};

  p{
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin: 0 32px;
    @media (max-width: 1300px){
      margin: 0 24px;
    }
    @media (max-width: 1100px){
      margin: 0 16px;
    }
  }

  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.bgColor[1]};
  }
  &:active {
    text-decoration: none;
  }
`);

