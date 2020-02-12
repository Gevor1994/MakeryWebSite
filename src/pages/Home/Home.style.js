import styled from 'styled-components';
import bodyline from '../../images/bodyline.svg'
import yellow from '../../images/yellow.png'
import { mediamdAndDown, mediasmAndDown, mediasmAndUp, mediaxsPlusAndDown } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;

    hr{
        background: #FFC72C;
        width: 64px;
        height: 4px;
        margin-bottom: 64px;
        border: none;
        transition: width 1s;
        @media ${mediasmAndDown}{
            width: 40px;
            margin-bottom: 32px;
        }
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
        margin-top: 48px;
        @media ${mediasmAndDown}{
            font-size: 18px;
            line-height: 21px;
            margin-top: 0px;
        }
    }

    hr:hover{
        width: 200px;
    }

    .bubble-wrap{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 104px;
        @media ${mediasmAndDown}{
            margin-bottom: 56px;
        }
    }
    
        
    .oop .wrapping{
        margin-left: 64px;
    }

    .wrapping{
        display: flex;
        width: 180px;
        flex-direction: column;
        @media ${mediasmAndDown}{
            width: 168px;
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
      
    
    
    
    
`)

export const Mobile = (styled.div`
    width: 100%;

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
        margin-top: -80px;
        position: relative;
        z-index: 50;
        @media screen and (max-width: 420px){
            margin-top: -59px; 
        }
    }
    
    .mob_what img{
        width: 100%;
        height: 100%;@
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
        font-weight: 500;
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
        margin-bottom: 32px;
        @media only screen and (max-width: 991px) and (min-width: 500px){
            width: 80%
        }
        @media (max-width: 499px) {
            width: 100%
        }
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
    position: relative;

    @media ${mediasmAndDown}{
        height: 560px;
        position: inherit;
    }
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .bg_cover{
        width: 100%;
        height: 100%;
    }

`)

export const Cover = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    justify-content: center;
    align-items: center;
    top: 0;
    
    img{    
        opacity: 0.2;
        width: 100%;
        height: 100%;
    }

    .svg_wrapper{
        width: 100%;
        height: 100%;
        @media ${mediasmAndDown}{
            height: 560px;
        }
    }

    svg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`)

export const Banner = (styled.div`
    width: 100%;
    position: absolute;
    z-index: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    top: 30%;
    @media (max-width: 520px){
        top: 18%;
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
            text-align: center;
            letter-spacing: 0.1em;
            margin-bottom: 16px;
        }
    }

    .divers_wrap{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        @media ${mediasmAndDown}{
            width: 60%;
            justify-content: center;
        }
    }

    .bunner_wrap{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media ${mediasmAndDown}{
            flex-direction: column-reverse;
            width: 100%;
        }
        @media (max-width: 1020px) and (min-width: 992px){
            width: 67%;
        }
    }

    .wrap{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 14px;
        @media ${mediasmAndDown}{
            justify-content: center;
        }
    }

    h1{
        width: 625px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 110px;
        line-height: 90px;
        color: #FFFFFF;
        text-align: right;
        @media (max-width: 1230px){
            font-size: 84px;
            margin-right: 8px;
            width: 480px;
        }
        
        @media (max-width: 1020px){
            width: 500px;
            text-align: center;
        }
        @media (max-width: 600px){
            width: 85%;
            font-size: 72px;
            line-height: 80px;
            text-align: center;
        }
        span{
            @media (max-width: 600px){
                color: #FFC72C;
            }
        }
    }

    .h1_wrapper{
        width: 64%;
        display: flex;
        justify-content: flex-start;
        margin-right: 11px;
        @media ${mediamdAndDown}{
            max-width: 100%;
        }
    }

    .h1_wrapper span{
        @media ${mediasmAndDown}{
            color: #FFC72C;
        }
    }

    .romb{
        width: 170px;
        height: 170px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #FFC72C;
        @media ${mediasmAndDown}{
            display: none;
        }
    }

    .banner{
        width: 160px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFC72C;
    }

    .banner p {
        background: transparent;
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
    }
`)
export const Yellow = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: -10%;
    justify-content: flex-start;
    align-items: center;    
    background-image: url(${yellow});
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
        @media (max-width: 1050px){
            margin-top: 45px;
        }
    }

    .oop{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        @media only screen and (max-width: 1320px){
            margin-top: 170px;
        }
        @media ${mediasmAndDown}{
            width: 60%;
        }
    }

    .inline{
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: flex-start;
       margin-bottom: 40px;
       @media only screen and (max-width: 1100px){
        margin-bottom: 16px;
    }
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
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #434242;
        margin-left: 64px; 
        margin-bottom: 40px;
    }
    
    .hr5{
        width: 128px;
        height: 4px;
        background: #FFC72C;
        margin-right: 24px;
        border: none;
        margin-bottom: 0px !important;
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
        left: 47%;
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




export const JobsList = (styled.div`
    width: 100%;
    height: auto;
    background-image: url(${bodyline});
    background-repeat: no-repeat;
    background-position: right top;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 96px;
    margin-bottom: 64px;
    @media ${mediasmAndDown}{
        padding-top: 0px;
        margin-bottom: 48px;
    }
`)


export const Job = (styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
img{
    width: 100%;
    height: 100%;
}

.top{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    padding-bottom: 4px;
    @media ${mediasmAndDown}{
        padding-bottom: 2px;
    }

}

.saryan{
    width: 40%;
    height: 100%;
}

.img{
    width: 100%;
    height: 100% !important   ;
    
}


.right{
    width: 59.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;

}

.up{
    width: 100%;
    height: 49%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.box_style{
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    background: #FFC72C;
    width: 32.7%;
    p{
        max-width: 105px;
        font-family: Roboto;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #000000;
    }
}

.box_style1{
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    background: #FFC72C;
    width: 20%;
    p{  
        max-width: 105px;
        font-family: Roboto;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #000000;
    }
}
.aok{
    width: 32.7%;
    height: auto;
}


.down{
    width: 100%;
    height: 49%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.4px;

}

.brand{
    width: 66.5%;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    background: #FFC72C;
    p{
        max-width: 105px;
        font-family: Roboto;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #000000;
        text-align: center;
    }
}

.ool{
    width: 32.7%;
    height: 100%;

}



.bottom{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
}

.hms{
    width: 19.5%;
}

.life{
    width: 39%;
}

`)


export const WraperList = (styled.div`
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${mediasmAndDown}{
        display: none;
    }
    
	.scene {
	  width: 170px;
	  height: 170px;
	  perspective: 340px;
	}
	
	.back_off{
		width: 160px;
		height: 160px;
		background: #FFC72C;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	h2{
		font-family: Roboto;
		font-style: normal;
		font-weight: 900;
		font-size: 26px;
		line-height: 33px;
		color: #FFFFFF;
		width: 140px;
	}

	.cube {
	  width: 170px;
	  height: 170px;
	  position: relative;
	  transform-style: preserve-3d;
	  transform: translateZ(-84px);
      transition: transform 0.8s;
      font-family: Roboto;

	}
	
	.cube.show-front  { transform: translateZ(-84px) rotateY(   0deg); }
	.cube.show-right  { transform: translateZ(-84px) rotateY( -90deg); }
	.cube.show-back   { transform: translateZ(-84px) rotateY( -90deg); }
	.cube.show-left   { transform: translateZ(-84px) rotateY(  90deg); }
	.cube.show-top    { transform: translateZ(-84px) rotateX( -90deg); }
	.cube.show-bottom { transform: translateZ(-84px) rotateX(  90deg); }
	
	.cube__face {
	  position: absolute;
	  width: 168px;
	  height: 168px;
      display: flex;
      text-align: center;
	  justify-content: center;
	  align-items: center;
	}
	
	.cube__face--front  { background: #FFC72C; border: 2px solid white; }
	.cube__face--right  { background: #FFC72C; border: 2px solid white; }
	.cube__face--back   { background: #FFC72C; border: 2px solid white; }
	.cube__face--left   { background: #FFC72C; border: 2px solid white; }
	.cube__face--top    { background: #FFC72C; border: 2px solid white; }
	.cube__face--bottom { background: #FFC72C; border: 2px solid white; }
	
	.cube__face--front  { transform: rotateY(  0deg) translateZ(84px); }
	.cube__face--right  { transform: rotateY( 90deg) translateZ(84px); }
	.cube__face--back   { transform: rotateY(180deg) translateZ(84px); }
	.cube__face--left   { transform: rotateY(-90deg) translateZ(84px); }
	.cube__face--top    { transform: rotateX( 90deg) translateZ(84px); }
	.cube__face--bottom { transform: rotateX(-90deg) translateZ(84px); }	

    `)


export const ViewMobile = (styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${mediasmAndDown}{
        margin-bottom: 48px;
    }
   

    .mobile_Job{
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media ${mediaxsPlusAndDown}{
            width: 100%;
        }
    }

    img{
        width: 100%;
        height: 240px;
        object-fit: cover;
    }


`)