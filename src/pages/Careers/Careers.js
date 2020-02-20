import React from 'react';
import { Wrap, Wrapper , NoWork} from './Careers.style';
import svg from '../../images/svg.svg';
import { Tabs } from 'antd';
import careers from '../../images/careers.jpg'
const { TabPane } = Tabs;

const Careers = React.memo(
    () => {
        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'><img src={careers} alt="background" /></div>
                    <div className='global_cover'>
                        <div className="svg_wrapper"><img src={svg} alt="line" /></div>
                        <div className='banner'>
                            <div className="banner_style">
                                <p className='busy'>BUSINESS AND DIGITAL COLLABORATION</p>
                                <h2>Join our <span>TEAM!</span></h2>
                            </div>
                            <p className="context">Be part of our tem so together we’ll MAKE</p>
                        </div>
                    </div>
                </Wrapper>
                <NoWork>
                    <div className='no_work_container'>
                        <h1>At present we do not have open vacancies. </h1>
                        <p>We hope you will continue to visit our website and check for future opportunities that may match your interests.</p>
                    </div>
                </NoWork>
                {/*<Tabs defaultActiveKey="1" >*/}
                {/*    <TabPane className='tab' tab="MID PHP Laravel Developer" key="1">*/}
                {/*        <div className='test'>*/}
                {/*            <h1>MID LEVEL PHP LARAVEL DEVELOPER</h1>*/}
                {/*            <div className='first_wrappion'>*/}
                {/*                <div className="my">*/}
                {/*                    <div className='style_row'>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Duration:</h3>*/}
                {/*                            <p>Long term</p>*/}
                {/*                        </div>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Education level:</h3>*/}
                {/*                            <p>Bachelor</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <div className='style_row'>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Start date:</h3>*/}
                {/*                            <p>10 Aug 2019</p>*/}
                {/*                        </div>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Work type:</h3>*/}
                {/*                            <p>Full term</p>*/}
                {/*                        </div>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Required languages:</h3>*/}
                {/*                            <p>English, Armenian, Russian</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='style_row1'>*/}
                {/*                    <div className='rows'>*/}
                {/*                        <h3>Job descrition:</h3>*/}
                {/*                        <p>This is a long-term fulltime position. Incumbent will be responsible for and participate in the development and support for ongoing and new projects. </p>*/}
                {/*                    </div>*/}
                {/*                    <div className='rows'>*/}
                {/*                        <p>You are a successful candidate if you have experience with PHP programming, Unix platforms, able to produce readable source code. Knowledge of git is a plus, as is the proper overall sense of humor.</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className='p-styel'>Required qualifications:</div>*/}
                {/*            <div className='second_wrappion'>*/}
                {/*                <div className='left_row'>*/}
                {/*                    <p>• &nbsp; Minimum 2 years in PHP development</p>*/}
                {/*                    <p>• &nbsp; Knowledge of OOP principles</p>*/}
                {/*                    <p>• &nbsp; Knowledge of Laravel Framework</p>*/}
                {/*                    <p>• &nbsp; Experience in designing clean and maintainable APIs</p>*/}
                {/*                    <p>• &nbsp; Experience with AngularJS/React and NodeJS/NPM is a plus</p>*/}
                {/*                    <p>• &nbsp; Familiar with Javascript frameworks, PHP design patterns, implementing UI</p>*/}
                {/*                </div>*/}
                {/*                <div className='right_row'>*/}
                {/*                    <p>• &nbsp; Knowledge of HTML and CSS is essential</p>*/}
                {/*                    <p>• &nbsp; Able to write, debug, and optimize SQL queries</p>*/}
                {/*                    <p>• &nbsp; Experience with GIT</p>*/}
                {/*                    <p>• &nbsp; Self motivated individual</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className='third_row'>*/}
                {/*                <div className='inlin'>*/}
                {/*                    <h2>Application deadline:</h2>*/}
                {/*                    <h1>10 Aug 2019</h1>*/}
                {/*                </div>*/}
                {/*                <p>Send CV to job@makerylabs.com</p>*/}
                {/*                <div className="button_brow">*/}
                {/*                    <div className="wrapping">*/}
                {/*                        <button className="btn">Send</button>*/}
                {/*                        <div className="box-shadow"></div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </TabPane>*/}
                {/*    <TabPane className='tab' tab="SENIOR Front-end Developer" key="2">*/}
                {/*        <div className='test'>*/}
                {/*            <h1>MID LEVEL REACT DEVELOPER</h1>*/}
                {/*            <div className='first_wrappion'>*/}
                {/*                <div className="my">*/}

                {/*                    <div className='style_row'>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Duration:</h3>*/}
                {/*                            <p>Long term</p>*/}
                {/*                        </div>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Education level:</h3>*/}
                {/*                            <p>Bachelor</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                {/*                    <div className='style_row'>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Start date:</h3>*/}
                {/*                            <p>10 Aug 2019</p>*/}
                {/*                        </div>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Work type:</h3>*/}
                {/*                            <p>Full term</p>*/}
                {/*                        </div>*/}
                {/*                        <div className='rows'>*/}
                {/*                            <h3>Required languages:</h3>*/}
                {/*                            <p>English, Armenian, Russian</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className='style_row1'>*/}
                {/*                    <div className='rows'>*/}
                {/*                        <h3>Job descrition:</h3>*/}
                {/*                        <p>This is a long-term fulltime position. Incumbent will be responsible for and participate in the development and support for ongoing and new projects. </p>*/}
                {/*                    </div>*/}
                {/*                    <div className='rows'>*/}
                {/*                        <p>You are a successful candidate if you have experience with JS programming, Unix platforms, able to produce readable source code. Knowledge of git is a plus, as is the proper overall sense of humor.</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className='p-styel'>Required qualifications:</div>*/}
                {/*            <div className='second_wrappion'>*/}
                {/*                <div className='left_row'>*/}
                {/*                    <p>• &nbsp; Minimum 2 years in JS development</p>*/}
                {/*                    <p>• &nbsp; Knowledge of OOP principles</p>*/}
                {/*                    <p>• &nbsp; Knowledge of React Framework</p>*/}
                {/*                    <p>• &nbsp; Experience in designing clean and maintainable APIs</p>*/}
                {/*                    <p>• &nbsp; Experience with AngularJS/Vue and NodeJS/NPM is a plus</p>*/}
                {/*                    <p>• &nbsp; Familiar with Javascript frameworks,  implementing UI</p>*/}
                {/*                </div>*/}
                {/*                <div className='right_row'>*/}
                {/*                    <p>• &nbsp; Knowledge of HTML and CSS is essential</p>*/}
                {/*                    <p>• &nbsp; Able to write, debug</p>*/}
                {/*                    <p>• &nbsp; Experience with GIT</p>*/}
                {/*                    <p>• &nbsp; Self motivated individual</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className='third_row'>*/}
                {/*                <div className='inlin'>*/}
                {/*                    <h2>Application deadline:</h2>*/}
                {/*                    <h1>10 Aug 2019</h1>*/}
                {/*                </div>*/}
                {/*                <p>Send CV to job@makerylabs.com</p>*/}
                {/*                <div class="button_brow">*/}
                {/*                    <div className="wrapping">*/}
                {/*                        <button className="btn">Send</button>*/}
                {/*                        <div className="box-shadow"></div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </TabPane>*/}
                {/*</Tabs>*/}
            </Wrap>
        );
    }

)
export default Careers;