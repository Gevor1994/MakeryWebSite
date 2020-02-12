import React from 'react'
import { connect } from 'react-redux';
import { Wrap, Wrapper, Yellow, NewsList, Services, SecondList, SecondList1, Statistic } from './What.style'
import svg from '../../images/svg.svg'
import mobile_svg from '../../images/mobile_svg.svg'
import imgs from '../../images/imgs.png'
import news1 from '../../images/news1.svg'
import news2 from '../../images/news2.svg'
import news3 from '../../images/news3.svg'
import news4 from '../../images/news4.svg'
import news5 from '../../images/news5.svg'
import news6 from '../../images/news6.svg'
import news7 from '../../images/news7.svg'
import news8 from '../../images/news8.svg'
import news9 from '../../images/news9.svg'
import news10 from '../../images/news10.svg'
import what from '../../images/what.jpg'
import mob_what from '../../images/mob_what.png'
import Media from 'react-responsive';
import { mdMin } from '../../config/style-config';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const  What = React.memo(
    () => {
        const expandIconPosition = 'left';
        return (
            <Wrap>
                <Wrapper>
                    <div className='bg_cover'><img src={what} alt="background" /></div>
                    <div className='global_cover'>
                        <div className="svg_wrapper"><img src={svg} alt="lines" /></div>
                        <div className='banner'>
                            <div className="banner_style">
                                <p className='busy'>BUSINESS AND DIGITAL COLLABORATION</p>
                                <h2> Together let’s <span>CREATE!</span></h2>
                            </div>
                            <div className="context">Makery offers services that covers company's and entreprenuiers needs from A to Z</div>
                        </div>
                    </div>
                </Wrapper>

                <Media maxWidth={mdMin - 1}>
                    <div className="media_wrap">
                        <div className="mob_what">
                            <img src={mob_what} alt="cover img" />
                        </div>
                        <h3>WHAT IS MAKERY</h3>
                        <div className="div_line" />
                        <div className="textor">
                            <p className="describe">
                                Our company does not afraid to implement the most unique ideas and always apply the high-end solutions. Our team leads your business to the ways of tomorrow’s technologies. We create smart products that best meets your needs. Makery make easy for you to dream. And overall we just love what we do!
                            </p>
                        </div>
                        <div className="photo_wrap">
                            <img src={imgs} alt="lines seconds" />
                        </div>
                    </div>
                </Media>
                <Media minWidth={mdMin}>
                    <Yellow>
                        <div className='oop'>
                            <div className='inline'>
                                <hr className='hr'></hr>
                                <p className='what'>WHY MAKERY</p>
                            </div>
                            <p className='div_style'>Our company does not afraid to implement the most unique ideas and always apply the high-end solutions. Our team leads your business to the ways of tomorrow’s technologies. We create smart products that best meets your needs. Makery make easy for you to dream.  And overall we just love what we do!</p>
                        </div>
                        <div className='line'>
                            <div className="line_wrap">
                                <img src={mobile_svg} alt="line" />
                            </div>
                            <div className="desk_wrap">
                                <img src={imgs} alt="background 2" />
                            </div>
                        </div>
                    </Yellow>
                </Media>

                <Media minWidth={800}>
                    <NewsList>
                        <div className="prod">START-UP & BUSINESS CONSUTLANCY SERVICES </div>
                        <hr className='hr_style'></hr>
                        <div className='wrap_news'>
                            <div className='new'>
                                <div className='romb'>
                                    <img src={news1} alt="news 1" />
                                </div>
                                <h3>Business Growth</h3>
                                <p>We help anyone who was an idea and want to implement it into real life, particularly, we develop a business strategy with detailed description starting from business model and value proposition to thoughtful financial projection for 3-5 years.</p>
                            </div>
                            <div className='new'>
                                <div className='romb'>
                                    <img src={news2} alt="news 2" />
                                </div>
                                <h3>Business Transformation</h3>
                                <p>We support our clients to understand that business transformation means much more than just IT services usage. It implies a holistic process transforming across the business. It also implies that this is the only valid strategic process towards achieving corporate vision or way forward. Support</p>
                            </div>
                            <div className='new'>
                                <div className='romb'>
                                    <img src={news3} alt="news 3" />
                                </div>
                                <h3>Business Efficiency</h3>
                                <p>We evaluate the current performance of the clients business, identify the gaps and suggest possible improvement points and as well as implement projects which lead to increase of efficiency of the company operating any sector.</p>
                            </div>
                        </div>
                    </NewsList>

                    <Services>
                        <SecondList>
                            <div className="prod-1">BUSINESS AUTOMASION SERVICES</div>
                            <hr className='hr_style1'></hr>
                            <div className='wrap_news'>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news4} alt="news 4" />
                                    </div>
                                    <h3>Business Growth</h3>
                                    <p>We help anyone who was an idea and want to implement it into real life, particularly, we develop a business strategy with detailed description starting from business model and value proposition to thoughtful financial projection for 3-5 years.</p>
                                </div>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news5} alt="news 5" />
                                    </div>
                                    <h3>Business Transformation</h3>
                                    <p>We support our clients to understand that business transformation means much more than just IT services usage. It implies a holistic process transforming across the business. It also implies that this is the only valid strategic process towards achieving corporate vision or way forward. Support</p>
                                </div>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news6} alt="news 6" />
                                    </div>
                                    <h3>Business Efficiency</h3>
                                    <p>We evaluate the current performance of the clients business, identify the gaps and suggest possible improvement points and as well as implement projects which lead to increase of efficiency of the company operating any sector.</p>
                                </div>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news7} alt="news 7" />
                                    </div>
                                    <h3>Business Efficiency</h3>
                                    <p>We evaluate the current performance of the clients business, identify the gaps and suggest possible improvement points and as well as implement projects which lead to increase of efficiency of the company operating any sector.</p>
                                </div>
                            </div>
                        </SecondList>
                        <div className="prod-1">PLATFORM SOLUTION SERVICES </div>
                        <hr className='hr_style1'></hr>
                        <SecondList1>
                            <div className='wrap_news'>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news8} alt="news 8" />
                                    </div>
                                    <h3>Web development</h3>
                                    <p>We help our clients to become reachable in every point of the world. Through website any company can grow awareness about them and increase the volume of sales.</p>
                                </div>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news9} alt="news 9" />
                                    </div>
                                    <h3>App. Development</h3>
                                    <p>We help our clients to leverage mobile technology for their business. We provide iOS and Android mobile application development services so our clients can reach your customers on their favorite devices.</p>
                                </div>
                                <div className='new'>
                                    <div className='romb'>
                                        <img src={news10} alt="news 10" />
                                    </div>
                                    <h3>Penetration test</h3>
                                    <p>We support our clients to meet compliance requirements and uncover security risks. Makery  team offers penetration testing services based on a custom plan of a multistep attack that targets custom network infrastructure and applications</p>
                                </div>
                            </div>
                        </SecondList1>
                    </Services>
                </Media>
                <Media maxWidth={799}>
                    <div className="collapse-wrap">
                        <h4 className="h_4">START-UP & BUSINESS CONSULTANCY SERVICES</h4>
                        <div className="mr" />
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Business growth" key="1"
                                   extra={<svg width="77" height="71" viewBox="0 0 77 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M61.5983 0.0393505C62.129 -0.113559 62.6832 0.192696 62.8361 0.723391L65.3279 9.37156C65.4808 9.90226 65.1745 10.4564 64.6438 10.6093C64.1131 10.7622 63.559 10.456 63.4061 9.9253L61.579 3.58436C54.8972 15.4486 49.4466 22.9863 41.1361 28.8036C32.3847 34.9296 20.5389 39.0914 0.957924 44.5878L0.417411 42.6622C20.0239 37.1586 31.5531 33.0704 39.9892 27.1652C47.9212 21.6128 53.1873 14.4039 59.8192 2.63333L53.5039 4.45297C52.9732 4.60588 52.419 4.29963 52.2661 3.76893C52.1132 3.23824 52.4194 2.68407 52.9501 2.53116L61.5983 0.0393505ZM20 58.6878H2L2 68.4378H20V58.6878ZM2 56.6878C0.895431 56.6878 0 57.5832 0 58.6878V68.4378C0 69.5423 0.89543 70.4378 2 70.4378H20C21.1046 70.4378 22 69.5423 22 68.4378V58.6878C22 57.5832 21.1046 56.6878 20 56.6878H2ZM29.5 58.6878H47.5V68.4378H29.5V58.6878ZM27.5 58.6878C27.5 57.5832 28.3954 56.6878 29.5 56.6878H47.5C48.6046 56.6878 49.5 57.5832 49.5 58.6878V68.4378C49.5 69.5423 48.6046 70.4378 47.5 70.4378H29.5C28.3954 70.4378 27.5 69.5423 27.5 68.4378V58.6878ZM47.5 42.1878H29.5V51.9378H47.5V42.1878ZM29.5 40.1878C28.3954 40.1878 27.5 41.0832 27.5 42.1878V51.9378C27.5 53.0423 28.3954 53.9378 29.5 53.9378H47.5C48.6046 53.9378 49.5 53.0423 49.5 51.9378V42.1878C49.5 41.0832 48.6046 40.1878 47.5 40.1878H29.5ZM57 58.6878H75V68.4378H57V58.6878ZM55 58.6878C55 57.5832 55.8954 56.6878 57 56.6878H75C76.1046 56.6878 77 57.5832 77 58.6878V68.4378C77 69.5423 76.1046 70.4378 75 70.4378H57C55.8954 70.4378 55 69.5423 55 68.4378V58.6878ZM75 42.1875H57V51.9375H75V42.1875ZM57 40.1875C55.8954 40.1875 55 41.0829 55 42.1875V51.9375C55 53.0421 55.8954 53.9375 57 53.9375H75C76.1046 53.9375 77 53.0421 77 51.9375V42.1875C77 41.0829 76.1046 40.1875 75 40.1875H57ZM57 25.6875H75V35.4375H57V25.6875ZM55 25.6875C55 24.5829 55.8954 23.6875 57 23.6875H75C76.1046 23.6875 77 24.5829 77 25.6875V35.4375C77 36.5421 76.1046 37.4375 75 37.4375H57C55.8954 37.4375 55 36.5421 55 35.4375V25.6875Z" fill="white" />
                                   </svg>
                                   }>
                                <p>We help anyone who was an idea and want to implement it into real life, particularly, we develop a business strategy with detailed description starting from business model and value proposition to thoughtful financial projection for 3-5 years.</p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Business transformation" key="2" extra={
                                <svg width="72" height="79" viewBox="0 0 72 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M72 60.8486V53.7344H21.6V11.0491H28.8L18 0.377808L7.2 11.0491H14.4V18.1633H0V25.2776H14.4V53.7344C14.4 57.6472 17.64 60.8486 21.6 60.8486H50.4V67.9628H43.2L54 78.6342L64.8 67.9628H57.6V60.8486H72ZM28.8 25.2776H50.4V46.6202H57.6V25.2776C57.6 21.3647 54.36 18.1633 50.4 18.1633H28.8V25.2776Z" fill="white" />
                                </svg>
                            }>
                                <p>We support our clients to understand that business transformation means much more than just IT services usage. It implies a holistic process transforming across the business. It also implies that this is the only valid strategic process towards achieving corporate vision or way forward. Support </p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Business efficiency" key="3" extra={
                                <svg width="90" height="89" viewBox="0 0 90 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.221 6.12793L72.5 17L83.0023 17.9266L89.5 18.5L84.8876 23.1124L72.5 35.5H56.5L38.5 52L35 47.5L52 32V17L65.9567 4.17493L70.5 0L71.221 6.12793ZM72.0606 21.9806L78.3899 22.5391L70.429 30.5H58.2156L57 29.5546V19.1958L66.6777 10.3029L67.5343 17.5842L68.0094 21.6232L72.0606 21.9806ZM77.3705 38.2715C79.8475 46.6257 79.4925 55.5646 76.3609 63.696C73.2292 71.8275 67.4966 78.6953 60.0558 83.23C52.615 87.7645 43.8835 89.7115 35.221 88.7676C26.5586 87.8236 18.4514 84.0417 12.1618 78.011C5.87235 71.9801 1.75352 64.0388 0.446754 55.4237C-0.860008 46.8085 0.718666 38.0029 4.93687 30.3783C9.15513 22.7537 15.7762 16.7378 23.7691 13.2676C31.762 9.79736 40.6781 9.0675 49.1289 11.1917L47.4722 17.7828C40.4754 16.0242 33.0934 16.6285 26.4757 19.5017C19.8581 22.3749 14.3763 27.3556 10.8838 33.6683C7.39133 39.9811 6.08427 47.2716 7.16618 54.4044C8.24809 61.5374 11.6582 68.1122 16.8656 73.1053C22.073 78.0985 28.7853 81.2297 35.9573 82.0112C43.1292 82.7927 50.3584 81.1808 56.519 77.4264C62.6796 73.672 67.4258 67.986 70.0187 61.2535C72.6115 54.5211 72.9054 47.1202 70.8545 40.2034L77.3705 38.2715ZM56.5462 56.6888C58.105 52.9926 58.4201 48.8896 57.4441 44.9987L52.0406 46.3541C52.7228 49.0735 52.5025 51.9408 51.4131 54.524C50.3237 57.1073 48.4241 59.2665 46.0006 60.676C43.5772 62.0857 40.7613 62.6694 37.9772 62.3391C35.1932 62.0089 32.5919 60.7827 30.5654 58.8453C28.539 56.908 27.1971 54.3644 26.7422 51.5979C26.2873 48.8315 26.7439 45.9922 28.0433 43.5079C29.3426 41.0236 31.4142 39.0289 33.946 37.8246C36.4776 36.6202 39.3323 36.2715 42.0794 36.8308L43.1909 31.3719C39.2599 30.5715 35.1754 31.0707 31.5528 32.7939C27.9303 34.5172 24.966 37.3713 23.1068 40.926C21.2477 44.4807 20.5943 48.5435 21.2452 52.502C21.8962 56.4603 23.8161 60.0999 26.7157 62.8721C29.6153 65.6442 33.3374 67.3988 37.3211 67.8712C41.3047 68.3438 45.334 67.5085 48.8016 65.4916C52.2693 63.4746 54.9873 60.3851 56.5462 56.6888Z" fill="white" />
                                </svg>
                            }>
                                <p>We evaluate the current performance of the clients business, identify the gaps and suggest possible improvement points and as well as implement projects which lead to increase of efficiency of the company operating any sector.</p>
                            </Panel>
                        </Collapse>
                        <h4 className="h_4">BUSINESS AUTOMATION SERVICES</h4>
                        <div className="mr" />
                        <Collapse expandIconPosition={expandIconPosition} >
                            <Panel header="IT workflows" key="4" extra={
                                <svg width="98" height="96" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66675 65.8157H29.3334V92.5698H2.66675V65.8157Z" fill="white" />
                                    <path d="M78.1331 34.5133L63.1998 19.5308C62.1331 18.4606 62.1331 16.8553 63.1998 15.7851L78.1331 0.802635C79.1998 -0.267545 80.7998 -0.267545 81.8664 0.802635L96.7998 15.7851C97.8664 16.8553 97.8664 18.4606 96.7998 19.5308L81.8664 34.5133C80.7998 35.5835 79.1998 35.5835 78.1331 34.5133Z" fill="white" />
                                    <path d="M16 33.7107C24.8366 33.7107 32 26.5237 32 17.6581C32 8.79247 24.8366 1.60547 16 1.60547C7.16344 1.60547 0 8.79247 0 17.6581C0 26.5237 7.16344 33.7107 16 33.7107Z" fill="white" />
                                    <path d="M80 95.2456C88.8366 95.2456 96 88.0586 96 79.1929C96 70.3272 88.8366 63.1401 80 63.1401C71.1634 63.1401 64 70.3272 64 79.1929C64 88.0586 71.1634 95.2456 80 95.2456Z" fill="white" />
                                    <path d="M13.3333 47.0876H18.6666V60.4648H13.3333V47.0876Z" fill="white" />
                                    <path d="M16 39.0615L8 49.7629H24L16 39.0615Z" fill="white" />
                                    <path d="M37.3333 14.9824H50.6666V20.3333H37.3333V14.9824Z" fill="white" />
                                    <path d="M58.6665 17.6581L47.9999 9.63184V25.6843L58.6665 17.6581Z" fill="white" />
                                    <path d="M77.3334 39.0615H82.6667V52.4385H77.3334V39.0615Z" fill="white" />
                                    <path d="M80 60.4648L88 49.7629H72L80 60.4648Z" fill="white" />
                                </svg>
                            }>
                                <p>We deliver services that consolidate the most innovative solution, increase productivity and amaze users.</p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Customer workflows" key="5" extra={
                                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.1809 54.5023C29.6495 54.5023 23.0139 50.6377 19.1413 45.5224C0.561645 45.5224 0 71.979 0 71.979H72.3573C72.3573 71.979 73.8158 45.405 52.9216 45.405C49.0535 50.5835 42.7123 54.5023 36.1809 54.5023Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.7438 22.7861C51.7438 30.3981 44.7731 44.9539 36.1672 44.9539C27.5749 44.9539 20.5996 30.3936 20.5996 22.7861C20.5996 15.1787 27.5704 9.00244 36.1672 9.00244C44.7731 9.00696 51.7438 15.1832 51.7438 22.7861Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M58.692 16.2171C58.692 14.7904 56.6991 13.6391 54.226 13.6301V10.691C54.226 10.2531 54.3936 0 36.2216 0C18.0587 0 18.2263 10.2531 18.2263 10.691V13.734C18.181 13.734 18.1447 13.7204 18.104 13.7204C15.6445 13.7204 13.6652 14.8536 13.6652 16.2577V28.6914C13.6652 30.0865 15.649 31.2242 18.104 31.2242C20.5589 31.2242 22.5519 30.0865 22.5519 28.6914V16.2577C22.5519 16.0636 22.4296 15.8875 22.3571 15.7069V12.3163C22.3571 12.0048 21.0526 4.26647 36.2216 4.26647C51.3952 4.26647 49.8189 12.0048 49.8189 12.3163V15.8875C49.7917 16.0004 49.7057 16.0997 49.7057 16.2171V28.9352C49.7057 30.3664 51.7122 31.5267 54.1989 31.5267C54.2532 31.5267 54.294 31.5086 54.3483 31.5086V36.1544H49.8914V40.5337H58.7373L58.692 16.2171Z" fill="white" />
                                </svg>
                            }>
                                <p>We develop system solutions that involve company’s customers into an interactive connections and processes with their company. </p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Employee workflows" key="6" extra={
                                <svg width="82" height="83" viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 35.5385C4 18.114 18.0772 4 35.4286 4C52.7799 4 66.8572 18.114 66.8572 35.5385C66.8572 52.9629 52.7799 67.0769 35.4286 67.0769C18.0772 67.0769 4 52.9629 4 35.5385ZM35.4286 0C15.8557 0 0 15.9173 0 35.5385C0 55.1596 15.8557 71.0769 35.4286 71.0769C44.4945 71.0769 52.7629 67.662 59.0276 62.0457C59.0362 62.0551 59.0449 62.0643 59.0536 62.0735L59.0681 62.0884L59.0835 62.104L78.5835 81.668C79.3632 82.4503 80.6296 82.4524 81.4119 81.6726C82.1942 80.8929 82.1963 79.6265 81.4165 78.8442L61.9165 59.2802C61.8945 59.2581 61.872 59.2366 61.8492 59.2158C67.4518 52.9292 70.8572 44.6316 70.8572 35.5385C70.8572 15.9173 55.0014 0 35.4286 0ZM39.8751 35.6104C44.4315 35.6104 48.1251 31.9045 48.1251 27.3331C48.1251 22.7617 44.4315 19.0559 39.8751 19.0559C35.3188 19.0559 31.6251 22.7617 31.6251 27.3331C31.6251 31.9045 35.3188 35.6104 39.8751 35.6104ZM56.375 48.0258C56.375 52.1643 39.875 52.1643 39.875 52.1643C39.875 52.1643 23.375 52.1643 23.375 48.0258C23.375 43.0595 31.4188 37.6794 39.875 37.6794C48.3312 37.6794 56.375 43.0595 56.375 48.0258ZM21.3125 25.2637V31.4715H27.5V35.6101H21.3125V41.8179H17.1875V35.6101H11V31.4715H17.1875V25.2637H21.3125Z" fill="white" />
                                </svg>
                            }>
                                <p>We build internal intelligent services for a company that eliminate frustration and improve employee satisfaction with efficient.</p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Build your own workflow" key="7" extra={
                                <svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M70.3211 0H25.1147C23.6329 0 22.4358 1.18766 22.4358 2.65771V22.2583H2.6789C1.19713 22.2583 0 23.446 0 24.916V47.5066C0 48.9766 1.19713 50.1643 2.6789 50.1643H47.8853C49.3671 50.1643 50.5642 48.9766 50.5642 47.5066V27.906H70.3211C71.8029 27.906 73 26.7183 73 25.2483V2.65771C73 1.18766 71.8029 0 70.3211 0ZM44.8716 44.5167H28.1284V27.906H44.8716V44.5167ZM67.3073 22.2583H50.5642V5.64764H67.3073V22.2583Z" fill="white" />
                                </svg>
                            }>
                                <p>We assist our clients to reimagine every process as a digital workflow and transform each of their offline actions into timesaving, easy and useful processes. </p>
                            </Panel>
                        </Collapse>
                        <h4 className="h_4">START-UP & BUSINESS CONSULTANCY SERVICES</h4>
                        <div className="mr" />
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Web development" key="8" extra={
                                <svg width="92" height="52" viewBox="0 0 92 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.30407 26.7071L26.858 35.0285V41.475L0 29.0095V24.2075L26.858 11.7748V18.2214L6.30407 26.7071Z" fill="white" />
                                    <path d="M37.6602 52H32.4397L52.4026 0H57.5903L37.6602 52Z" fill="white" />
                                    <path d="M85.6631 26.5098L63.96 17.9911V11.7419L92 24.1746V28.9766L63.96 41.4421V35.1271L85.6631 26.5098Z" fill="white" />
                                </svg>
                            }>
                                <p>We help our clients to become reachable in every point of the world. Through website any company can grow awareness about them and increase the volume of sales.</p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="App. development" key="9" extra={
                                <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.0601 65.4966H31.621C31.8915 65.4966 32.151 65.3888 32.3423 65.1968C32.5336 65.0049 32.641 64.7446 32.641 64.4732C32.641 64.2018 32.5336 63.9415 32.3423 63.7496C32.151 63.5576 31.8915 63.4498 31.621 63.4498H3.0601C2.78957 63.4498 2.53012 63.342 2.33882 63.1501C2.14753 62.9581 2.04006 62.6978 2.04006 62.4264V3.07015C2.04006 2.79873 2.14753 2.53843 2.33882 2.34651C2.53012 2.15459 2.78957 2.04677 3.0601 2.04677H45.9015C46.172 2.04677 46.4314 2.15459 46.6227 2.34651C46.814 2.53843 46.9215 2.79873 46.9215 3.07015V13.304C46.9215 13.5754 47.029 13.8357 47.2202 14.0276C47.4115 14.2196 47.671 14.3274 47.9415 14.3274C48.212 14.3274 48.4715 14.2196 48.6628 14.0276C48.8541 13.8357 48.9615 13.5754 48.9615 13.304V3.07015C48.9615 1.37747 47.5886 0 45.9015 0H3.0601C1.37296 0 0 1.37747 0 3.07015V62.4264C0 64.1191 1.37296 65.4966 3.0601 65.4966Z" fill="white" />
                                    <path d="M36.7212 21.4906V62.4264C36.7212 64.1191 38.0942 65.4966 39.7813 65.4966H62.222C63.9091 65.4966 65.2821 64.1191 65.2821 62.4264V21.4906C65.2821 19.7979 63.9091 18.4204 62.222 18.4204H39.7813C38.0942 18.4204 36.7212 19.7979 36.7212 21.4906ZM63.242 21.4906V62.4264C63.242 62.6978 63.1346 62.9581 62.9433 63.15C62.752 63.342 62.4925 63.4498 62.222 63.4498H39.7813C39.5108 63.4498 39.2513 63.342 39.06 63.15C38.8687 62.9581 38.7613 62.6978 38.7613 62.4264V21.4906C38.7613 21.2192 38.8687 20.9589 39.06 20.7669C39.2513 20.575 39.5108 20.4672 39.7813 20.4672H62.222C62.4925 20.4672 62.752 20.575 62.9433 20.7669C63.1346 20.9589 63.242 21.2192 63.242 21.4906Z" fill="white" />
                                    <path d="M24.4807 59.355C25.6074 59.355 26.5208 58.4389 26.5208 57.309C26.5208 56.179 25.6074 55.2629 24.4807 55.2629C23.354 55.2629 22.4407 56.179 22.4407 57.309C22.4407 58.4389 23.354 59.355 24.4807 59.355Z" fill="white" />
                                    <path d="M51.0016 59.355C52.1283 59.355 53.0417 58.4389 53.0417 57.309C53.0417 56.179 52.1283 55.2629 51.0016 55.2629C49.8749 55.2629 48.9615 56.179 48.9615 57.309C48.9615 58.4389 49.8749 59.355 51.0016 59.355Z" fill="white" />
                                    <path d="M15.6547 47.1443V38.6135C15.6547 37.1011 16.2022 35.6507 17.1768 34.5813C18.1513 33.5119 19.4731 32.9111 20.8513 32.9111C22.2296 32.9111 23.5513 33.5119 24.5259 34.5813C25.5004 35.6507 26.0479 37.1011 26.0479 38.6135V47.1443C28.5631 45.2967 30.2052 42.1718 30.2052 38.6135C30.2052 32.9339 26.0271 28.3491 20.8513 28.3491C15.6755 28.3491 11.4975 32.9339 11.4975 38.6135C11.4975 42.1718 13.1396 45.2967 15.6547 47.1443ZM36.1085 57.7052L26.6715 52.5502C26.3181 52.3906 25.944 52.2993 25.549 52.2993H23.9693V38.6135C23.9693 36.7203 22.5766 35.192 20.8513 35.192C19.1261 35.192 17.7334 36.7203 17.7334 38.6135V63.1111L10.6037 61.4688C10.4374 61.446 10.2919 61.4004 10.1048 61.4004C9.46042 61.4004 8.8784 61.6969 8.46268 62.1531L6.82056 63.9779L17.089 75.2459C17.6502 75.8617 18.4401 76.2495 19.2924 76.2495H33.4063C34.9653 76.2495 36.1709 74.995 36.3995 73.3299L37.9585 61.3092C37.9793 61.1495 38.0001 60.9898 38.0001 60.853C38.0001 59.4388 37.2102 58.207 36.1085 57.7052Z" fill="white" />
                                </svg>
                            }>
                                <p>We help our clients to leverage mobile technology for their business. We provide iOS and Android mobile application development services so our clients can reach your customers on their favorite devices.</p>
                            </Panel>
                        </Collapse>
                        <Collapse expandIconPosition={expandIconPosition}>
                            <Panel header="Penetration test" key="10" extra={
                                <svg width="94" height="56" viewBox="0 0 94 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39996 4.13855V51.3179H84.6V4.13855C84.6 3.04092 84.1048 1.98828 83.2234 1.21216C82.342 0.436035 81.1465 0 79.9 0H14.1C12.8534 0 11.658 0.436035 10.7766 1.21216C9.89514 1.98828 9.39996 3.04092 9.39996 4.13855ZM80.84 3.31104H13.1599V48.0076H80.84V3.31104ZM37.67 51.4077H0V53.2937C0 54.6824 2.62354 55.1797 4.7 55.1797H89.3C91.3765 55.1797 94 54.6824 94 53.2937V51.4077H56.3297C56.2069 51.839 55.9291 52.2248 55.5364 52.507C55.1167 52.8086 54.5915 52.9732 54.0498 52.9731H39.9498C39.4082 52.9729 38.8832 52.8082 38.4636 52.5067C38.071 52.2245 37.7931 51.8388 37.67 51.4077ZM48.8659 13.6021L57.1144 17.3433C57.8791 17.6893 58.3817 18.5077 58.3817 19.4149C58.3817 29.7641 52.5434 35.5302 48.8616 37.1997C48.3547 37.4289 47.7833 37.4289 47.2764 37.1997C42.6796 35.114 37.7606 28.6978 37.7606 19.4149C37.7606 18.5077 38.2633 17.6893 39.0323 17.3433L47.2807 13.6021C47.5319 13.4886 47.8013 13.4302 48.0733 13.4302C48.3453 13.4302 48.6147 13.4886 48.8659 13.6021ZM48.0712 16.4828L48.0755 34.3003C52.1009 32.121 55.4862 26.9909 55.6279 19.9106L48.0712 16.4828Z" fill="white" />
                                </svg>
                            }>
                                <p>We support our clients to meet compliance requirements and uncover security risks. Makery  team offers penetration testing services based on a custom plan of a multistep attack that targets custom network infrastructure and applications</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Media>
                <div className="prod-1">STATISTICS</div>
                <hr className='hr_style2'></hr>
                <Statistic>
                    <div className='static-wrap'>
                        <p className='stylish'>In 2019:</p>
                        <div className='numbers'>
                            <div className="wrap_div">
                                <div className="ookla">
                                    <div className='scop'>
                                        <h1>5</h1>
                                        <p>Projects</p>
                                    </div>
                                    <div className='scop'>
                                        <h1>68</h1>
                                        <p>Meetings</p>
                                    </div>
                                </div>
                                <div className="ookla">
                                    <div className='scop'>
                                        <h1>6</h1>
                                        <p>New Employees</p>
                                    </div>
                                    <div className='scop'>
                                        <h1>7234</h1>
                                        <p>Cups of coffee</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <h1>52</h1>
                                <p>New Employees</p>
                            </div>
                        </div>
                    </div>
                </Statistic>
            </Wrap >
        )
    }
)

export default connect(
    ({ App }) => ({
        langID: App.get('langID'),
    })
)(What);