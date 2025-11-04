import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const BlogClassic = () => {
    useEffect(()=>{
        document.title="Blog Classic - Educad"
    },[])
  return (
    <div>
        <main>
      
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Blog Classic</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a> <Link to = "/">Home</Link></a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a><Link to = "/blockclassic">Blog Classic</Link></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="blog-classNameic-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-5 order-2 order-lg-1 mt-lg-50 mt-md-50 mt-xs-50">
                            <div className="blog-sidebar-wrap widget-wrapper pb-20">
                                <div className="sidebar-widget-wrap">
                                    <h4 className="widget-title">Search</h4>
                                    <div className="search-form">
                                        <form action="#">
                                            <div className="input-wrap">
                                                <input type="email" placeholder="Search"/>
                                                <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget-wrap">
                                    <h4 className="widget-title">Recent Post</h4>
                                    <div className="recent-post-wrapper">
                                        <div className="recent-post-wrap">
                                            <div className="recent-post-img">
                                                <img src="./assets/img/blog/post-1.jpg" alt="post"/>
                                            </div>
                                            <div className="recent-post-content">
                                                <h4>
                                                    <a><Link to = "/blockdetails">
                                                        Online Education Course The Expert Mentors
                                                    </Link></a>
                                                </h4>
                                                <span>22 Dec 2022</span>
                                            </div>
                                        </div>
                                        <div className="recent-post-wrap">
                                            <div className="recent-post-img">
                                                <img src="./assets/img/blog/post-2.jpg" alt="post"/>
                                            </div>
                                            <div className="recent-post-content">
                                                <h4>
                                                    <a ><Link to = "/blockdetails">
                                                        Best Online Course Highly The Education
                                                    </Link></a>
                                                </h4>
                                                <span>22 Dec 2022</span>
                                            </div>
                                        </div>
                                        <div className="recent-post-wrap">
                                            <div className="recent-post-img">
                                                <img src="./assets/img/blog/post-3.jpg" alt="post"/>
                                            </div>
                                            <div className="recent-post-content">
                                                <h4>
                                                    <a ><Link to = "/blockdetails">
                                                        Online Education Course The Expert Mentors
                                                    </Link></a>
                                                </h4>
                                                <span>22 Dec 2022</span>
                                            </div>
                                        </div>
                                        <div className="recent-post-wrap">
                                            <div className="recent-post-img">
                                                <img src="./assets/img/blog/post-4.jpg" alt="post"/>
                                            </div>
                                            <div className="recent-post-content">
                                                <h4>
                                                    <a href="#">
                                                        Best Online Course Highly The Education
                                                    </a>
                                                </h4>
                                                <span>22 Dec 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget-wrap">
                                    <h4 className="widget-title">Categories</h4>
                                    <div className="widget-content">
                                        <div className="category-list">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Web Design</span>
                                                        <b>35</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> App
                                                            Landing</span>
                                                        <b>94</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Web
                                                            Development</span>
                                                        <b>25</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Web
                                                            Consulting</span>
                                                        <b>18</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> App
                                                            Categories</span>
                                                        <b>14</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Digital
                                                            Marketing</span>
                                                        <b>12</b>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget-wrap">
                                    <h4 className="widget-title">Need Help You?</h4>
                                    <div className="widget-content">
                                        <p className="widget-content-text">
                                            The full spiffing good time no biggie is cack is the good
                                        </p>
                                        <div className="contact-list">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-regular fa-phone-plus"></i>
                                                        (208) 555-0112
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-regular fa-location-plus"></i>
                                                        6391 Elgin St. Celina, Delaware 10299
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa-regular fa-envelope"></i>
                                                        kenzi.lawson@example.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget-wrap">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tags">
                                        <a href="#">Web Design</a>
                                        <a href="#">Digital Marketing</a>
                                        <a href="#">App Categories</a>
                                        <a href="#">App Landing</a>
                                        <a href="#">UI Design</a>
                                        <a href="#">Photography</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 order-1 order-lg-2">
                            <div className="blog-classNameic">
                                <div className="thumb">
                                    <img src="./assets/img/blog/blog-13.jpg" alt="blog"/>
                                </div>
                                <div className="content">
                                    <div className="meta-wrapper">
                                        <div className="meta-author">
                                            <a href="#">
                                                <img src="./assets/img/blog/blog-author-1.jpg" alt=""/>
                                                Joner Smith
                                            </a>
                                        </div>
                                        <div className="meta-comment">
                                            <a href="#">
                                                <i className="fa-regular fa-message-lines"></i>
                                                Comment
                                            </a>
                                        </div>
                                        <div className="meta-date">
                                            <a href="#">
                                                <i className="fa-regular fa-calendar-days"></i>
                                                22 Dec 2023
                                            </a>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h3>
                                            <a >
                                                <Link to = "/blockdetails">
                                                The Future Of Virtual Management Of Modern Agency
                                            </Link></a>
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Objectively redefine out-of-the-box technologies for multimedia based
                                            networks.
                                            Proactively the architect economically sound synergy with progressive value.
                                            Authoritatively engage out-of-is the box users for interoperable core
                                            competencies.
                                            Appropriately pontificate B2B strategic theme of time areas rather than
                                            professional
                                            metrics. Monotonectally visualize high-payoff manufactured products with
                                            professional metrics. Continually synergize extensive imperatives whereas
                                            real-time
                                            e-services. Enthusiastically online promote technically sound core
                                            competencies
                                            via
                                            flexible.
                                        </p>
                                    </div>
                                    <div className="theme-btn">
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-classNameic">
                                <div className="thumb">
                                    <img src="./assets/img/blog/blog-14.jpg" alt="blog"/>
                                </div>
                                <div className="content">
                                    <div className="meta-wrapper">
                                        <div className="meta-author">
                                            <a href="#">
                                                <img src="./assets/img/blog/blog-author-1.jpg" alt="blog"/>
                                                Joner Smith
                                            </a>
                                        </div>
                                        <div className="meta-comment">
                                            <a href="#">
                                                <i className="fa-regular fa-message-lines"></i>
                                                Comment
                                            </a>
                                        </div>
                                        <div className="meta-date">
                                            <a href="#">
                                                <i className="fa-regular fa-calendar-days"></i>
                                                22 Dec 2023
                                            </a>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h3>
                                            <a ><Link to = "/blockdetails">
                                                The standard chunk Lorem Ipsum since is the communication
                                            </Link></a>
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Objectively redefine out-of-the-box technologies for multimedia based
                                            networks.
                                            Proactively the architect economically sound synergy with progressive value.
                                            Authoritatively engage out-of-is the box users for interoperable core
                                            competencies.
                                            Appropriately pontificate B2B strategic theme of time areas rather than
                                            professional
                                            metrics. Monotonectally visualize high-payoff manufactured products with
                                            professional metrics. Continually synergize extensive imperatives whereas
                                            real-time
                                            e-services. Enthusiastically online promote technically sound core
                                            competencies
                                            via
                                            flexible.
                                        </p>
                                    </div>
                                    <div className="theme-btn">
                                        <a ><Link to = "/blockdetails">Read More</Link></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-classNameic">
                                <div className="thumb">
                                    <img src="./assets/img/blog/blog-13.jpg" alt="blog"/>
                                </div>
                                <div className="content">
                                    <div className="meta-wrapper">
                                        <div className="meta-author">
                                            <a href="#">
                                                <img src="./assets/img/blog/blog-author-1.jpg" alt="blog"/>
                                                Joner Smith
                                            </a>
                                        </div>
                                        <div className="meta-comment">
                                            <a href="#">
                                                <i className="fa-regular fa-message-lines"></i>
                                                Comment
                                            </a>
                                        </div>
                                        <div className="meta-date">
                                            <a href="#">
                                                <i className="fa-regular fa-calendar-days"></i>
                                                22 Dec 2023
                                            </a>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h3>
                                            <a >
                                                <Link to = "/blockdetails">
                                                The Best Design Support Of Modern Communication
                                            </Link></a>
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Objectively redefine out-of-the-box technologies for multimedia based
                                            networks.
                                            Proactively the architect economically sound synergy with progressive value.
                                            Authoritatively engage out-of-is the box users for interoperable core
                                            competencies.
                                            Appropriately pontificate B2B strategic theme of time areas rather than
                                            professional
                                            metrics. Monotonectally visualize high-payoff manufactured products with
                                            professional metrics. Continually synergize extensive imperatives whereas
                                            real-time
                                            e-services. Enthusiastically online promote technically sound core
                                            competencies
                                            via
                                            flexible.
                                        </p>
                                    </div>
                                    <div className="theme-btn">
                                        <a><Link to = "/blockdetails">Read More</Link></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-classNameic">
                                <div className="swiper blog-classNameic-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
                                    <div className="swiper-wrapper" style={{transform: 'translate3d(-1080px, 0px, 0px)', transitionDuration: '0ms'}}>
                                        
                                        
                                        
                                    <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="0" style={{Width: "510px", marginRight: "30px"}}>
                                            <div className="thumb">
                                                <img src="./assets/img/blog/blog-13.jpg" alt="blog"/>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style={{Width: "510px", marginRight: "30px"}}>
                                            <div className="thumb">
                                                <img src="./assets/img/blog/blog-13.jpg" alt="blog"/>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-active" data-swiper-slide-index="2"style={{Width: "510px", marginRight: "30px"}}>
                                            <div className="thumb">
                                                <img src="./assets/img/blog/blog-13.jpg" alt="blog"/>
                                            </div>
                                        </div></div>
                                </div>
                                <div className="content">
                                    <div className="meta-wrapper">
                                        <div className="meta-author">
                                            <a href="#">
                                                <img src="./assets/img/blog/blog-author-1.jpg" alt="blog"/>
                                                Joner Smith
                                            </a>
                                        </div>
                                        <div className="meta-comment">
                                            <a href="#">
                                                <i className="fa-regular fa-message-lines"></i>
                                                Comment
                                            </a>
                                        </div>
                                        <div className="meta-date">
                                            <a href="#">
                                                <i className="fa-regular fa-calendar-days"></i>
                                                22 Dec 2023
                                            </a>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h3>
                                            <a >
                                                <Link to = "/blockdetails">
                                                The Best Design Support Of Modern Communication
                                                </Link>
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Objectively redefine out-of-the-box technologies for multimedia based
                                            networks.
                                            Proactively the architect economically sound synergy with progressive value.
                                            Authoritatively engage out-of-is the box users for interoperable core
                                            competencies.
                                            Appropriately pontificate B2B strategic theme of time areas rather than
                                            professional
                                            metrics. Monotonectally visualize high-payoff manufactured products with
                                            professional metrics. Continually synergize extensive imperatives whereas
                                            real-time
                                            e-services. Enthusiastically online promote technically sound core
                                            competencies
                                            via
                                            flexible.
                                        </p>
                                    </div>
                                    <div className="theme-btn">
                                        <a ><Link to = "/blockdetails">Read More</Link></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-classNameic">
                                <div className="thumb">
                                    <img src="./assets/img/blog/blog-13.jpg" alt="blog"/>
                                </div>
                                <div className="content">
                                    <div className="meta-wrapper">
                                        <div className="meta-author">
                                            <a href="#">
                                                <img src="./assets/img/blog/blog-author-1.jpg" alt="blog"/>
                                                Joner Smith
                                            </a>
                                        </div>
                                        <div className="meta-comment">
                                            <a href="#">
                                                <i className="fa-regular fa-message-lines"></i>
                                                Comment
                                            </a>
                                        </div>
                                        <div className="meta-date">
                                            <a href="#">
                                                <i className="fa-regular fa-calendar-days"></i>
                                                22 Dec 2023
                                            </a>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h3>
                                            <a ><Link to = "/blockdetails">
                                                The Beginner’s Guide To The Modern Agency
                                            </Link></a>
                                        </h3>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Objectively redefine out-of-the-box technologies for multimedia based
                                            networks.
                                            Proactively the architect economically sound synergy with progressive value.
                                            Authoritatively engage out-of-is the box users for interoperable core
                                            competencies.
                                            Appropriately pontificate B2B strategic theme of time areas rather than
                                            professional
                                            metrics. Monotonectally visualize high-payoff manufactured products with
                                            professional metrics. Continually synergize extensive imperatives whereas
                                            real-time
                                            e-services. Enthusiastically online promote technically sound core
                                            competencies
                                            via
                                            flexible.
                                        </p>
                                    </div>
                                    <div className="theme-btn">
                                        <a ><Link to = "/blockdetails">Read More</Link></a>
                                    </div>
                                </div>
                            </div>
                            <div className="page-pagination justify-content-start">
                                <a href="#"><i className="fa-solid fa-angles-left"></i></a>
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#"><i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="subscribe-section bg-white pb-md-80 pb-xs-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="subscribe-wrapper aos-init" data-aos="fade-up" data-aos-delay="200">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="subscribe-title text-lg-start text-center">
                                            <h3>Subscribe To Our Newsletter</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 mt-md-30 mt-xs-30">
                                        <div className="subscribe-form text-lg-start text-center">
                                            <form action="#">
                                                <div className="input-wrap">
                                                    <input type="email" placeholder="Enter Your Mail"/>
                                                    <button type="submit">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default BlogClassic