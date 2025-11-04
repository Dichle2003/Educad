import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
function About() {
  useEffect(() => {
    document.title = "About - Educad";
  }, []);

  const settings = {
    // dots: false,
    // arrows: false,
    // infinite: true,
    // speed: 8000,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // cssEase: "linear",
    // pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const logos = [
    "/assets/img/slider/partner-11.svg",
    "/assets/img/slider/partner-12.svg",
    "/assets/img/slider/partner-13.svg",
    "/assets/img/slider/partner-14.svg",
    "/assets/img/slider/partner-15.svg",
    "/assets/img/slider/partner-11.svg",
    "/assets/img/slider/partner-12.svg",
  ];
  const setting1 = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <div
        className="container mt-5"
        style={{
          backgroundImage: "url('/assets/img/backgroud/page-title-bg.jpg')",
          backgroundSize: "cover",

          height: "400px",
          width: "100%",
        }}
      >
        <div className="pt-100 pl-20">
          <h1 className="mb-4 text-left">About Us</h1>

          <ul className="breadcrumb justify-content-left">
            <li className="breadcrumb-item ">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item active text-white "
              aria-current="page"
            >
             <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="categories-section-2 pt-150 pb-120 pt-lg-120 pb-lg-90 pt-md-80 pb-md-50 pt-xs-50 pb-xs-20">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div
                className="section-title mb-50 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title mb-10">
                  <p>Top Categories</p>
                </div>
                <div className="title">
                  <h2>Explore Our Courses</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center">
            <div className="col">
              <div
                className="course-category-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="icon">
                  <img src="assets/img/icon/bag.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Account &amp; Business</a>
                  </h4>
                  <p>263+ Course Available</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="course-category-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="icon">
                  <img src="assets/img/icon/document.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Certificat Course</a>
                  </h4>
                  <p>350+ Course Available</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="course-category-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <img src="assets/img/icon/camera.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Photography</a>
                  </h4>
                  <p>250+ Course Available</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="course-category-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="icon">
                  <img src="assets/img/icon/volume-up.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Audio Book</a>
                  </h4>
                  <p>260+ Course Available</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="course-category-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <img src="assets/img/icon/category.svg" alt="icon" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Management</a>
                  </h4>
                  <p>300+ Course Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-2 pb-150 pb-lg-120 pb-md-80 pb-xs-50">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-9 mb-lg-50 mb-md-50 mb-xs-50">
              <div className="about-img-wrapper-2">
                <div className="about-main-img">
                  <img src="assets/img/about/about-2.png" alt="main img" />
                </div>
                <div
                  className="about-img-2 d-none d-xl-inline-block aos-init"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img src="assets/img/about/about-3.jpg" alt="thumb" />
                </div>
                <div
                  className="experience-box text-center aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-content text-start mb-10">
                    <span>
                      <img src="assets/img/icon/experience.svg" alt="icon" />
                    </span>
                    <h4>25 Years</h4>
                  </div>
                  <h6>Working Exprience</h6>
                </div>
                <div
                  className="happy-student-count-box aos-init"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div className="student-avatar">
                    <img src="assets/img/about/studeet-thumb.jpg" alt="thumb" />
                  </div>
                  <div className="inner-content">
                    <h6>Happy Students</h6>
                    <p>From Last 7 Days</p>
                  </div>
                  <div className="counter-wrapper">
                    <div className="bubble-dot"></div>
                    <div className="number">
                      <h6
                        className="odometer odometer-auto-theme"
                        data-count="14"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </h6>
                    </div>
                    <span className="count-mark">k+</span>
                  </div>
                </div>
                <div className="shape-4 d-none d-xl-inline-block">
                  <img src="assets/img/shape/half-round-2.svg" alt="shape" />
                </div>
                <div className="shape-5">
                  <img src="assets/img/shape/horn-2.svg" alt="shape" />
                </div>
                <div className="bubble-1"></div>
                <div className="bubble-2 d-none d-xl-inline-block"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="about-content-2 aos-init"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="section-title">
                  <div className="sub-title mb-10">
                    <p>About Us</p>
                  </div>
                  <div className="title">
                    <h2>We Provide Best Online Education Course</h2>
                  </div>
                </div>
                <div className="description">
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure.
                  </p>
                </div>
                <div className="about-box-wrap">
                  <div className="about-box">
                    <div className="icon">
                      <a href="#">
                        <i className="fa-solid fa-shield-check"></i>
                      </a>
                    </div>
                    <h3 className="title">Build Your Career</h3>
                    <div className="text">
                      <p>Online Course Quickly From Anywhere</p>
                    </div>
                  </div>
                  <div className="about-box">
                    <div className="icon">
                      <a href="#">
                        <i className="fa-solid fa-star"></i>
                      </a>
                    </div>
                    <h3 className="title">Grow Your Skills</h3>
                    <div className="text">
                      <p>Online Course Quickly From Anywhere</p>
                    </div>
                  </div>
                </div>
                <div className="theme-btn">
                  <Link to="/about"> About</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section style={{ backgroundColor: "#f54747", padding: "50px 0" }}>
        <div className="container">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="text-center">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="img-fluid"
                  style={{
                    maxWidth: "150px",
                    margin: "0 auto",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="video-section-3 pt-150 pb-150 pt-lg-80 pb-lg-80 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div
                className="section-title mb-50 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title mb-10">
                  <p>Live Classes</p>
                </div>
                <div className="title">
                  <h2>It’s easy To Start Learning</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="video-wrapper">
                <div
                  className="thumb aos-init"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img src="assets/img/video/video-img-4.jpg" alt="video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="counter-section-2 pt-80 pb-30 pt-xs-60 pb-xs-10 aos-init"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div
                className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50"
                style={{ color: "black" }}
              >
                <div className="icon">
                  <img
                    src="assets/img/icon/add-user.svg"
                    alt="icon"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
                <div className="counter-info" style={{ color: "black" }}>
                  <div className="number">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count="14,500"
                      style={{ color: "black" }}
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">14</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">500</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </h3>
                  </div>
                  <div
                    className="counter-info-divider mt-15 mb-15"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <div className="text">
                    <p style={{ color: "black" }}>HappyStudent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50"
                style={{ color: "black" }}
              >
                <div className="icon">
                  <img
                    src="assets/img/icon/document-w.svg"
                    alt="icon"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
                <div className="counter-info" style={{ color: "black" }}>
                  <div className="number">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count="569"
                      style={{ color: "black" }}
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">56</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">9</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </h3>
                  </div>
                  <div
                    className="counter-info-divider mt-15 mb-15"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <div className="text">
                    <p style={{ color: "black" }}>Good Comment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50"
                style={{ color: "black" }}
              >
                <div className="icon">
                  <img
                    src="assets/img/icon/chart.svg"
                    alt="icon"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
                <div className="counter-info" style={{ color: "black" }}>
                  <div className="number">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count="32,500"
                      style={{ color: "black" }}
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">32</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">500</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </h3>
                  </div>
                  <div
                    className="counter-info-divider mt-15 mb-15"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <div className="text">
                    <p style={{ color: "black" }}>Services Download</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50"
                style={{ color: "black" }}
              >
                <div className="icon">
                  <img
                    src="assets/img/icon/star-w.svg"
                    alt="icon"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
                <div className="counter-info" style={{ color: "black" }}>
                  <div className="number">
                    <h3 style={{ color: "black" }}>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="32"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">3</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">2K</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                    </h3>
                  </div>
                  <div
                    className="counter-info-divider mt-15 mb-15"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <div className="text">
                    <p style={{ color: "black" }}>Best Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why true my us */}
      <div className="choose-section-2 pt-165 pt-lg-120 pt-md-80 pt-xs-50">
        <div className="chose-bubble-1"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="choose-content-2 mb-30 aos-init"
                data-aos="fade-right"
              >
                <div className="section-title">
                  <div className="sub-title mb-10">
                    <p>Why Choose Us</p>
                  </div>
                  <div className="title">
                    <h2>Improve Your Skills For Better Future</h2>
                  </div>
                </div>
                <div className="text">
                  <p>
                    Rapidiously iterate enabled meta-services vis-a-vis
                    world-class quality vectors. Collaboratively recaptiualize
                    future-proof relationships via ubiquitous leadership.
                  </p>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <i className="fa-light fa-square-check"></i>
                      <span>Best Curriculum</span>
                    </li>
                    <li>
                      <i className="fa-light fa-square-check"></i>
                      <span>Highly Experienced</span>
                    </li>
                    <li>
                      <i className="fa-light fa-square-check"></i>
                      <span>350+ High Quality Topics</span>
                    </li>
                    <li>
                      <i className="fa-light fa-square-check"></i>
                      <span>Online Course From Expert</span>
                    </li>
                  </ul>
                </div>
                <div className="choose-btn-2">
                  <div className="theme-btn">
                    <Link to = "/signup">Register now</Link>
                  </div>
                  <div className="play-btn">
                    <a
                      href="https://www.youtube.com/watch?v=O5TdnuUhIgs&amp;ab_channel=Webflow"
                      className="open-popup-video vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    >
                      <span className="icon">
                        <i className="fa-solid fa-play"></i>
                      </span>
                      <span>Watch A Video</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-thumb-2 text-center mb-30">
                <div className="thumb">
                  <img
                    className="rounded-circle overflow-hidden"
                    src="assets/img/chose/chose-7.jpg"
                    alt="thumb"
                  />
                </div>
                <div
                  className="thumb-2 d-none d-xl-inline-block aos-init"
                  data-aos="zoom-in"
                >
                  <img src="assets/img/chose/chose-6.jpg" alt="thumb" />
                </div>
                <div className="thumb-3">
                  <img src="assets/img/chose/student-repot.png" alt="thumb" />
                </div>
                <div className="chose-bubble-2 d-none d-xl-inline-block"></div>
                <div className="chose-bubble-3 d-none d-xl-inline-block"></div>
                <div className="chose-bubble-4 d-none d-xl-inline-block"></div>
                <div className="chose-bubble-bg"></div>
                <div className="student-thumbs">
                  <h4>1000+ Happy Students</h4>
                  <div className="student-thumbs-box">
                    <span>
                      <img src="assets/img/chose/st-1.jpg" alt="thumb" />
                    </span>
                    <span>
                      <img src="assets/img/chose/st-2.jpg" alt="thumb" />
                    </span>
                    <span>
                      <img src="assets/img/chose/st-3.jpg" alt="thumb" />
                    </span>
                    <span>
                      <img src="assets/img/chose/st-4.jpg" alt="thumb" />
                    </span>
                    <span className="add-more">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                </div>
                <div className="course-count-section">
                  <div className="course-count">
                    <div className="number">
                      <h6
                        className="odometer odometer-auto-theme"
                        data-count="535"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </h6>
                    </div>
                    <span className="count-mark">+</span>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="course-section-2 pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center mb-5" data-aos="fade-up">
              <p>Instructor</p>
              <h1>Our Professional Instructor</h1>
            </div>
          </div>

          <div
            className="row justify-content-center text-center"
            data-aos="fade-up"
          >
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="course-wrap-2 p-3 border rounded shadow-sm h-100">
                <div className="course-img mb-3">
                  <img
                    src="assets/img/instructor/instructor-13.jpg"
                    alt="thumb"
                    className="img-fluid"
                  />
                </div>
                <div className="course-title">
                  <h3 className="mb-1 fw-light">
                    
                      <Link  className="text-decoration-none text-dark" to = "/course_details">  Rovert Smith</Link>
                    
                    
                  </h3>
                  <p className="fw-bold mb-0">SEO Manager</p>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-4 text-dark">
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="course-wrap-2 p-3 border rounded shadow-sm h-100">
                <div className="course-img mb-3">
                  <img
                    src="assets/img/instructor/instructor-14.jpg"
                    alt="thumb"
                    className="img-fluid "
                  />
                </div>
                <div className="course-title">
                  <h3 className="mb-1 fw-light">
                 
                      <Link  className="text-decoration-none text-dark" to = "/course_details">   Hardson Jon</Link>
                     
               
                  </h3>
                  <p className="fw-bold mb-0">UX/UI Designer</p>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-4 text-dark">
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="course-wrap-2 p-3 border rounded shadow-sm h-100">
                <div className="course-img mb-3">
                  <img
                    src="assets/img/instructor/instructor-15.jpg"
                    alt="thumb"
                    className="img-fluid "
                  />
                </div>
                <div className="course-title">
                  <h3 className="mb-1 fw-light">
                    
                        <Link       className="text-decoration-none text-dark" to = "/course_details"> Milyer Smith</Link>
                     
                  
                  </h3>
                  <p className="fw-bold mb-0">Web Developer</p>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-4 text-dark">
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a className="p-2 border rounded-circle" href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row text-center mt-0">
          <div className="col-xl-12">
            <div
              className="theme-btn aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
           
                  <Link to = "/course_details">  All member</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-section-2 pt-165 pt-lg-120 pt-md-80 pt-xs-50">
        <div className="chose-bubble-1"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="container py-5">
                <h3 className="text-center mb-4 fw-bold">Thông điệp nổi bật</h3>
                <Slider {...setting1}>
                  <div>
                    <div className="p-5 border rounded bg-light text-center">
                      <h4 className="fw-bold">Học tập không giới hạn</h4>
                      <p className="mt-3">
                        Mỗi ngày là một cơ hội để nâng cao kỹ năng và hiểu biết
                        của bạn.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="p-5 border rounded bg-light text-center">
                      <h4 className="fw-bold">Kiến thức là sức mạnh</h4>
                      <p className="mt-3">
                        Tích lũy tri thức giúp bạn tiến xa hơn trong sự nghiệp.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="p-5 border rounded bg-light text-center">
                      <h4 className="fw-bold">Cộng đồng học tập</h4>
                      <p className="mt-3">
                        Chia sẻ và học hỏi cùng nhau để cùng phát triển bền
                        vững.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-thumb-2 text-center mb-30">
                <div className="thumb">
                  <img
                    className="rounded-circle overflow-hidden"
                    src="assets/img/author/t-author-5.png"
                    alt="thumb"
                  />
                </div>

                <div className="course-count-section">
                  <div className="course-count">
                    <div className="number">
                      <h6
                        className="odometer odometer-auto-theme"
                        data-count="535"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </h6>
                    </div>
                    <span className="count-mark">+</span>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choose your carrer */}
      <div className="course-section-2 pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="section-title text-center mb-50 aos-init"
                data-aos="fade-up"
              >
                <div className="sub-title mb-10">
                  <p>Top Course</p>
                </div>
                <div className="title">
                  <h2>Our Featured Courses</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-5 text-center">
                    <img
                      src="assets/img/course/course-thumb-7.jpg"
                      alt="thumb"
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-lg-6 col-md-7">
                    <p className="text-muted mb-2">Start From Today</p>
                    <h4 className="fw-bold">
                      Join Our Training Course & Build Your Skill.
                    </h4>
                      <div
                className="theme-btn aos-init"
                
                data-aos-delay="200"
              >
              
                    <Link to = "/course_list">  Join Now</Link>
              
              </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5 text-center">
                  <img
                    src="assets/img/career/career-thumb-1.png"
                    alt="thumb"
                    className="img-fluid rounded"
                  />
                </div>

                <div className="col-lg-6 col-md-7">
                  <p className="text-muted mb-2">Start From Today</p>
                  <h4 className="fw-bold">
                    Join Our Training Course & Build Your Skill.
                  </h4>
                   <div
                className="theme-btn aos-init"
                
                data-aos-delay="200"
              >
           <Link to = "/course_list">  Join Now</Link>

              </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default About;
