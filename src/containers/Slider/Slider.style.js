import styled from 'styled-components';
import withTheme from '../../config/themes/withTheme';
import { mediasmAndDown } from '../../config/style-config';

export const SliderWrap = withTheme(styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 44px 66px;
    @media only screen and (max-width: 450px){
        padding: 44px 10px;
    }
    img{
        cursor: pointer;
    }
    
    i {
        font-size: 20px;
        color: #c5c6c6;
    }
    .slider {
        width: auto;
    }
    .alice-carousel {
        width: ${({ showArrows }) => showArrows ? '85%' : '100%'};
    }
    .alice-carousel__stage-item {
        &:nth-child(${({ itemsPerPage }) => `${itemsPerPage}n + 1) {
            width: calc(100%/${itemsPerPage} + 10px) !important;
        }`}
    }
    @media ${mediasmAndDown} {
        margin-bottom: 0px;
    }
    .alice-carousel__stage-item img{
        margin-left: 2px;
        @media (max-width: 700px){
            width: 260px;
            height: 200px;
        }
    }
    .alice-carousel__wrapper{
        text-align: center;
    }
`);
