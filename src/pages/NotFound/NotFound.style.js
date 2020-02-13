import styled from 'styled-components';
import {mediamdAndDown, mediasmAndDown} from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
    
    .img_cover{
        position: absolute;
        top: 30px;
        left: 100px;
        z-index: 5000000;
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
        height: 840px;
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
        margin-right: 45px;
        text-align: center;
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
        justify-content: center;
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
        margin-right: 16px;
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



