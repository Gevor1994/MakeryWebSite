import styled from 'styled-components';
import { mediaxsPlusAndDown, mediasmAndDown, mediaxsEdge } from '../../config/style-config'

export const Wrap = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr:hover{
        width: 200px;
}

.hr_style{
    width: 64px;
    border: 2px solid #FFC72C;
    margin-top: 8px;
    margin-bottom: 64px;
    cursor: pointer;
    transition: width 1s;
    cursor: pointer;
    position: relative;
    z-index: 3;
    @media ${mediasmAndDown}{ 
        margin-bottom: 40px;
        width: 40px;
    }
}

.hr_style:hover{
    width: 140px;
    @media ${mediasmAndDown}{ 
        width: 110px;
    }
}


.prod{
    max-width: 500px;
    font-family: Roboto;
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

.wrapping{
    display: flex;
    width: 180px;
    margin: 64px 0 104px;
    flex-direction: column;
    @media ${mediasmAndDown}{
        width: 168px;
        margin: 56px 0 56px;
    }
  }

  .button_brow{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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

export const Wrapper = (styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    @media ${mediasmAndDown}{
        margin-bottom: 48px;
    }
     
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
            width: 95%;
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
            text-align: start;
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


export const Works = (styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 50;    

.works_container{
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    @media ${mediaxsEdge}{
        width: 100%;
    }
}

.works_container div{
    width: 33%;
    margin-bottom: 5px;
    @media ${mediaxsPlusAndDown}{
        width: 100%;
        margin-bottom: 0;
        height: 200px;
        object-fit: cover;
    }
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media ${mediaxsPlusAndDown}{
        object-fit: none;
    }
}

`)
