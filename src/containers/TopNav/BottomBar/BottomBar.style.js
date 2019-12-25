import styled from 'styled-components';
import withTheme from '../../../config/themes/withTheme';

export const BarWrapper = withTheme(styled.div`
  height: 52px;
  width: 100%;
	display: flex;
  justify-content: flex-end;
  background: transparent;
 

  & > div {
    // width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    background: transparent;
  }

`);
