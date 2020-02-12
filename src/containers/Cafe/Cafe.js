import React  from 'react'
import { Wrap, Wrapper } from './Cafe.style';
import svg from '../../images/svg.svg'
import { Tabs } from 'antd';
import portfolio from '../../images/portfolio.jpg';
import desktop_bar from '../../images/desktop_bar.jpg';
import mobile_bar from '../../images/mobile_bar.jpg';
import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.png';
import Slider from '../../containers/Slider'
import mobileversion from '../../images/mobileversion.png'
import Media from 'react-responsive';
import { xsPlusMin } from '../../config/style-config';



const { TabPane } = Tabs;


const Cafe = React.memo(
    () => {
        const responsive = {
            1400: { items: 4 },
            1240: { items: 4 },
            990: { items: 3 },
            700: { items: 2 },
            690: { items: 1 }
        };
        const partnersList = [partner1, partner2, partner3, partner4];
        const items = [1, 2, 3, 4];
        const partners = partnersList.map(partner => {
            return (
                <div className='simple_parts'>
                    <img key={partner} src={partner} className="slider" alt={partner} />
                </div>
            );
        });

        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'>
                        <Media maxWidth={xsPlusMin - 1}>
                            <img src={mobileversion} alt="page background" />
                        </Media>
                        <Media minWidth={xsPlusMin}>
                            <img src={portfolio} alt="mobile background" />
                        </Media>
                    </div>
                    <div className='global_cover'>
                        <div className="svg_wrapper"><img src={svg} alt="under background" /></div>
                        <div className='banner'>
                            <div className="banner_style">
                                <p className='busy'>BUSINESS AND DIGITAL COLLABORATION</p>
                                <h2>Check out our <span>PORTFOLIO!</span></h2>
                            </div>
                            <p className="context">We are eager to add your product to the list of thing’s we’ve done</p>
                        </div>
                    </div>
                </Wrapper>
                <Tabs defaultActiveKey="1" >
                    <TabPane className='tab' tab="Desktop website" key="1">
                        <div className='test'>
                            <img src={desktop_bar} alt="desktop version" />
                        </div>
                    </TabPane>
                    <TabPane className='tab' tab="Mobile website" key="2">
                        <div className='test2'>
                            <img src={mobile_bar} alt='mobile version' />
                        </div>
                    </TabPane>
                </Tabs>
                <div className="prod">OTHER PROJECTS</div>
                <hr></hr>

                <div className="slider_container">
                    <Slider
                        dotsDisabled={true}
                        items={items}
                        responsive={responsive}
                        showArrows={true}
                        children={partners}
                    />
                </div>
            </Wrap>
        )
    }
)

export default Cafe;