import styled from 'styled-components';
import bgyellow from '../../images/bgyellow.png'
import bodyline from '../../images/bodyline.svg'
import history from '../../images/history.svg'
import { mediaxsPlusAndDown, mediasmAndDown, mediaxsEdge, mediasmAndUp } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
.h_4{
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
    margin: 48px 0 8px;
    max-width: 280px;
}

.mr{
    width: 40px;
    height: 4px;
    background: #FFC72C;
    border: none;
    margin-bottom: 40px;
}

.collapse-wrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.ant-collapse{
    width: 100%;
    border-radius: 0;
    margin-bottom: 2px;
    background: #878570;
}


.ant-collapse > .ant-collapse-item > .ant-collapse-header{
    padding-left: 56px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFC72C;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    left: 90%;
}

.ant-collapse > .ant-collapse-item {
    border-radius: 0;
}

.ant-collapse-extra svg{
    width: 24px;
    height: 24px;
    margin-right: 12px;
    margin-top: -4px;
}

.ant-collapse-extra svg > path{
    fill: #FFC72C;
}

.ant-collapse-item:last-child > .ant-collapse-content{
    border-radius: 0px;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {
    float: left;
}

.ant-collapse-content > .ant-collapse-content-box {
    padding: 16px 15%;
}

.prod-1{
    max-width: 320px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
    @media only screen and (max-width: 799px){
        font-size: 18px;
        line-height: 21px;
        margin-top: 48px;
    }
}

.hr_style2{
    width: 64px;
    border: 2px solid #FFC72C;
    margin-top: 8px;
    margin-bottom: 64px;
    cursor: pointer;
    transition: width 1s;
    @media only screen and (max-width: 799px){
        margin-bottom: 0px;
        width: 40px;
    }
}

.hr_style2:hover{
    width: 160px;
}

.hr_style1{
    width: 64px;
    border: 2px solid #FFC72C;
    margin-top: 8px;
    margin-bottom: 64px;
    cursor: pointer;
    transition: width 1s;
}

.hr_style1:hover{
    width: 450px;
}

.hr_style{
    width: 64px;
    border: 2px solid #FFC72C;
    margin-top: 8px;
    margin-bottom: 64px;
    cursor: pointer;
    transition: width 1s;
}

.hr_style:hover{
    width: 350px;
}

.prod{
    max-width: 450px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
    margin-top: 64px;
}

.media_wrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mob_what{
    width: 100%;
    margin-bottom: 20px;
}

.mob_what img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media_wrap h3{
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
    margin-bottom: 8px;
}

.div_line{
    width: 40px;
    height: 4px;
    background: #FFC72C;
    border: none;
    margin-bottom: 16px;
}

.textor{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.describe{
    width: 80%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #706565;
    margin-bottom: 32px;
}

.photo_wrap{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo_wrap img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    @media ${mediasmAndUp}{
        height: 225px;
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
        position: relative;
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
        top: 41%;
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
            top: 27%;
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

    .busy{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 0.08em;
        color: #FFC72C;
        width: 100%;

        @media ${mediasmAndDown}{
            font-size: 16px;
            line-height: 20px;
            text-align: start;
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
            width: 220px;
        }
    }

    .banner p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 40px;
        text-align: start;
        color: #FFC72C;
        @media ${mediasmAndDown}{
            text-align: left;
            line-height: 20px;
            font-size: 16px;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .context{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #FFC72C;
        width: 55%;
        margin-top: 16px;
        @media ${mediasmAndDown}{
           width: 90%;
           margin-top: 22px;
           color: white;
           font-size: 14px;
           line-height: 16px;
        }
        @media (max-width: 500px){
            text-align: center;
            margin-top: 60px;
            color: #FFC72C;
        }
    }
`)


export const Yellow = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: -4px;
    justify-content: flex-start;
    align-items: center;    
    background-image: url(${bgyellow});
    background-repeat: no-repeat;
    background-size: cover ;
    @media ${mediasmAndDown}{
        flex-direction: column;
    }

    .line{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        @media ${mediasmAndDown}{
            width: 80%;
        }
    }

    .oop{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        @media only screen and (max-width: 1100px){
            margin-top: 70px;
        }
        @media ${mediasmAndDown}{
            width: 60%;
        }
    }

    .inline{
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       margin-bottom: 40px;
    }

    .what{
        font-family: Roboto;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.1em;
        color: #FFC72C;
    }
    
    .div_style{
        width: 80%;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #434242;
        margin-left: 64px; 
    }
    
    .hr{
        width: 128px;
        height: 4px;
        background: #FFC72C;
        margin-right: 24px;
        border: none;
    }
      
    .line_wrap{
        width: 95%;
        padding-right: 64px;
        margin-top: -30px;
        @media ${mediasmAndDown}{
            display: none;
        }
    }
   
    .desk_wrap{
        width: 43%;
        position: absolute;
        left: 50%;
        @media ${mediasmAndDown}{
            left: 0%;
            position: relative;
            width: 100%;
            display: flex;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  
`)



export const NewsList = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bodyline});
    background-repeat: no-repeat;
    background-position: right bottom;
    padding-top: 20px;

    .wrap_news{
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .romb{
        width: 144px;
        height: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFC72C;
        
    }
    .new{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .new p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #272727;
        max-width: 210px;
        margin-top: 8px;
    }

    h3{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #272727;
        margin-top: 24px;
    }
`)

export const Services = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${history});
    background-repeat: no-repeat;
    background-position: left top;
`);


export const SecondList = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin: 64px 0px;


.wrap_news{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

}

.romb{
    width: 144px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFC72C;    
}

.new{
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.new p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #272727;
    max-width: 210px;
    margin-top: 8px;
}

h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #272727;
    margin-top: 24px;
}
`)


export const SecondList1 = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin-bottom: 100px;

.wrap_news{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.romb{
    width: 144px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFC72C;
    
}
.new{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.new p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #272727;
    max-width: 210px;
    margin-top: 8px;
}

h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #272727;
    margin-top: 24px;
}
`)


export const Statistic = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    .static-wrap{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 124px;
        @media only screen and (max-width: 799px){
            margin-bottom: 56px;
        }
    }

     p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #272727;
    }

    .ookla{
        display: flex;
        flex-direction: column;
    }

    .wrap_div{
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media ${mediaxsPlusAndDown}{
            width: 100%;
        }
    }

    .numbers{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media ${mediaxsPlusAndDown}{
            flex-direction: column;
        }
    }

    .numbers h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 42px;
        color: #FFC72C; 
    }

    .stylish{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #272727;
        margin-bottom: 17px;
    }

   .scop{
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       margin-bottom: 48px;
   }
`)