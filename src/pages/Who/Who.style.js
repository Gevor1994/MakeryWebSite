import styled from 'styled-components';
import Subtract from '../../images/Subtract.png';
import mob_Subtract from '../../images/mob_Subtract.png';
import history from '../../images/history.svg';
import { mediaxsPlusAndDown, mediasmAndDown, mediaxs, mediaxsEdge, mediaxsPlus, mediaxsEdgeAndDown } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
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
            top: 22%;
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

    h5{
        margin-top: 8px;
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
        }
    }
`)


export const Values = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-image: url(${Subtract});
    background-repeat: no-repeat;
    background-size: cover ;
    background-position: center;
    margin-top: -3px;
    padding: 80px 0 140px;
    @media ${mediasmAndDown}{
        padding: 48px 0 48px;
    }
    @media (max-width: 600px){
        background-image: url(${mob_Subtract});
        margin-bottom: 48px;
    }
    
.contain{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.p-Style{
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

.hr_style{
    background: #FFFFFF;
    width: 64px;
    height: 4px;
    margin-top: 8px;
    margin-bottom: 64px;
    border: none;
    cursor: pointer;
    transition: width 1s;
    @media ${mediasmAndDown}{
        margin-bottom: 48px;
        width: 40px;
    }
}

.hr_style:hover{
    width: 230px;
    @media ${mediasmAndDown}{
        width: 160px;
    }
}

.values_style{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.value{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 70px;
    @media ${mediasmAndDown}{
        margin-bottom: 0px;
        flex-direction: column;
    }
}

.alls{
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediasmAndDown}{
        width: 100%;
        margin-bottom: 48px;
    }
}

.alls1{
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediasmAndDown}{
        width: 100%;
        margin-bottom: 48px;
    }
}

p{
    width: 75%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #272727;
    @media ${mediasmAndDown}{
        width: 85%;
    }
    @media ${mediaxsEdge}{
        font-size: 14px;
        line-height: 16px;
    }
}

.icons{
    width: 90px;
    height: 56px; 
    display: flex;
    justify-content: flex-start;
    margin-right: 16px;
}
`)


export const History = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${history});
    background-repeat: no-repeat;
    background-position: left top;
    padding-bottom: 64px;
    background-size: contain;

    @media ${mediaxsEdgeAndDown}{
        background-size: inherit;
    }
.column{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

}


.like_hr{
    border: 2px solid #ECECEC;
    height: 100px;
    @media only screen and (max-width: 800px) and (min-width: 600px){
        height: 130px;
    }
    @media ${mediaxsPlus}{
        height: 130px;
    }
   @media ${mediaxsEdge}{
        height: 125px;
   }
    
   @media ${mediaxs}{
       height: 170px;
   }
}

h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
    margin-top: 16px;
    @media ${mediasmAndDown}{
        font-size: 18px;
        line-height: 21px;  
    }
}

hr{
    background: #FFC72C;
    width: 64px;
    height: 4px;
    margin-bottom: 64px;
    border: none;
    cursor: pointer;
    transition: width 1s;
    @media ${mediasmAndDown}{
        margin-bottom: 0;
        width: 40px;
    }
}

hr:hover{
    width: 120px;
    @media ${mediasmAndDown}{
        width: 90px;
    }
}

.info_list{
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 64px 0px 128px;
    @media ${mediaxsEdge}{
        width: 90%;
        padding-top: 80px;
        padding-bottom: 0px;
    }
}


.info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.icons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.info_list p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: #272727;
    width: 80%;
    @media ${mediaxsPlusAndDown}{
        width: 100%;
        font-size: 14px;
        line-height: 20px;
    }
}

.info_list h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    color: #878570;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 10%;
}

.circle{
    border-radius: 14px;
    background: #878570;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle2{
    background: #FFC72C;
    border-radius: 14px;
    width: 16px;
    height: 16px;
}

.text_wrap{
    width: 93%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${mediaxsPlusAndDown}{
        flex-direction: column;
        width: 88%;
    }
}

`)


