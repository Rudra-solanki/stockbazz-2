import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Background from './sliders-banner-2.jpg'

function App() {
    const sectionStyle = {
        backgroundImage: `url(${Background})`,
      };
    const [isPopupOpen, setIsPopupOpen] = useState({ privacy: false, disclaimer: false, terms: false });
    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container d-flex px-1 justify-content-between">
                        <a className="navbar-brand" style={{ width: '230px', height: '100px' }} href="#">
                            <img src="./images/stockbazz-logo.png" alt="StockBazz" className="logo-img" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#footer">About us</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="https://wa.me/7043164010?text=Hello" target="_blank">Contact
                                        us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section style={sectionStyle} className="section-1 py-5">
                    <div id="carouselExampleInterval" className="carousel slide pt-5" data-bs-ride="carousel">
                        <div className="carousel-inner py-5">
                            <div className="carousel-item active lg:w-75 text-center" data-bs-interval="10000">
                                <img src="./images/section 1/Deposit withdrawal_.png" alt="" />
                                <h5 className="mb-3">Accelerate Your Trading Power</h5>
                                <h1 className="fw-bold">Instant Pay-in/Payout Facilities</h1>
                                <div className="w-100">
                                    <p className="w-75 mb-5 mx-auto">Experience the speed and convenience of instant pay-in/payout
                                        options. With StockBazz Trading,
                                        access your funds swiftly and efficiently, empowering you to make timely trading
                                        decisions
                                        and seize profitable opportunities.</p>
                                </div>
                                <a
                                    href="https://wa.me/7043164010?text=Hello" target="_blank"><button
                                        className=" py-3 px-4 border-0   ">Open Your Trading Account</button></a>
                            </div>
                            <div className="carousel-item lg:w-75 text-center" data-bs-interval="2000">
                                <img src="./images/section 1/Margin.png" alt="" />
                                <h5 className="mb-3">Unlock Limitless Potential of your Investment</h5>
                                <h1 className="fw-bold">500X Extra Margin on Investment</h1>
                                <div className="w-100">
                                    <p className="w-75 mb-5 mx-auto">Take your investments to new heights with our 500X extra margin
                                        offering. Amplify your
                                        trading positions and maximize your profit potential. With StockBazz Trading, the sky's the
                                        limit for your trading ambitions.</p>
                                    <a
                                        href="https://wa.me/7043164010?text=Hello" target="_blank"><button
                                            className=" py-3 px-4 border-0   ">Open Your Trading Account</button></a>
                                </div>
                            </div>
                            <div className="carousel-item lg:w-75 text-center">
                                <img src="./images/section 1/Secure.png" alt="" />
                                <h5 className="mb-3">100% Safe & Secure Investment Options</h5>
                                <h1 className="fw-bold">100% Secure: Your Peace of Mind is Our Priority</h1>
                                <div className="w-100">
                                    <p className="w-75 mb-5 mx-auto">Trade with confidence on our 100% secure trading platform. We
                                        prioritize the safety of your
                                        funds and personal information, utilizing robust security measures to ensure a
                                        worry-free
                                        trading experience. Your peace of mind is our top concern.</p>
                                    <a
                                        href="https://wa.me/7043164010?text=Hello" target="_blank"><button
                                            className=" py-3 px-4 border-0   ">Open Your Trading Account </button></a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <section className="section-introduction text-center py-1 pt-3 px-3 p-md-5">
                    <h6>Introducing Trading Services</h6>
                    <h1 className="fw-bold fs-md-6">Empowering Traders & Investers for Success</h1>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4 col-8 mx-auto">
                            <img src="./images/Side image hand mobile.png" className="w-100" />
                        </div>
                        <div className="col-md-6 px-3 px-md-5 py-2 py-sm-5 text-start">
                            <p>
                                Discover a comprehensive suite of services designed to empower traders and investors on their
                                path to success. From cutting-edge educational resources to personalized support, our services
                                are tailored to meet the unique needs of day traders, investors, and stock market enthusiasts.
                                Unlock your full potential and achieve your financial goals with our expert guidance and
                                innovative solutions. Join us as we empower you to navigate the markets with confidence and
                                seize opportunities for growth and prosperity.</p>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
                                <div className="col m-0 card-custom">
                                    <img src="./images/section 2/Future option.png" width="130px" alt="..." />
                                    <div>
                                        <h5 className="fw-bold">Future Trading</h5>
                                        <p>500 X Time Margin in Intraday</p>
                                        <p>100 X Time Margin in Holding</p>
                                    </div>
                                </div>
                                <div className="col m-0 card-custom">
                                    <img src="./images/section 2/Mcx trading.png" width="130px" alt="..." />
                                    <div>
                                        <h5 className="fw-bold">MCX Trading</h5>
                                        <p>500 X Time Margin in Intraday</p>
                                        <p>100 X Time Margin in Holding</p>
                                    </div>
                                </div>
                                <div className="col m-0 card-custom">
                                    <img src="./images/section 2/Option trading.png" width="130px" alt="..." />
                                    <div>
                                        <h5 className="fw-bold">Options Trading</h5>
                                        <p>100 X Time Margin in Intraday</p>
                                        <p>20 X Time Margin in Holding</p>
                                    </div>
                                </div>
                                <div className="col m-0 card-custom">
                                    <img src="./images/section 2/Portfolio.png" width="130px" alt="..." />
                                    <div>
                                        <h5 className="fw-bold">Portfolio Management*</h5>
                                        <p>4 to 12% daily profit</p>
                                        <p>20% Profit sharing</p>
                                    </div>
                                </div>
                            </div>
                            <h6 className="mt-5 fw-bold">* Minimum Amount Required ₹ 10000/-</h6>
                        </div>
                    </div>
                </section>
                <section className="section-4 p-md-5 p-2">
                    <div className="container-fluid p-2 p-md-5 rounded-4  text-center ">
                        <h3 className="fw-bold fs-md-4 text-white">Why is StockBazz different?</h3>
                        <div className="row px-1 px-md-3 pt-2 pt-md-4 justify-content-center">
                            <div
                                className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                                <img src="./images/section 4/zero commission bannar.png" width="100px" alt="..." />
                                <div className="px-3">
                                    <h6 className="fw-bold">Zero</h6>
                                    <p>Commission Charges</p>
                                </div>
                            </div>
                            <div
                                className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4 pb-2 m-0 section-4-card">
                                <img src="./images/section 4/minimal document.png" width="100px" alt="..." />
                                <div className="px-3">
                                    <h6 className="fw-bold">Minimal</h6>
                                    <p>Documentation</p>
                                </div>
                            </div>
                            <div
                                className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                                <img src="./images/section 4/500x leverage.png" width="100px" alt="..." />
                                <div className="px-3">
                                    <h6 className="fw-bold">500x Leverage</h6>
                                    <p>On All Trades</p>
                                </div>
                            </div>
                            <div
                                className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                                <img src="./images/section 4/indian market.png" width="100px" alt="..." />
                                <div className="px-3">
                                    <h6 className="fw-bold">Indian & Global</h6>
                                    <p>Market Access</p>
                                </div>
                            </div>
                            <div
                                className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                                <img src="./images/section 4/247 deposit withdrawal.png" width="100px" alt="..." />
                                <div className="px-3">
                                    <h6 className="fw-bold">24x7</h6>
                                    <p>Deposit & Withdrawal</p>
                                </div>
                            </div>
                            <div
                                className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                                <img src="./images/section 4/safe transaction.png" width="100px" alt="..." />
                                <div className="px-3">
                                    <h6 className="fw-bold">Transparent</h6>
                                    <p>Transactions</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section-easy-step text-center p-2 p-md-5">
                    <h1 className="my-3 fs-3">Get Your Account In Easy Steps</h1>
                    <p className="mb-3 text-black-50 fw-medium mx-auto w-md-75">Opening a Trading account has never been easier. We've streamlined the process to ensure a hassle-free experience, requiring no extensive documentation. Follow these three simple steps to get your Trading account up and running:</p>
                    <div className="row p-2 p-md-5">
                        <div className="col-sm-4 my-3">
                            <div className="">
                                <div className="card-body d-flex align-items-center flex-column">
                                    <div className="img steps-img-wrapper"><img className="w-100" src="./images/New editing/icon-1.png" /></div>
                                    <h4 className="my-2">Consult with Our Team Expert </h4>
                                    <p className="">Connect with our knowledgeable team of trading experts who are dedicated to guiding you through the account opening process. They will provide you with all the necessary information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-3">
                            <div className="">
                                <div className="card-body d-flex align-items-center flex-column">
                                    <div className="img steps-img-wrapper"><img className="w-100" src="./images/New editing/icon-3.png" /></div>
                                    <h4 className="my-2">Share Your Name (No Paper)</h4>
                                    <p className="">At StockBazz Trading, we have simplified the process. All we need is your name to initiate the account opening process. No Paper-work or any document required to get a Trading ID.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 my-3">
                            <div className="">
                                <div className="card-body d-flex align-items-center flex-column">
                                    <div className="img steps-img-wrapper"><img className="w-100" src="./images/New editing/icon-2.png" /></div>
                                    <h4 className="my-2">Get Your Trading Account</h4>
                                    <p className="">After that, we will swiftly process your account opening request. You'll receive your Trading account details, including your unique login credentials of your account within just 5 minutes.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a href="https://wa.me/7043164010?text=Hello" target="_blank" className="btn bg-danger fs-5 text-white">Open Your Trading Account Now &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                </section>
                <section className="section-6 text-center py-1 pt-3 px-3 p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-9 mx-auto">
                            <img src="./images/Girl laptop.png" className="w-100" />
                        </div>
                        <div className="col-md-6  py-2 px-3 py-sm-5 text-start">
                            <h1>Unlock Your Investment Potential and Stand Out From Crowd</h1>
                            <p className="my-4">In the fast-paced world of investing, it takes something special to stand out from the crowd. At Dabba Trading, we offer you the tools, resources, and expertise to unlock your investment potential and rise above the competition. Experience the ease and convenience of opening a Dabba account today. Our simplified process ensures that you can focus on what matters most – trading and maximizing your investment opportunities.</p>
                            <div className="d-flex flex-column gap-2 mb-4">
                                <div className="d-flex align-items-center fs-6  ">
                                    <div className="me-2 stand-out-icons">
                                        <img className="w-100" src="./images/section-6/20231127_211311_0000.jpg" alt="" />
                                    </div>
                                    Paper-Less Application Process
                                </div>
                                <div className="d-flex align-items-center fs-6  ">
                                    <div className="me-2 stand-out-icons">
                                        <img className="w-100" src="./images/section-6/20231127_211311_0001.jpg" alt="" />
                                    </div>
                                    Get Upto 500X Margin for Your Investment
                                </div>
                                <div className="d-flex align-items-center fs-6  ">
                                    <div className="me-2 stand-out-icons">
                                        <img className="w-100" src="./images/section-6/20231127_211311_0002.jpg" alt="" />
                                    </div>
                                    100% Security Guarantee
                                </div>
                            </div>
                            <a href="https://wa.me/7043164010?text=Hello" target="_blank" className="btn bg-danger fs-5 text-white">Open Your Trading Account Now &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </section>
                <a href="https://wa.me/7043164010?text=Hello" target="_blank" className="whatsup-icon"><i className="fa-brands fa-whatsapp"></i></a>
            </main>
            <footer id="footer" className="bg-black container-fluid text-white p-2 p-lg-5">
                <div className="row pb-4">
                    <div className="col-lg-6 px-2 px-lg-5">
                        <div style={{ width: '300px', height: '100px' }} className="">
                            <img src="./images/stockbazz-logo.png" className="logo-img-footer" alt="" />
                        </div>
                        <h6 className="fs-lg-5 fs-6 fw-light w-lg-75 ps-4">Unlock the potential of Stockbazz and seize new opportunities in the market with our innovative platform and expert guidance</h6>
                        <h6 className="fs-lg-5 fs-6 w-lg-75 ps-4 pt-3 fw-light">Copyright 2023 <b>Stockbazz trade</b>, All Rights Reserved.</h6>
                    </div>
                    <div className="col-lg-6 px-2 px-lg-5 pt-4 pt-lg-0">
                        <h4 className="contact-info-head position-relative ps-4 ps-lg-0">Contact Information</h4>
                        <div className="pt-3 ps-4 ps-lg-0 contact-info">
                            <h4><i className="fa-brands fa-whatsapp"></i> +91 70431 64010</h4>
                            <p>WhatsApp Support Number</p>
                            <h4><i className="fa-solid fa-envelope"></i> stockbazzofficial@gmail.com</h4>
                            <p>Email Us for any Enquiry</p>
                        </div>
                        <div className="row p-1 gap-1 ps-4 ps-lg-0">
                            <a href="https://instagram.com/stockbazzofficial?igshid=MzMyNGUyNmU2YQ==" className="media-icon-wrapper insta-icon"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://youtube.com/@StockBazz?si=o47uNly1ogpMzRXF" className="media-icon-wrapper youtube-icon"><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://www.snapchat.com/add/stockbazz?share_id=Kbr5KUl74Dc&locale=en-IN" className="media-icon-wrapper snap-icon"><i className="fa-brands fa-snapchat"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=61553400194951&mibextid=ZbWKwL" className="media-icon-wrapper facebook-icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://x.com/StockBazz?t=LpBt5rZSbCXR9fAmiKk2bg&s=09" className="media-icon-wrapper x-icon"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/stock-bazz-5229902a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="media-icon-wrapper linkedin-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center footer-2 pt-4 border-1 border-top ">
                    <a
                        className="text-white text-decoration-none mx-3"
                        onClick={() => setIsPopupOpen({ ...isPopupOpen, privacy: true })}
                        id="privacyPolicy"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-white text-decoration-none mx-3"
                        onClick={() => setIsPopupOpen({ ...isPopupOpen, disclaimer: true })}
                        id="disclaimer"
                    >
                        Disclaimer
                    </a>
                    <a
                        className="text-white text-decoration-none mx-3"
                        onClick={() => setIsPopupOpen({ ...isPopupOpen, terms: true })}
                        id="temsCondition"
                    >
                        Terms and Conditions
                    </a>
                </div>
            </footer>
            <Modal show={isPopupOpen.privacy} onHide={() => setIsPopupOpen({ privacy: false, disclaimer: false, terms: false })}>
                <Modal.Header className='popup-heading' closeButton>
                    <Modal.Title>Privacy policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>1. Policy</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>It is the policy of Stockbazz to actively pursue the prevention of money laundering and any activity that facilitates money laundering or the funding of terrorist or criminal activities. Stockbazz is committed to AML compliance in accordance with applicable law and requires its officers, employees, and appointed producers to adhere to these standards in preventing the use of its products and services for money laundering purposes.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>For the purposes of the Policy, money laundering is generally defined as engaging in acts designed to conceal or disguise the true origins of criminally derived proceeds so that the unlawful proceeds appear to have been derived from legitimate origins or constitute legitimate assets.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>2. What is money laundering?</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Money laundering is the process by which criminally obtained money or other assets (criminal property) are exchanged for “clean” money or other assets with no obvious link to their criminal origins.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Criminal property may take any form, including money or money’s worth, securities, tangible property, and intangible property. It also covers money, however come by, which is used to fund terrorism.</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>3. Money laundering activity includes:</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Acquiring, using, or possessing criminal property</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Handling the proceeds of crimes such as theft, fraud, and tax evasion</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Being knowingly involved in any way with criminal or terrorist property</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Entering arrangements to facilitate laundering criminal or terrorist property</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Investing the proceeds of crimes in other financial products</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Investing the proceeds of crimes through the acquisition of property/assets</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Transferring criminal property</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>4. What is Counter Terrorist Financing (CTF)?</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Terrorist financing is the process of legitimate businesses and individuals that may choose to provide funding to resource terrorist activities or organizations for ideological, political, or other reasons. Firms must therefore ensure that: (i) customers are not terrorist organizations themselves; and (ii) they are not providing the means through which terrorist organizations are being funded.</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>5. Source of Funds</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>When a transaction takes place, the source of funds, i.e. how the payment is to be made, from where and by who, must always be ascertained and recorded in the client file (this would usually be achieved through retaining a copy of the cheque or direct debit mandate).</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>6. Suspicious activity</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>There are signs of suspicious activity that suggest money laundering. These are commonly referred to as 'red flags'. If a red flag is detected, additional due diligence will be performed before proceeding with the transaction. If a reasonable explanation is not determined, the suspicious activity shall be reported to the AML Compliance Committee.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>Examples of red flags are:</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer exhibits unusual concern regarding the firm's compliance with government reporting requirements and the firm's AML policies, particularly with respect to his or her identity, type of business and assets, or is reluctant or refuses to reveal any information concerning business activities, or furnishes unusual or suspect identification or business documents.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer wishes to engage in transactions that lack business sense or apparent investment strategy, or are inconsistent with the customer's stated business strategy.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The information provided by the customer that identifies a legitimate source for funds is false, misleading, or substantially incorrect.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Upon request, the customer refuses to identify or fails to indicate any legitimate source for his or her funds and other assets.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer (or a person publicly associated with the customer) has a questionable background or is the subject of news reports indicating possible criminal, civil, or regulatory violations.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer exhibits a lack of concern regarding risks, commissions, or other transaction costs.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer appears to be acting as an agent for an undisclosed principal, but declines or is reluctant, without legitimate commercial reasons, to provide information or is otherwise evasive regarding that person or entity.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer has difficulty describing the nature of his or her business or lacks general knowledge of his or her industry.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer attempts to make frequent or large deposits of currency, insists on dealing only in cash equivalents, or asks for exemptions from the firm's policies relating to the deposit of cash and cash equivalents.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>For no apparent reason, the customer has multiple accounts under a single name or multiple names, with a large number of inter-account or third-party transfers.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer's account has unexplained or sudden extensive activity, especially in accounts that had little or no previous activity.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer's account has a large number of wire transfers to unrelated third parties inconsistent with the customer's legitimate business purpose.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer's account has wire transfers that have no apparent business purpose to or from a country identified as money laundering risk or a bank secrecy haven.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer's account indicates large or frequent wire transfers, immediately withdrawn by check or debit card without any apparent business purpose.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer makes a funds deposit followed by an immediate request that the money be wired out or transferred to a third party, or to another firm, without any apparent business purpose.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer makes a funds deposit for the purpose of purchasing a long-term investment followed shortly thereafter by a request to liquidate the position and transfer of the proceeds out of the account.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The customer requests that a transaction be processed in such a manner to avoid the firm's normal documentation requirements.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>A suspicious transaction will often be one which is inconsistent with a customer's known, legitimate business or personal activities or with the normal business for that type of customer. Therefore, the first key to recognition is knowing enough about the customer's business to recognize that a transaction, or series of transactions, is unusual.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>7. Reporting a Suspicion</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Where, for whatever reason, we suspect that a client, or anybody for whom they are acting, may be undertaking (or attempting to undertake) a transaction involving the proceeds of any crime it must be reported as soon as practicably possible and in writing.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>8. Investigation</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Upon notification to the AML Compliance Committee an investigation will be commenced to determine if a report should be made to the appropriate law enforcement or regulatory agencies. The investigation will include, but not necessarily be limited to, review of all available information, such as payment history, birth dates, and address. If the results of the investigation warrant, a recommendation will be made to the AML Compliance Committee to file the SAR with the appropriate law enforcement or regulatory agency. The AML Compliance Committee is responsible for any notice or filing with law enforcement or regulatory agency.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>9. Freezing of accounts</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Where we know that the funds in an account derive from criminal activity, or that they arise from fraudulent instructions, the account must be frozen. Where it is believed that the account holder may be involved in the fraudulent activity that is being reported, then the account may need to be frozen.</span></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="ok-btn" variant="secondary" onClick={() => setIsPopupOpen({ privacy: false, disclaimer: false, terms: false })}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isPopupOpen.disclaimer} onHide={() => setIsPopupOpen({ privacy: false, disclaimer: false, terms: false })}>
                <Modal.Header className='popup-heading' closeButton>
                    <Modal.Title>Disclaimer</Modal.Title>
                </Modal.Header>
                <Modal.Body><p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>1. High-Risk Investment</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Margin trading involves risks associated with changes in political conditions, economic factors, acts of nature, and other factors. These factors affect the prices of currencies or even their availability for trading.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Speculative trading is a challenging prospect, even for experienced traders who understand all the involved risks. Only funds that would not affect a trader’s financial well-being should be involved in trading.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Margin trading works differently than conservative investment methods. A trader should know that if the market continuously moves against their position, all deposited funds may be lost.</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>2. Other risks</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>We do not guarantee the volume you can trade with or the profits you can make with any portfolio of instruments at any moment in time.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>When using a financial instrument, the client should recognize and accept that they run a high risk of losses and damages. They should also declare that they are willing to take this risk.</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>Clients should only invest in financial instruments if they know and comprehend the risks associated with each financial instrument.</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>3. Web Trading Risks</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>There are certain risks due to the nature of internet-based trading, including the failure of hardware, software, and internet connection. Since we do not control internet providers, their equipment and technology, internet connection speed or reliability, configuration of your equipment or reliability of its connection, we cannot be responsible for communication failures, distortions, or delays when trading via the internet.</span></p>
                    <p style={{ textAlign: 'start' }}><br /></p>
                    <p style={{ textAlign: 'start' }}><span style={{ fontSize: '11pt', color: 'rgb(220, 53, 69)' }}>4. Software risks</span></p>
                    <p style={{ textAlign: 'start' }}><span style={{ color: 'rgb(0,undefined,0)', fontSize: '11pt' }}>The ARK Technologies and MetaTrader 5 trading software use a sophisticated order entry mechanism and order tracking system. We do our best to execute your orders at a price requested. Internet trading does not necessarily reduce risks associated with CFD trading. All quotes and trades are subject to the terms and conditions of our Customer Agreement.</span></p></Modal.Body>
                <Modal.Footer>
                    <Button className="ok-btn" variant="secondary" onClick={() => setIsPopupOpen({ privacy: false, disclaimer: false, terms: false })}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isPopupOpen.terms} onHide={() => setIsPopupOpen({ privacy: false, disclaimer: false, terms: false })}>
                <Modal.Header className='popup-heading' closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body >  <p style={{ textAlign: 'start' }}>
                    <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>
                        These terms and conditions outline the rules and regulations for the use of STOCKBAZZ's Website, located at{' '}
                    </span>
                    <u>
                        <a href='https://www.stockbazz.com' target='_blank' style={{ color: 'rgb(5, 0, 193)', fontSize: '11pt' }}>www.stockbazz.com</a>
                    </u>
                </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use Stockbazz.com if you do not agree to take all of the terms and conditions stated on this page.
                        </span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>
                            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You", and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                        </span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ fontSize: '11pt', color: 'rgb(226, 80, 65)' }}>Cookies :</span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>We employ the use of cookies. By accessing stockbazz.com, you agreed to use cookies in agreement with the STOCKBAZZ'S Privacy Policy.</span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>
                            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        </span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>
                            Unless otherwise stated, Stockbazz and/or its licensors own the intellectual property rights for all material on Stockbazz.com. All intellectual property rights are reserved. You may access this from Stockbazz.com for your own personal use subjected to restrictions set in these terms and conditions.
                        </span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ fontSize: '11pt', color: 'rgb(209, 72, 65)' }}>You must not:</span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>Republish material from Stockbazz.com</span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>Sell, rent or sub-license material from Stockbazz.com</span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>Reproduce, duplicate or copy material from Stockbazz.com</span>
                    </p>
                    <p style={{ textAlign: 'start' }}>
                        <span style={{ color: 'rgb(0, 0, 0)', fontSize: '11pt' }}>Redistribute content from Stockbazz.com</span>
                    </p></Modal.Body>
                <Modal.Footer>
                    <Button className="ok-btn" variant="secondary" onClick={() => setIsPopupOpen({ privacy: false, disclaimer: false, terms: false })}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
