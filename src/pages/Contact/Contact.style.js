import styled from 'styled-components';
import { mediamd, mediasmAndDown } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 104px;
     
    @media ${mediasmAndDown}{
        margin-bottom: 56px;
    }

    hr:hover{
        width: 200px;
    }

    .iframe{
        position: relative;
		overflow: hidden;
        z-index: 50;
        top: -3px;
    }

    .ant-tabs{
        width: 100%;
        position: relative;
        z-index: 10000;
    }

    .ant-tabs-bar{
        margin: 0 !important;
        position: absolute;
    }

    .ant-tabs-nav div:first-child{
        display: flex;
        flex-direction: column;
    }
    .ant-tabs-nav-container{
        height: 150px !important;
        position: relative;
        z-index: 500000;
        top: 120px;
        left: 22px;
        span{
            display: none !important;
        }
        @media (max-width: 600px){
            top: 200px;
        }
    }
    .ant-tabs-tab-active p{
        color: #FFC72C !important;
        background: #2C2C2C;
        width: 92px !important;
        text-align: center;
    } 

    .ant-tabs-tab{
        width: 100px !important;
        height: 32px !important;
        border-radius: 0 !important;
        border: 1px solid #2C2C2C !important;
        background: transparent !important;
        margin: 0 !important;
        margin-bottom: 16px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            width: 92px !important;
            font-family: Roboto !important;
            font-weight: normal !important;
            font-size: 14px !important;
            line-height: 24px !important;
            color: #2C2C2C ;
            padding: 0 !important;
            margin: 0 !important;
            text-align: center;
        }
    }

    .ant-tabs-bar{
        border: none !important;
    }
    .ant-tabs-tab{
        padding: 0 !important;
    }
    
`)

export const Wrapper = (styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    .bg_cover{
        width: 100%;
        height: 100%;
        
    }

    .global_cover{
        width: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        justify-content: center;
        align-items: flex-end;
        top: 0;
    }

    .svg_wrapper{
        width: 100%;
        height: 100%;
        opacity: 0.3;
        @media ${mediasmAndDown}{
            width: 100%;
            height: 560px;
        }
    }


    .banner{
        width: 88%;
        position: absolute;
        z-index: 7;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        top: 23%;
        @media screen and (max-width: 780px){
            top: 16%;
            align-items: center;
            width: 85%;
        }
        
    }

    .busy{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 0.08em;
        color: #FFC72C;
        margin-bottom: 8px;
    }

    .banner span{
        color: #FFC72C;
    }

    h2{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
        line-height: 90px;
        color: #FFFFFF;
        width: 100%;
        @media screen and (max-width: 780px){
            line-height: 14px;
        }
    }

    .banner p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        color: #FFC72C;
    }

    img{
        width: 100%;
        height: 100%;
        @media ${mediasmAndDown}{
            width: 100%;
            height: 560px;
        }
    }

    .wrap{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 12; 
    @media screen and (max-width: 780px){
        width: 250px;
    }
    }

    .ocunt{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 16px;
        @media ${mediamd}{
            margin-top: 0px;
        }
        @media screen and (max-width: 780px){
            flex-direction: column;
            width: 250px;

        }

        
    }


    .first-column{
        width: 33%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #FFC72C;
        @media screen and (max-width: 780px){
            width: 100%;
            border: none;
        } 
    }

    .second-column{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #FFC72C;
        @media screen and (max-width: 780px){
            width: 100%;
            border: none;
            align-items: flex-start;
        }
    }

    .third-column{
        width:33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 780px){
            width: 100%;
            border: none;
            align-items: flex-start;
        }
    }

    .second_wrap{
        display: flex;
        flex-direction: column;

    }

    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 50px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        @media screen and (max-width: 900px) and (min-width: 360px){
            font-size: 24px;
            line-height: 18px;
        }
    }

    h2{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-bottom: 8px;
        @media ${mediamd}{
            margin-bottom: 0px;
        }
        @media screen and (max-width: 900px) and (min-width: 360px){
            font-size: 16px;
            line-height: 19px;
        }
        @media screen and (max-width: 780px){
            margin: 0;
        }

    }

    img{
        width: 100%;
        object-fit: cover;
    }

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFC72C;
        max-width: 240px;
        margin-bottom: 16px;
        @media ${mediamd}{
            margin-bottom: 0px;
        }
        @media screen and (max-width: 900px) and (min-width: 360px){
            font-size: 14px;
            line-height: 16px;
        }
        @media screen and (max-width: 780px){
            margin-bottom: 16px;
            margin-top: 8px;
        }
    }

    
`)
