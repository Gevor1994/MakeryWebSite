import styled from 'styled-components';
import { mediaxsPlusAndDown, mediasmAndDown, mediaxsEdge } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

p{
    @media ${mediaxsPlusAndDown}{
        font-size: 16px !important;
        line-height: 19px !important;
    }
}

.test{
    display: flex;
    flex-direction: column;
    width: 80%;
}




.test h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #000000;
    margin-bottom: 24px;
    @media ${mediaxsPlusAndDown}{
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
    }
}


.first_wrappion{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #C4C4C4;
    padding-bottom: 16px;

    @media ${mediasmAndDown}{
        flex-direction: column;
    }
}

.style_row{
    width: 50%;
    display: flex;
    flex-direction: column;
}

.p-styel{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #272727;
    margin-top: 24px;
    @media ${mediaxsPlusAndDown}{
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
    }
}

.style_row1{
    width: 45%;
    display: flex;
    flex-direction: column;
    @media ${mediasmAndDown}{
        width: 100%;
    }
}

.style_row1 p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px; 
    line-height: 21px;
    color: #706565;
    margin-bottom: 8px !important;
    @media ${mediaxsPlusAndDown}{
        font-size: 16px;
        line-height: 19px;
    }
}

.rows{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.rows h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #272727;
    margin-bottom: 8px;  
    @media ${mediaxsPlusAndDown}{
        font-size: 14px;
        line-height: 16px;
        font-weight: bold;
    }
}


.rows p{
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #706565;  
    margin-bottom: 24px;  
    @media ${mediaxsPlusAndDown}{
        font-size: 16px;
        line-height: 19px;
    }
}


.second_wrappion{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #C4C4C4;
    padding-bottom: 40px;

    @media screen and (max-width: 850px){
        flex-direction: column;
    }
}

.left_row{
    width: 55%;
    @media screen and (max-width: 850px){
        width: 100%;
    }
}

.right_row{
    width: 40%;
    @media screen and (max-width: 850px){
        width: 100%;
    }
}

.second_wrappion p{
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px ; 
    color: #706565;
    max-width: 470px;
    margin-top: 16px;
    @media screen and (max-width: 850px){
        max-width: 100%;
    }
}


.third_row{
    width: 100%
}

.third_row p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #706565;
}

.wrapping{
    display: flex;
    width: 180px;
    margin: 8px 0 104px;
    flex-direction: column;
    @media ${mediasmAndDown}{
        width: 168px;
        margin: 16px 0 56px;
    }
  }

  .button_brow{
      width: 100%;
      display: flex;
      @media ${mediasmAndDown}{
        justify-content: center;
        align-items: center;
    }
  }
  
  .wrapping:hover button{
    color: white;
    transform: translate(12px, 12px);
    @media ${mediasmAndDown}{
        transform: translate(0px, 0px);
    }
  }
  
  .btn{
    width: 160px;
    height: 48px;
    background: #FFC72C;
    border: none;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 40px;
    color: #2C2C2C;
    position: absolute;
    z-index: 1;
    transition: transform 1s;
    outline: none;
    cursor: pointer;
  }
  
  .box-shadow{
    width: 168px;
    height: 56px;
    border: 1px solid #FFC72C;
    position: relative;
    top: 8px;
    left: 8px;
    @media ${mediasmAndDown}{
        top: -4px;
        left: -4px;
    }
  }

.inlin{
    display: flex;
    flex-direction: row;
    margin-top: 24px;
}

.inlin h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px !important;
    line-height: 21px;
    color: #272727;
    margin-right: 10px;
    @media ${mediaxsEdge}{
        margin-right: 0px;
        width: 100%;
        font-size: 16px !important;
    }
}

.inlin h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #DD0F0F;
    @media ${mediaxsEdge}{
        width: 80%;
        font-size: 18px ;

    }
}

.tab{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ant-tabs-tab:hover{
    color: black !important;
    font-weight: bold !important;
}

.ant-tabs-tab{
    padding: 16px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
}

.ant-tabs {
    z-index: 20;
    width: 100%;
    margin-bottom: 60px;
    @media ${mediasmAndDown}{
        margin: 0;
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
    @media ${mediaxsPlusAndDown}{
        padding-left: 5%;
    }
}

.ant-tabs-ink-bar{
    background: #FFC72C;
    height: 4px;
    width: 50%;
}

.ant-tabs-nav-container-scrolling{
    padding-right: 0px;
    padding-left: 0px;
}

.ant-tabs-tab{
    white-space: pre-wrap;
    width: 45% !important;
}

.ant-tabs-tab-next-icon-target{
    margin-left: 15px;
}

.ant-tabs-nav-wrap{
    width: 90%;
}

.ant-tabs-tab-prev-icon-target{
    margin-right: 25px;
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





.my{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediasmAndDown}{
        width: 100%;
    }
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
        @media (max-width: 500px){
            align-items: center;
        }
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
        top: 37%;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: 1200px){
            top: 35%;
        }
        @media ${mediasmAndDown}{
            width: 82%;
        }
        @media ${mediaxsPlusAndDown}{
            width: 85%;
        }
        @media ${mediaxsEdge}{
            width: 90%;
        }
        @media (max-width: 500px){
            top: 25%;
        }
    }

    .busy{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 0.08em;
        color: #FFC72C;

        @media ${mediasmAndDown}{
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.1em;
            margin-top: 8px;
            margin-bottom: 0px;
        }
        @media (max-width: 500px){
            text-align: center !important;
        }
    }

    .banner span{
        color: #FFC72C;
        font-style: normal;
        font-weight: 900;
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
        @media (max-width: 500px){
            text-align: center;
            width: 170px;
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
        @media (max-width: 500px){
            align-items: center;
        }
    }
     
    .context{
        font-family: Roboto;
        color: #FFC72C;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        width: 55%;
        margin-top: 16px;
        @media ${mediasmAndDown}{
           font-size: 14px;
           line-height: 20px;
           width: 90%;
           margin-top: 70px;
        }
        @media (max-width: 500px){
            text-align: center;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`)