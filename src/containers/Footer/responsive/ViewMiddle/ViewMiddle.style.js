import styled from 'styled-components';
import withTheme from '../../../../config/themes/withTheme';
import { mediasmAndDown, mediaxsPlus, mediamdAndUp, mediaxsPlusAndDown, mediaxsEdgeAndDown } from '../../../../config/style-config'

export const Wrapper = withTheme(styled.footer`s
  max-width: 100%; 
  background-color: ${({ theme }) => theme.palette.bgColor[5]};
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
  
`);

export const ContainerWrap = withTheme(styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
	height: auto;
  width: 80%;

  .my_column{
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediasmAndDown}{
      flex-direction: column;
      width: 40%;
    }
    @media ${mediaxsPlusAndDown}{
      width: 100%;
    }
  }


  .your_column{
    width: 30%;
    display: flex;
    flex-direction: column;
    @media ${mediasmAndDown}{
      width: 50%;
    }
    @media ${mediaxsPlusAndDown}{
      width: 100%;
      margin-bottom: 40px;
    }
  }

  .column {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media ${mediasmAndDown}{
      margin-bottom: 40px; 
      width: 100%;
    }
  }

  .row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
		justify-content: space-between;
    margin-bottom: 56px;
    @media ${mediaxsPlusAndDown}{
      flex-direction: column;
      margin: 0px;
    }
  }


  
  .header-link {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }

  .pre-header-link{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-top: 16px;

  }

  .p_style{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #656565;
    margin-top: 8px;
  }

  .socials{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
    @media ${mediaxsPlusAndDown}{
      flex-direction: column-reverse;
    } 
  }
  .socials i{
    color: black
  }

  .hr {
    width: 100%;
    height: 1px;
    background-color: #BCBCBC;
    margin-bottom: 24px;
  }

  .icons_wrap{
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediamdAndUp}{
      width: 20%;
    }
    @media ${mediaxsEdgeAndDown}{
      width: 100%;
    }
    @media ${mediaxsPlus}{
        width: 90%;
    }
  }
`);

export const Copyright = withTheme(styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  @media ${mediaxsPlusAndDown}{
    margin-top: 24px;
  } 
  
color: #656565;
  i {
    margin-right: 10px;
  }
  .payments i {
    color: ${({ theme }) => theme.palette.text[0]};
  }
  .logo {
    wigth: auto;
    height: 55px;
  }
`);

