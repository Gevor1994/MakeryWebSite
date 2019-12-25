import React, { Component } from 'react'
import svg from '../../images/svg.svg'
import { Wrap, Wrapper, TeamList } from './Team.style'
import teambg from '../../images/teambg.jpg'
import { makeLocalURLwithLocale } from "../../helpers/locationUtils"
import { Link } from 'react-router-dom'

export class Team extends Component {
    render() {
        const { langID } = this.props;
        const careersURL = makeLocalURLwithLocale('/careers', langID);
        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'><img src={teambg} alt="background" /></div>
                    <div className='global_cover'>
                        <div className="svg_wrapper"><img src={svg} alt="line" /></div>
                        <div className='banner'>
                            <p className='busy'>BUSINESS AND DIGITAL COLLABORATION</p>
                            <h2>Our staff always <span>CREATE</span></h2>
                        </div>
                    </div>
                </Wrapper>
                <TeamList>
                    <div className='wrap_contain'>
                        <h1>OUR TEAM</h1>
                        <hr className='hr_style'></hr>
                    </div>
                    <div className="staff_list">
                        <div className='workers'>
                            <div className='box1'>
                                <div className="bg1 test"></div>
                                <div className="flip1"></div>
                            </div>
                            <div>Gevorg Yengibaryan</div>
                            <p>CEO / Founder</p>
                        </div>
                        <div className='workers'>
                            <div className='box2'>
                                <div className="bg2 test"></div>
                                <div className="flip2"></div>
                            </div>
                            <div>Rema Ohanyan</div>
                            <p>Deputy CEO / COO Project Manager</p>
                        </div>
                        <div className='workers'>
                            <div className='box4'>
                                <div className="bg4 test"></div>
                                <div className="flip4"></div>
                            </div>
                            <div>Alisa Gazaryan</div>
                            <p>Head of Human Recoursec</p>
                        </div>
                        <div className='workers'>
                            <div className='box6'>
                                <div className="bg6 test"></div>
                                <div className="flip6"></div>
                            </div>
                            <div>Karen Melikyan</div>
                            <p>Head of Marketing Department</p>
                        </div>
                        <div className='workers'>
                            <div className='box8'>
                                <div className="bg8 test"></div>
                                <div className="flip8"></div>
                            </div>
                            <div>Armen Ghumashyan</div>
                            <p>Graphic Designer</p>
                        </div>
                        <div className='workers'>
                            <div className='box9'>
                                <div className="bg9 test"></div>
                                <div className="flip9"></div>
                            </div>
                            <div>Sona Madoyan</div>
                            <p>Digital Marketing Specialist</p>
                        </div>
                        <div className='workers'>
                            <div className='box10'>
                                <div className="bg10 test"></div>
                                <div className="flip10"></div>
                            </div>
                            <div>Harutyun Arevyan</div>
                            <p>Back-end Developer</p>
                        </div>
                        <div className='workers'>
                            <div className='box11'>
                                <div className="bg11 test"></div>
                                <div className="flip11"></div>
                            </div>
                            <div>Lena Karamyan</div>
                            <p>Back-end Developer</p>
                        </div>
                        <div className='workers'>
                            <div className='box13'>
                                <div className="bg13 test"></div>
                                <div className="flip13"></div>
                            </div>
                            <div>Gevorg Mehrabyan</div>
                            <p>Front-end Developer / React JS Specialist</p>
                        </div>
                        <div className='workers'>
                            <div className='box14'>
                                <div className="bg14 test"></div>
                                <div className="flip14"></div>
                            </div>
                            <div>Lilit Divanyan</div>
                            <p>Front-end Developer</p>
                        </div>
                        <div className='workers'>
                            <div className='box15'>
                                <div className="bg15 test"></div>
                                <div className="flip15"></div>
                            </div>
                            <div>Daniel Danielyan</div>
                            <p>UI/UX Designer</p>
                        </div>
                        <Link to={careersURL}>
                            <div className='add'>
                                <div className='inside'>
                                    <p>Want to become ONE OF US?</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </TeamList>
            </Wrap>

        )
    }
}

export default Team;
