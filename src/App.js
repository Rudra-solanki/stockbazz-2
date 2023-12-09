import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex px-1 justify-content-between">
                <a className="navbar-brand" style={{width: '230px', height: '100px'}} href="#">
                    {/* <img src="./images/Transparent black.png" alt="Bootstrap" className="logo-img"> */}
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
        <section className="section-1 py-5">
            <div id="carouselExampleInterval" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-inner py-5">
                    <div className="carousel-item active lg:w-75 text-center" data-bs-interval="10000">
                        {/* <img src="./images/section 1/Deposit withdrawal_.png" alt=""> */}
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
                        {/* <img src="./images/section 1/Margin.png" alt=""> */}
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
                        {/* <img src="./images/section 1/Secure.png" alt=""> */}
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
                    {/* <img src="./images/Side image hand mobile.png" className="w-100" /> */}
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
                            {/* <img src="./images/section 2/Future option.png" width="130px" alt="..."> */}
                            <div>
                                <h5 className="fw-bold">Future Trading</h5>
                                <p>500 X Time Margin in Intraday</p>
                                <p>100 X Time Margin in Holding</p>
                            </div>
                        </div>
                        <div className="col m-0 card-custom">
                            {/* <img src="./images/section 2/Mcx trading.png" width="130px" alt="..."> */}
                            <div>
                                <h5 className="fw-bold">MCX Trading</h5>
                                <p>500 X Time Margin in Intraday</p>
                                <p>100 X Time Margin in Holding</p>
                            </div>
                        </div>
                        <div className="col m-0 card-custom">
                            {/* <img src="./images/section 2/Option trading.png" width="130px" alt="..."> */}
                            <div>
                                <h5 className="fw-bold">Options Trading</h5>
                                <p>100 X Time Margin in Intraday</p>
                                <p>20 X Time Margin in Holding</p>
                            </div>
                        </div>
                        <div className="col m-0 card-custom">
                            {/* <img src="./images/section 2/Portfolio.png" width="130px" alt="..."> */}
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
                        {/* <img src="./images/section 4/zero commission bannar.png" width="100px" alt="..."> */}
                        <div className="px-3">
                            <h6 className="fw-bold">Zero</h6>
                            <p>Commission Charges</p>
                        </div>
                    </div>
                    <div
                        className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4 pb-2 m-0 section-4-card">
                        {/* <img src="./images/section 4/minimal document.png" width="100px" alt="..."> */}
                        <div className="px-3">
                            <h6 className="fw-bold">Minimal</h6>
                            <p>Documentation</p>
                        </div>
                    </div>
                    <div
                        className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                        {/* <img src="./images/section 4/500x leverage.png" width="100px" alt="..."> */}
                        <div className="px-3">
                            <h6 className="fw-bold">500x Leverage</h6>
                            <p>On All Trades</p>
                        </div>
                    </div>
                    <div
                        className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                        {/* <img src="./images/section 4/indian market.png" width="100px" alt="..."> */}
                        <div className="px-3">
                            <h6 className="fw-bold">Indian & Global</h6>
                            <p>Market Access</p>
                        </div>
                    </div>
                    <div
                        className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                        {/* <img src="./images/section 4/247 deposit withdrawal.png" width="100px" alt="..."> */}
                        <div className="px-3">
                            <h6 className="fw-bold">24x7</h6>
                            <p>Deposit & Withdrawal</p>
                        </div>
                    </div>
                    <div
                        className="px-0 text-start m-2 md:m-1 col-lg-2  col-6 rounded-4  pb-2 m-0 section-4-card">
                        {/* <img src="./images/section 4/safe transaction.png" width="100px" alt="..."> */}
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
                        <div className="img steps-img-wrapper"><img className="w-100" src="sliders-banner-2.png.jpg"/></div>
                        <h4 className="my-2">Consult with Our Team Expert </h4>
                        <p className="">Connect with our knowledgeable team of trading experts who are dedicated to guiding you through the account opening process. They will provide you with all the necessary information.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 my-3">
                  <div className="">
                    <div className="card-body d-flex align-items-center flex-column">
                        <div className="img steps-img-wrapper"><img className="w-100" src="sliders-banner-2.png.jpg"/></div>
                        <h4 className="my-2">Share Your Name (No Paper)</h4>
                        <p className="">At StockBazz Trading, we have simplified the process. All we need is your name to initiate the account opening process. No Paper-work or any document required to get a Trading ID.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 my-3">
                  <div className="">
                    <div className="card-body d-flex align-items-center flex-column">
                        <div className="img steps-img-wrapper"><img className="w-100" src="sliders-banner-2.png.jpg" /></div>
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
                                <img className="w-100" src="sliders-banner-2.png.jpg" alt="" />
                            </div>
                            Paper-Less Application Process
                        </div>
                        <div className="d-flex align-items-center fs-6  ">
                            <div className="me-2 stand-out-icons">
                                <img className="w-100" src="sliders-banner-2.png.jpg" alt=""/>
                            </div>
                            Get Upto 500X Margin for Your Investment
                        </div>
                        <div className="d-flex align-items-center fs-6  ">
                            <div className="me-2 stand-out-icons">
                                <img className="w-100" src="sliders-banner-2.png.jpg" alt="" />
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
                <div style={{width: '300px', height: '100px'}} className="">
                    <img src="sliders-banner-2.png.jpg" className="logo-img-footer" alt="" />
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
            <a className="text-white text-decoration-none mx-3" id="privacyPolicy">Privacy Policy</a>
            <a className="text-white text-decoration-none mx-3" id="disclaimer">Disclaimer</a>
            <a className="text-white text-decoration-none mx-3" id="temsCondition">Terms and Conditions</a>
        </div>
    </footer>
    <div className="pop-up-wraper privacy-popup-wraper">
        <div className="pop-up-privacy-policy">
            <div className="head-of-pop-up bg-black text-white d-flex justify-content-between align-items-center p-3">
                <h5>Privacy Policy</h5>
                <i className="fa-solid fa-x" id="privacyPolicyClose"></i>
            </div>
            <div className="body-of-pop-up bg-white p-3 text-black">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores est nihil odio aspernatur iure temporibus aliquam cumque. Aspernatur magni voluptatibus distinctio vel aliquam velit odio quas, esse corrupti non harum labore numquam nam similique mollitia. Dolor, doloremque consectetur ullam, laboriosam accusamus placeat, velit et ea quisquam obcaecati voluptatem quo dolore fugit possimus numquam explicabo labore! Repellat, commodi dolorem. Ex voluptas enim eos quia sed dolores iste id similique reprehenderit nesciunt sint, architecto at eligendi aliquid. Tempore totam officia voluptate? Est ipsam fuga dolorum sint eaque ratione! Officiis eligendi, ad veniam numquam praesentium eaque quis voluptatibus, enim magnam placeat at veritatis eum exercitationem quisquam pariatur cum quod corrupti, ipsa distinctio omnis laudantium hic alias deserunt illum? Nam magnam veniam error omnis quas earum aut ea debitis officia! Autem fugiat tempora aspernatur accusantium error sapiente facilis! Veritatis ducimus sunt, placeat sequi iusto neque harum! Alias vitae facilis voluptates commodi nesciunt ipsum nihil. Ipsam exercitationem minus, facere quos itaque consequuntur nulla nihil alias atque ullam mollitia, magnam quidem, officiis quo necessitatibus dolorum odio quam molestias tempore asperiores fugiat ratione a. Vitae eius molestias corrupti repellendus velit ex aliquid cumque, debitis at enim officiis provident ea quaerat nesciunt laboriosam necessitatibus qui libero corporis culpa ipsa nulla perspiciatis nisi quidem dignissimos? Aliquid ipsam ex repudiandae eius nisi magni et facere veniam similique quod praesentium eveniet suscipit fugiat possimus, incidunt perspiciatis. Asperiores ratione architecto distinctio. Quisquam facilis provident vel magnam temporibus. Ipsum cum provident ipsam consectetur aliquid nemo repellat optio nulla obcaecati repudiandae quas exercitationem quaerat distinctio nam vero in ex modi impedit est, veniam repellendus quam. Nam consequatur, accusantium mollitia at reiciendis quo voluptate aperiam dolores sunt neque officia quaerat enim a quod atque iste expedita voluptatum excepturi debitis et assumenda dignissimos asperiores. Ipsam, non quia saepe, possimus quis iure impedit perspiciatis iusto odio voluptatibus nesciunt repellendus a placeat incidunt ex repudiandae quibusdam sed odit. Porro maxime esse qui fugiat tempore molestias earum consequatur corporis nemo voluptate fugit ab sint aspernatur expedita sed libero nam aliquid, officia magnam doloribus facere reiciendis aliquam. Labore omnis, laboriosam harum, consequatur rerum tempora laudantium unde ipsa at eveniet iure quasi error, quis eius! Iste commodi quas eveniet molestias doloremque officiis aperiam enim natus at autem, id aliquid maiores modi voluptates et, fugiat minima. Voluptatem hic placeat aspernatur culpa quis voluptate, porro odit at a harum deserunt perferendis, laboriosam saepe consequatur quasi inventore pariatur cumque. Itaque minima dolores voluptatem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores est nihil odio aspernatur iure temporibus aliquam cumque. Aspernatur magni voluptatibus distinctio vel aliquam velit odio quas, esse corrupti non harum labore numquam nam similique mollitia. Dolor, doloremque consectetur ullam, laboriosam accusamus placeat, velit et ea quisquam obcaecati voluptatem quo dolore fugit possimus numquam explicabo labore! Repellat, commodi dolorem. Ex voluptas enim eos quia sed dolores iste id similique reprehenderit nesciunt sint, architecto at eligendi aliquid. Tempore totam officia voluptate? Est ipsam fuga dolorum sint eaque ratione! Officiis eligendi, ad veniam numquam praesentium eaque quis voluptatibus, enim magnam placeat at veritatis eum exercitationem quisquam pariatur cum quod corrupti, ipsa distinctio omnis laudantium hic alias deserunt illum? Nam magnam veniam error omnis quas earum aut ea debitis officia! Autem fugiat tempora aspernatur accusantium error sapiente facilis! Veritatis ducimus sunt, placeat sequi iusto neque harum! Alias vitae facilis voluptates commodi nesciunt ipsum nihil. Ipsam exercitationem minus, facere quos itaque consequuntur nulla nihil alias atque ullam mollitia, magnam quidem, officiis quo necessitatibus dolorum odio quam molestias tempore asperiores fugiat ratione a. Vitae eius molestias corrupti repellendus velit ex aliquid cumque, debitis at enim officiis provident ea quaerat nesciunt laboriosam necessitatibus qui libero corporis culpa ipsa nulla perspiciatis nisi quidem dignissimos? Aliquid ipsam ex repudiandae eius nisi magni et facere veniam similique quod praesentium eveniet suscipit fugiat possimus, incidunt perspiciatis. Asperiores ratione architecto distinctio. Quisquam facilis provident vel magnam temporibus. Ipsum cum provident ipsam consectetur aliquid nemo repellat optio nulla obcaecati repudiandae quas exercitationem quaerat distinctio nam vero in ex modi impedit est, veniam repellendus quam. Nam consequatur, accusantium mollitia at reiciendis quo voluptate aperiam dolores sunt neque officia quaerat enim a quod atque iste expedita voluptatum excepturi debitis et assumenda dignissimos asperiores. Ipsam, non quia saepe, possimus quis iure impedit perspiciatis iusto odio voluptatibus nesciunt repellendus a placeat incidunt ex repudiandae quibusdam sed odit. Porro maxime esse qui fugiat tempore molestias earum consequatur corporis nemo voluptate fugit ab sint aspernatur expedita sed libero nam aliquid, officia magnam doloribus facere reiciendis aliquam. Labore omnis, laboriosam harum, consequatur rerum tempora laudantium unde ipsa at eveniet iure quasi error, quis eius! Iste commodi quas eveniet molestias doloremque officiis aperiam enim natus at autem, id aliquid maiores modi voluptates et, fugiat minima. Voluptatem hic placeat aspernatur culpa quis voluptate, porro odit at a harum deserunt perferendis, laboriosam saepe consequatur quasi inventore pariatur cumque. Itaque minima dolores voluptatem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores est nihil odio aspernatur iure temporibus aliquam cumque. Aspernatur magni voluptatibus distinctio vel aliquam velit odio quas, esse corrupti non harum labore numquam nam similique mollitia. Dolor, doloremque consectetur ullam, laboriosam accusamus placeat, velit et ea quisquam obcaecati voluptatem quo dolore fugit possimus numquam explicabo labore! Repellat, commodi dolorem. Ex voluptas enim eos quia sed dolores iste id similique reprehenderit nesciunt sint, architecto at eligendi aliquid. Tempore totam officia voluptate? Est ipsam fuga dolorum sint eaque ratione! Officiis eligendi, ad veniam numquam praesentium eaque quis voluptatibus, enim magnam placeat at veritatis eum exercitationem quisquam pariatur cum quod corrupti, ipsa distinctio omnis laudantium hic alias deserunt illum? Nam magnam veniam error omnis quas earum aut ea debitis officia! Autem fugiat tempora aspernatur accusantium error sapiente facilis! Veritatis ducimus sunt, placeat sequi iusto neque harum! Alias vitae facilis voluptates commodi nesciunt ipsum nihil. Ipsam exercitationem minus, facere quos itaque consequuntur nulla nihil alias atque ullam mollitia, magnam quidem, officiis quo necessitatibus dolorum odio quam molestias tempore asperiores fugiat ratione a. Vitae eius molestias corrupti repellendus velit ex aliquid cumque, debitis at enim officiis provident ea quaerat nesciunt laboriosam necessitatibus qui libero corporis culpa ipsa nulla perspiciatis nisi quidem dignissimos? Aliquid ipsam ex repudiandae eius nisi magni et facere veniam similique quod praesentium eveniet suscipit fugiat possimus, incidunt perspiciatis. Asperiores ratione architecto distinctio. Quisquam facilis provident vel magnam temporibus. Ipsum cum provident ipsam consectetur aliquid nemo repellat optio nulla obcaecati repudiandae quas exercitationem quaerat distinctio nam vero in ex modi impedit est, veniam repellendus quam. Nam consequatur, accusantium mollitia at reiciendis quo voluptate aperiam dolores sunt neque officia quaerat enim a quod atque iste expedita voluptatum excepturi debitis et assumenda dignissimos asperiores. Ipsam, non quia saepe, possimus quis iure impedit perspiciatis iusto odio voluptatibus nesciunt repellendus a placeat incidunt ex repudiandae quibusdam sed odit. Porro maxime esse qui fugiat tempore molestias earum consequatur corporis nemo voluptate fugit ab sint aspernatur expedita sed libero nam aliquid, officia magnam doloribus facere reiciendis aliquam. Labore omnis, laboriosam harum, consequatur rerum tempora laudantium unde ipsa at eveniet iure quasi error, quis eius! Iste commodi quas eveniet molestias doloremque officiis aperiam enim natus at autem, id aliquid maiores modi voluptates et, fugiat minima. Voluptatem hic placeat aspernatur culpa quis voluptate, porro odit at a harum deserunt perferendis, laboriosam saepe consequatur quasi inventore pariatur cumque. Itaque minima dolores voluptatem.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
