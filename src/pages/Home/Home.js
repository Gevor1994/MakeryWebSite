import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Wrapper, Job, Banner, Wrap, Cover, ViewMobile, Mobile, Yellow, JobsList, WraperList} from './Home.style'
import svg from '../../images/svg.svg'
import staff from '../../images/staff.jpg'
import saryan from '../../images/saryan.png'
import element from '../../images/element.png'
import lifepack from '../../images/lifepack.png'
import fnet from '../../images/fnet.png'
import hms from '../../images/hms.png'
import bg from '../../images/bg.png'
import Media from 'react-responsive';
import {mdMin} from '../../config/style-config';
import mob_what from '../../images/mob_what.png'
import lines from '../../images/lines.svg'
import img_1 from '../../images/img_1.png'
import img_2 from '../../images/img_2.png'
import img_3 from '../../images/img_3.png'
import img_4 from '../../images/img_4.png'
import img_5 from '../../images/img_5.png'
import {makeLocalURLwithLocale} from "../../helpers/locationUtils";
import {Link} from 'react-router-dom'
import {Translate} from "react-i18nify";


class Home extends Component {
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
        const {langID} = this.props;
        const whoURL = makeLocalURLwithLocale('/who-are-we', langID);
        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'><img src={bg} alt="background"/></div>
                    <Cover id='cover'>
                        <div className="svg_wrapper"><img src={svg} alt="lines"/></div>
                        <Banner>
                            <div className="bunner_wrap">
                                <div className="divers_wrap"><p className='busy'><Translate value={'application.lil'} /></p>
                                </div>
                                <div className='wrap'>
                                    <h1>YOU DREAM WE <span>MAKE</span></h1>
                                    <WraperList>
                                        <div className="scene">
                                            <div className={this.state.arr[this.state.index]}>
                                                <div className="cube__face cube__face--front">
                                                    <div className='back_off'>
                                                        <h2>STRATEGY</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--back">
                                                    <div className='back_off'>
                                                        <h2>PLANNING</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--right">
                                                    <div className='back_off'>
                                                        <h2>SMM</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--left">
                                                    <div className='back_off'>
                                                        <h2>BRANDING</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--top">
                                                    <div className='back_off'>
                                                        <h2>EVENTS</h2>
                                                    </div>
                                                </div>
                                                <div className="cube__face cube__face--bottom">
                                                    <div className='back_off'>
                                                        <h2>WEBSITES</h2>
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
                <Media maxWidth={mdMin - 1}>
                    <Mobile>
                        <div className="media_wrap">
                            <div className="mob_what">
                                <img src={mob_what} alt="background bottom"/>
                            </div>
                            <h3>WHAT IS MAKERY</h3>
                            <div className="div_line"/>
                            <div className="textor">
                                <p className="describe">
                                    Makery is a rapidly evolving company specialized in consultancy of IT and Business
                                    services. The company support companies to grow, increase the efficiency or
                                    transform the businness into digital one in line to digitalization trends. In whole,
                                    Makery offers services that covers company's and entreprenuiers needs from A to Z.!
                                </p>
                            </div>
                            <div className="photo_wrap">
                                <img src={staff} alt="staff photos"/>
                            </div>
                            <div className="bubble-wrap">
                                <div className="wrapping">
                                    <button className="btn">Read more</button>
                                    <div className="box-shadow"></div>
                                </div>
                            </div>
                        </div>
                    </Mobile>
                </Media>
                <Media minWidth={mdMin}>
                    <Yellow>
                        <div className='oop'>
                            <div className='inline'>
                                <hr className='hr5'></hr>
                                <p className='what'>WHY MAKERY</p>
                            </div>
                            <p className='div_style'>Our company does not afraid to implement the most unique ideas and
                                always apply the high-end solutions. Our team leads your business to the ways of
                                tomorrow’s technologies. We create smart products that best meets your needs. Makery
                                make easy for you to dream. And overall we just love what we do!</p>
                            <div className="wrapping">
                                <Link to={whoURL}>
                                    <button className="btn">Read more</button>
                                </Link>
                                <div className="box-shadow"></div>
                            </div>
                        </div>
                        <div className='line'>
                            <div className="line_wrap">
                                <img src={lines} alt="lines"/>
                            </div>
                            <div className="desk_wrap">
                                <img src={staff} alt="staff photos"/>
                            </div>
                        </div>
                    </Yellow>
                </Media>
                <div className="prod">RECENT JOBS</div>
                <hr></hr>
                <Media maxWidth={799}>
                    <ViewMobile>
                        <div className="mobile_Job">
                            <img src={img_1} alt="1880"/>
                            <img src={img_2} alt="element"/>
                            <img src={img_3} alt="fnet"/>
                            <img src={img_4} alt="hms"/>
                            <img src={img_5} alt="lifepack"/>
                        </div>
                    </ViewMobile>
                </Media>
                <Media minWidth={800}>
                    <JobsList>
                        <Job>
                            <div className='top'>
                                <div className='saryan'>
                                    <img className='img' src={saryan} alt="1880"/>
                                </div>
                                <div className='right'>
                                    <div className='up'>
                                        <div className='box_style'>
                                            <p>Web design & Development</p>
                                        </div>
                                        <div className='aok'><img src={element} alt="element"/></div>
                                        <div className='box_style'>
                                            <p>Branding Marketing Web design Development</p>
                                        </div>
                                    </div>
                                    <div className='down'>
                                        <div className='ool'>
                                            <img src={fnet} alt="fnet"/>
                                        </div>
                                        <div className='brand'>
                                            <p>Branding Marketing Web design Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div className='hms'><img src={hms} alt="hms"/></div>
                                <div className='box_style1'>
                                    <p>Branding Marketing Web design Development</p>
                                </div>
                                <div className='life'><img src={lifepack} alt="lifepack"/></div>
                                <div className='box_style1'>
                                    <p>Branding Marketing Web design Development</p>
                                </div>
                            </div>
                        </Job>
                    </JobsList>
                </Media>

                <div className="bubble-wrap">
                    <div className="wrapping">
                        <button className="btn">See more</button>
                        <div className="box-shadow"></div>
                    </div>
                </div>
            </Wrap>
        );
    }
}

export default connect(
    ({App}) => ({
        langID: App.get('langID'),
    })
)(Home);