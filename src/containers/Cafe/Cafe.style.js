import styled from 'styled-components';
import { mediaxsPlusAndDown, mediasmAndDown, mediaxsEdge } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .simple_parts{
        width: 100%;
    }

    .prod{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #2C2C2C;
        @media ${mediasmAndDown}{
            font-size: 18px;
            line-height: 21px;
        }
    }
    
    hr{
        background: #FFC72C;
        width: 64px;
        height: 4px;
        margin-bottom: 32px;
        border: none;
        @media ${mediasmAndDown}{
            width: 40px;
            margin-bottom: 24px;
        }
    }

    .slider_container{
        width: 100%;
        background: #F6F6F6;
        margin-bottom: 104px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${mediasmAndDown}{
            margin-bottom: 36px;
        }
    }
    
    .test2{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #F6F6F6;
        padding: 64px 0px;
        img{
            width: 100%;
        }
    }

    .row_phone img{
        width: 476px;
            @media ${mediasmAndDown}{
            width:  420px;
            }
            @media only screen and (max-width: 800px){
                width:  320px;
            }
            

    }
    
    .row_phone{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: end;
        @media ${mediaxsPlusAndDown}{
            flex-direction: column;
            align-items: center;
        }
    }
    
    .row_phone :last-child{
        margin-top: 100px;
        @media ${mediaxsPlusAndDown}{
            margin: 48px 0px;
        }
    }
   
    
    .test{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: white;
        img{
            width: 100%;
        }
    }

    .ant-tabs-tab:hover{
        color: black !important;
    }
    
    .ant-tabs-tab{
        padding: 16px 0px;
    }
    
    .ant-tabs {
        z-index: 20;
        width: 100%;
        margin-bottom: 60px;
        @media ${mediasmAndDown}{
            margin-bottom: 32px;
        }
    }
    
    .ant-tabs-top-content{
        margin-top: 50px;
    }
    
    .ant-tabs-bar{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #FFFFFF;
        display: flex;
        align-items: flex-end;
        padding-left: 10%;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    
    .ant-tabs-ink-bar{
        background: #FFC72C;
        height: 4px;
    }
    
    .ant-tabs-nav {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #706565;
    }
    
    
    .ant-tabs-tab-active{
        color: black;
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
        @media ${mediasmAndDown}{
            width: 100%;
            height: 560px;
        }
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
        width: 82%;
        position: absolute;
        z-index: 7;
        display: flex;
        top: 30%;
        flex-direction: column;
        align-items: flex-start;
        @media ${mediasmAndDown}{
            width: 82%;
        }
        @media ${mediaxsPlusAndDown}{
            width: 85%;
        }
        @media ${mediaxsEdge}{
            width: 90%;
        }
    }

    .busy{
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        letter-spacing: 0.08em;
        color: #FFC72C;
        margin-bottom: 8px;
        width: 100%;

        @media ${mediasmAndDown}{
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.1em;
            margin-top: 8px;
            margin-bottom: 0px;
        }
    }

    .banner span{
        color: #FFC72C;
        @media ${mediasmAndDown}{
            font-size: 48px;
            line-height: 60px;
            text-align: center;
        }
        @media ${mediaxsEdge}{
            text-align: center;
        }
    }

    h2{
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 64px;
        line-height: 90px;
        color: #FFFFFF;
        width: 100%;
        @media ${mediasmAndDown}{
            font-size: 48px;
            line-height: 60px;
        }
    }

    .banner_style{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media ${mediasmAndDown}{
            flex-direction: column-reverse;
        }
    }

    .context{
        font-family: Roboto;
        color: #FFC72C;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: 20px;
        width: 55%;
        margin-top: 16px;
       @media ${mediasmAndDown}{
           font-size: 14px;
           line-height: 20px;
           width: 90%;
           margin-top: 100px;
       }
    }


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`)

