import React  from 'react'
import { connect } from 'react-redux';
import { Wrap, Wrapper, Works } from './Portfolio.style';
import svg from '../../images/svg.svg'
import works1 from '../../images/works1.png'
import works2 from '../../images/works2.png'
import works3 from '../../images/works3.png'
import works4 from '../../images/works4.png'
import works5 from '../../images/works5.png'
import works6 from '../../images/works6.png'
import { Link } from 'react-router-dom'
import { makeLocalURLwithLocale } from "../../helpers/locationUtils";
import portfolio from '../../images/portfolio.jpg';
import mobileversion from '../../images/mobileversion.png'
import Media from 'react-responsive';
import { xsPlusMin } from '../../config/style-config';

const Portfolio = React.memo(
    (props) => {
        const { langID } = props;
        const registerURL = makeLocalURLwithLocale('/bar', langID);
        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'>
                        <Media maxWidth={xsPlusMin - 1}>
                            <img src={mobileversion} alt="background portfolio" />
                        </Media>
                        <Media minWidth={xsPlusMin}>
                            <img src={portfolio} alt="background portfolio" />
                        </Media>
                    </div>
                    <div className='global_cover'>
                        <div className="svg_wrapper"><img src={svg} alt="lines" /></div>
                        <div className='banner'>
                            <div className="banner_style">
                                <p className='busy'>BUSINESS AND DIGITAL COLLABORATION</p>
                                <h2>Check out our <span>PORTFOLIO!</span></h2>
                            </div>
                            <p className="context">We are eager to add your product to the list of thing’s we’ve done</p>
                        </div>
                    </div>
                </Wrapper>
                <div className="prod">PORTFOLIO</div>
                <hr className='hr_style'></hr>
                <Works>
                    <div className="works_container">
                        <div >
                            <Link to={registerURL}>
                                <img src={works1} alt="work 1" />
                            </Link>
                        </div>
                        <div>
                            <img src={works2} alt="work 2" />
                        </div>
                        <div>
                            <img src={works3} alt="work 3" />
                        </div>
                        <div>
                            <img src={works4} alt="work 4" />
                        </div>
                        <div>
                            <img src={works5} alt="work 5" />
                        </div>
                        <div>
                            <img src={works6} alt="work 6" />
                        </div>
                    </div>
                </Works>
                <div className="button_brow">
                    <div className="wrapping">
                        <button className="btn">Load more</button>
                        <div className="box-shadow"></div>
                    </div>
                </div>

            </Wrap>
        )
    }
)

export default connect(
    ({ App }) => ({
        langID: App.get('langID'),
    })
)(Portfolio);