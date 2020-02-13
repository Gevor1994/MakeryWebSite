import React, {Component} from 'react';
import {Wrapper,  Banner, Wrap, Cover, WraperList } from './NotFound.style';
import svg from '../../images/svg.svg'
import error_bg from '../../images/error_bg.png';
import makery from "../../images/makery.png";
import { Link } from 'react-router-dom'

class NotFound extends Component {
    state = {
        arr: [
            "cube show-front",
            "cube show-right",
            "cube show-bottom",
            "cube show-top",
            "cube show-left",
            "cube show-back"
        ],
        index: 0,
    }
    componentDidMount() {
        setInterval(_ => {
            if (this.state.index > this.state.arr.length - 2) {
                this.setState({index: 0})
            } else {
                this.setState({index: this.state.index + 1})
            }
        }, 3000)
    }

    render() {
        return (
            <Wrap>
                <Wrapper>
                    <div className='img_cover'>
                        <Link to='/'><img src={makery} alt="Global Link" /></Link>
                    </div>
                    <div className='bg_cover'><img src={error_bg} alt="background"/></div>
                    <Cover id='cover'>
                        <div className="svg_wrapper"><img src={svg} alt="lines"/></div>
                        <Banner>
                            <div className="bunner_wrap">
                                <div className="divers_wrap"><p className='busy'>OOPS! WE’RE SORRY THAT WE BROUGHT YOU THE</p>
                                </div>
                                <div className='wrap'>
                                    <h1>WRONG WAY</h1>
                                    <WraperList>
                                        <div className="scene">
                                            <div className={this.state.arr[this.state.index]}>
                                                <div className="cube__face cube__face--front">
                                                    <div className='back_off'>
                                                        <h2>404</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--back">
                                                    <div className='back_off'>
                                                        <h2>404</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--right">
                                                    <div className='back_off'>
                                                        <h2>404</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--left">
                                                    <div className='back_off'>
                                                        <h2>404</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--top">
                                                    <div className='back_off'>
                                                        <h2>404</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--bottom">
                                                    <div className='back_off'>
                                                        <h2>404</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </WraperList>
                                </div>
                            </div>
                        </Banner>
                    </Cover>
                </Wrapper>
            </Wrap>
        );
    }
}

export default NotFound;
