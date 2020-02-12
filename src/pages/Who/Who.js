import React from 'react'
import { Wrap, Wrapper, Values, History } from './Who.style'
import svg from '../../images/svg.svg'
import bulb from '../../images/bulb.svg'
import compas from '../../images/compas.svg'
import hands from '../../images/hands.svg'
import libra from '../../images/libra.svg'
import people from '../../images/people.svg'
import shook from '../../images/shook.svg'
import who from '../../images/who.jpg'

const Who = React.memo(
    () => {
        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'><img src={who} alt="background" /></div>
                    <div className='global_cover'>
                        <div className="svg_wrapper"><img src={svg} alt="lines" /></div>
                        <div className='banner'>
                            <div className="banner_style">
                                <p className='busy'>BUSINESS AND DIGITAL COLLABORATION</p>
                                <h2> We <span>DREAMED</span> and <span>MADE</span> </h2>
                            </div>
                            <div className="context">Our VISION is to decrease the development gap trends between the technology and human. Our MISSION is to support companies, enterprises and individuals to adapt their business to the current global digitalized world.</div>
                        </div>
                    </div>
                </Wrapper>
                <Values>
                    <div className='contain'>
                        <p className='p-Style'>WHAT WE VALUE</p>
                        <hr className='hr_style'></hr>

                        <div className='values_style'>
                            <div className='value'>
                                <div className='alls'>
                                    <div className='icons'><img src={shook} alt="offers 1" /></div>
                                    <p>Customer Commitment: We develop relationships that make a positive difference in our customers' lives</p>
                                </div>
                                <div className='alls1'>
                                    <div className='icons'>
                                        <img src={hands} alt="offers 2" />
                                    </div>
                                    <p>High Quality: We uphold the highest standards of integrity in all of our actions</p>
                                </div>
                            </div>
                            <div className='value'>
                                <div className='alls'>
                                    <div className='icons'><img src={bulb} alt="offers 3" /></div>
                                    <p>Create WOW: We suggest out of box mindset solutions to our customers</p>
                                </div>
                                <div className='alls1'>
                                    <div className='icons'><img src={libra} alt="offers 4" /></div>
                                    <p>Human Capital Assessment: We value our people, encourage their development and reward their performance</p>
                                </div>
                            </div>
                            <div className='value'>
                                <div className='alls'>
                                    <div className='icons'><img src={people} alt="offers 5" /></div>
                                    <p>Teamwork: Each of us is willing to do everything in his or her power to help the team achieve the overall result faster</p>
                                </div>
                                <div className='alls1'>
                                    <div className='icons'><img src={compas} alt="offers 6" /></div>
                                    <p>Continuously striving to acquire new knowledge. We value knowledge and strive to learn something new each day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Values>
                <History>
                    <h1>HISTORY</h1>
                    <hr></hr>
                    <div className='info_list'>
                        <div className='info'>
                            <div className='icons'>
                                <div className='column'>
                                    <div className='circle'>< div className='circle2'></div></div>
                                    <div className='like_hr'></div>
                                </div>
                            </div>
                            <div className="text_wrap">
                                <h2>2016</h2>
                                <p>Family Network team has started making its first steps in Information Technology sector. A team of two specialists started working on own Customer Relationship Management System product for the company.</p>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='icons'>
                                <div className='column'>
                                    <div className='circle'>< div className='circle2'></div></div>
                                    <div className='like_hr'></div>
                                </div>
                            </div>
                            <div className="text_wrap">
                                <h2>2017</h2>
                                <p>The company was working on projects related to the development of web site and automation of other internal workflows.</p>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='icons'>
                                <div className='column'>
                                    <div className='circle'>< div className='circle2'></div></div>
                                    <div className='like_hr'></div>
                                </div>
                            </div>
                            <div className="text_wrap">
                                <h2>2018</h2>
                                <p>We continued to work on internal projects related to the digitalization of diverse business processes as well as started to offer business consulting services to clients.</p>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='icons'>
                                <div className='column'>
                                    <div className='circle'>< div className='circle2'></div></div>
                                    <div className='like_hr'></div>
                                </div>
                            </div>
                            <div className="text_wrap">
                                <h2>2018</h2>
                                <p>By the end of the year Family Network entered into re-branding processes and became Fnet, meanwhile a new "Makery" brand was created for operating in IT and Business services consultancy.</p>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='icons'>
                                <div className='column'>
                                    <div className='circle'>< div className='circle2'></div></div>
                                    <div className='like_hr'></div>
                                </div>
                            </div>
                            <div className="text_wrap">
                                <h2>2019</h2>
                                <p>In 2019, company has started working on 5 projects, 3 of which include development of businesses from scratch and it is important to mention that all the projects include platform solution services.</p>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='icons'>
                                <div className='column'>
                                    <div className='circle'>< div className='circle2'></div></div>
                                </div>
                            </div>
                            <div className="text_wrap">
                                <h2>2019</h2>
                                <p>Currently “Makery” is a dynamic-fast growing company specialized in consultancy of IT and Business services.</p>
                            </div>
                        </div>
                    </div>
                </History>

            </Wrap>
        )
    }
)

export default Who;