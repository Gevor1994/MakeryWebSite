import styled from 'styled-components'
import { mediaxsPlusAndDown, mediasmAndDown, mediaxsEdgeAndDown } from '../../config/style-config'
import gevorg from '../../images/gevorg.png'
import alice from '../../images/alice.png'
import armen from '../../images/armen.png'
import dan from '../../images/dan.png'
import gev from '../../images/gev.png'
import harut from '../../images/harut.png'
import karen from '../../images/karen.png'
import karine from '../../images/karine.png'
import lilit from '../../images/lilit.png'
import minas from '../../images/minas.png'
import nelly from '../../images/nelly.png'
import rema from '../../images/rema.png'
import sona from '../../images/sona.png'
import tiko from '../../images/tiko.png'
import lena from '../../images/lena.png'
import Alisa2 from '../../images/Alisa2.png'
import Armen2 from '../../images/Armen2.png'
import Dan2 from '../../images/Dan2.png'
import Gev2 from '../../images/Gev2.png'
import Gevorg2 from '../../images/Gevorg2.png'
import Harut2 from '../../images/Harut2.png'
import Karen2 from '../../images/Karen2.png'
import Lena2 from '../../images/Lena2.png'
import Lilit2 from '../../images/Lilit2.png'
import Nelly2 from '../../images/Nelly2.png'
import Rema2 from '../../images/Rema2.png'
import Sona2 from '../../images/Sona2.png'

export const Wrap = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr:hover{
        width: 200px;
}

.prod-1{
    max-width: 500px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
}


.prod{
    max-width: 500px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #2C2C2C;
    margin-top: 200px;

}

`)

export const Wrapper = (styled.div`
    width: 100%;
    height: 100%;
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
        align-items: center;
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
        width: 60%;
        position: absolute;
        z-index: 7;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media ${mediasmAndDown}{
            flex-direction: column-reverse;
            width: 55%;
        }
        @media (max-width: 500px){
            width: 230px;
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
        width: 100%;
        @media ${mediasmAndDown}{
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.1em;
        }
        @media (max-width: 500px){
            text-align: center !important;
            margin-bottom: 0;
            margin-top: 8px;
        }
    }

    .banner span{
        color: #FFC72C;
        @media ${mediasmAndDown}{
            font-size: 48px;
            line-height: 60px;
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
            text-align: center;
        }
}


img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`)


export const TeamList = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
   

    .staff_list{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: 1240px){
            width: 90%;
        }
        @media ${mediaxsPlusAndDown}{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        @media ${mediaxsEdgeAndDown}{
            justify-content: flex-start;
        }
        @media only screen and (max-width: 888px){
            justify-content: space-around;
        }
    }

.hr_style{
    width: 64px;
    border: 2px solid #FFC72C;
    margin-top: 8px;
    margin-bottom: 64px;
    cursor: pointer;
    transition: width 1s;
    @media ${mediasmAndDown}{
        margin-bottom: 37px;
        width: 40px;
    }
}

.hr_style:hover{
    width: 140px;
    @media ${mediasmAndDown}{
        width: 100px;
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
    @media ${mediasmAndDown}{
        font-size: 18px;
        line-height: 21px;
    }
}

.wrap_contain{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 56px;
    @media ${mediasmAndDown}{
        margin-top: 48px;
    }

}


.workers{
    width: 224px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    margin: 0 12px 32px 12px;
    @media (max-width: 600px){
        margin: 0 0px 32px 0px;
    }
}

.workers div{
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #2C2C2C;
    margin-bottom: 8px;
}

.workers p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #656565;
}

.workers img{
    width: 100%;
    object-fit: cover;
    margin-bottom: 8px;
    @media ${mediaxsPlusAndDown}{
        width: 344px;
        height: 300px;
    }
}


.add{
    width: 224px;
    height: auto;
    border: 1px solid #FFC72C;
    padding: 4px;
    height: 200px;
    margin: 0 12px 32px 12px;
    @media (max-width: 600px){
        margin: 0 !important;
        width: 340px !important;
        height: 300px;
    }
}

.inside{
    width: 100%;
    background: #FFC72C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.inside p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #222222;
    max-width: 140px;

    @media ${mediaxsPlusAndDown}{
        font-size: 24px;
        line-height: 28px;
        color: #706565;
        max-width: 222px;
    }
}
     
    .box1 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }

    .box2 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }

    .box4 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }

    .box6 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
    
    .box8 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
    .box9 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
    .box10 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
    .box11 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
   
    .box13 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
    .box14 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }
    .box15 {
        position: relative;
        width: 224px;
        height: 200px;
        transition: all .3s linear;
        @media (max-width: 600px){
            width: 340px !important;
            height: 300px;
        }
    }

    .test{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .bg1{ 
        background-image: url(${gevorg});
    }
    .bg2{
        background-image: url(${rema});
    }
    .bg3{
        background-image: url(${karine});
    }
    .bg4{ 
        background-image: url(${alice});
    }
    .bg5{
        background-image: url(${tiko});
    }
    .bg6{
        background-image: url(${karen});
    }
    .bg7{
        background-image: url(${nelly});
    }
    .bg8{
        background-image: url(${armen});
    }
    .bg9{
        background-image: url(${sona});
    }
    .bg10{
        background-image: url(${harut});
    }
    .bg11{
        background-image: url(${lena});
    }
    .bg12{
        background-image: url(${minas});
    }
    .bg13{
        background-image: url(${gev});
    }
    .bg14{
        background-image: url(${lilit});
    }
    .bg15{
        background-image: url(${dan});
    }

    .flip1 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }   

    .flip2 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }   

    .flip3 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip4 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip5 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip6 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip7 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip8 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip9 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip10 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip11 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip12 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip13 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
         z-index: 0;
    }

    .flip14 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }

    .flip15 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position:  center;
        background-size: cover;
        z-index: 0;
    }
   
   .box1:hover .flip1 {
     animation: bgChanges .4s .1s linear forwards;
     opacity: 0;
     background-image: url(${Gevorg2});
   }
   
   .box2:hover .flip2 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Rema2});
  }

  .box3:hover .flip3 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${karine});
  }

  .box4:hover .flip4 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Alisa2});
  }

  .box5:hover .flip5 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${tiko});
  }

  .box6:hover .flip6 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Karen2});
  }

  .box7:hover .flip7 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Nelly2});
  }

  .box8:hover .flip8 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Armen2});
  }

  .box9:hover .flip9 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Sona2});
  }

  .box10:hover .flip10 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Harut2});
  }

  .box11:hover .flip11 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Lena2});
  }

  .box12:hover .flip12 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${minas});
  }

  .box13:hover .flip13 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Gev2});
  }

  .box14:hover .flip14 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Lilit2});
  }

  .box15:hover .flip15 {
    animation: bgChanges .4s .1s linear forwards;
    opacity: 0;
    background-image: url(${Dan2});
  }


   @keyframes bgChanges {
     
     0% {
       opacity: 0;
     }
     10%{
        opacity: 0;
     }
     20%{
        opacity: 0;
     }
     30%{
        opacity: 0;
     }
     40%{
        opacity: 0.1;
     }
     50% {
       opacity: 0.2;
     }
     60% {
        opacity: 0.2;
     }
     70%{
        opacity: 0.3;
     }
     80%{
        opacity: 0.6;
     }
     90%{
        opacity: 0.8;
     }
     100% {
       opacity: 1;
     }
`)

