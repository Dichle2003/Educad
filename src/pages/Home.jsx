import { useState, useEffect } from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  useEffect(() => {
    document.title = "Home - Educad";
  }, []);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/search_course"
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* <!-- hero start --> */}
      <div className="hero-section-2">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between justify-content-center">
            <div className="col-xxl-7 col-xl-6 col-lg-10">
              <div className="hero-content-2">
                <div className="sub-title">
                  <p>All The best Platform</p>
                </div>
                <div className="title">
                  <h1>Find The Best Online Course For Skills</h1>
                </div>
                <div className="description">
                  <p>
                    Objectively redefine out-of box technologies for multimedia
                    based is online is networks. Proactively architect
                    economically
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="search"
                        placeholder="Find your Course"
                        value={search}
                        onChange={handleChange}
                      />
                      <button
                        className="submit-btn"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  {Array.isArray(result) && result.length > 0 ? (
                    result.map((courses) => (
                      <div
                        className="col-xl-12 col-lg-6 col-md-6"
                        key={courses.id}
                      >
                        <div className="course-list-content mb-30">
                          <div className="course-img">
                            <img
                              src={courses.image}
                              alt={courses.title || "thumb"}
                            />
                          </div>

                          <div className="course-content-list">
                            <div className="course-meta">
                              <div className="category">
                                <div className="cat-1">
                                  <a href="#">{courses.category}</a>
                                </div>
                                <div className="cat-2">
                                  <a href="#">{courses.category_key}</a>
                                </div>
                              </div>
                              <div className="price">{courses.price}</div>
                            </div>

                            <div className="course-list-title">
                              <Link
                                to="/course_details"
                                className="course-title-link"
                              >
                                The Most Complete Design Thinking Online Course
                                On The Market
                              </Link>
                            </div>

                            <div className="course-meta-bottom">
                              <span>
                                <img
                                  src="./assets/img/icon/document-g2.svg"
                                  alt="icon"
                                />{" "}
                                {courses.comment} lessons
                              </span>
                              <span>
                                <img
                                  src="./assets/img/icon/3-user.svg"
                                  alt="icon"
                                />{" "}
                                {courses.num_menber} Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p style={{ textAlign: "center", marginTop: "20px" }}>
                      No courses found.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-5 text-center mt-lg-50 mt-md-50 mt-xs-50">
              <div className="hero-img-wrapper">
                <div className="main-img-2">
                  <img src="assets/img/hero/hero-main-img-2.png" alt="thumb" />
                </div>
                <div className="hero-thumb-3">
                  <img src="assets/img/shape/half-round-1.svg" alt="shape" />
                </div>
                <div className="hero-thumb-4">
                  <img src="assets/img/shape/horn-1.svg" alt="shape" />
                </div>
                <div className="hero-thumb-6">
                  <img src="assets/img/hero/student-repot.png" alt="thumb" />
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
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bubble-1b"></div>
        <div className="hero-bubble-2b"></div>
        <div className="hero-bubble-3b"></div>
        <div className="shape-4b">
          <img src="assets/img/shape/stone-pattern-2.svg" alt="shape" />
        </div>
      </div>
      {/* <!-- hero end --> */}

      {/* <!-- Categories start --> */}
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
      {/* <!-- Categories end --> */}

      {/* <!-- About start --> */}
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
                  <Link to="/instructorsDetails">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About end --> */}

      {/* <!-- Counter start --> */}
      <div
        className="counter-section-2 pt-80 pb-30 pt-xs-60 pb-xs-10 aos-init"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50">
                <div className="icon">
                  <img src="assets/img/icon/add-user.svg" alt="icon" />
                </div>
                <div className="counter-info">
                  <div className="number">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count="14,500"
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
                    </h3>
                  </div>
                  <div className="counter-info-divider mt-15 mb-15"></div>
                  <div className="text">
                    <p>HappyStudent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50">
                <div className="icon">
                  <img src="assets/img/icon/document-w.svg" alt="icon" />
                </div>
                <div className="counter-info">
                  <div className="number">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count="569"
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
                    </h3>
                  </div>
                  <div className="counter-info-divider mt-15 mb-15"></div>
                  <div className="text">
                    <p>Good Comment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50">
                <div className="icon">
                  <img src="assets/img/icon/chart.svg" alt="icon" />
                </div>
                <div className="counter-info">
                  <div className="number">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count="32,500"
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
                    </h3>
                  </div>
                  <div className="counter-info-divider mt-15 mb-15"></div>
                  <div className="text">
                    <p>Services Download</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="counter-wrap-2 justify-content-xl-start justify-content-center mb-50">
                <div className="icon">
                  <img src="assets/img/icon/star-w.svg" alt="icon" />
                </div>
                <div className="counter-info">
                  <div className="number">
                    <h3>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="32"
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
                      </span>
                      K
                    </h3>
                  </div>
                  <div className="counter-info-divider mt-15 mb-15"></div>
                  <div className="text">
                    <p>Best Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Counter end --> */}

      {/* <!-- Course start --> */}
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
            <div className="col-lg-4 col-md-6">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="course-img">
                  <img src="assets/img/course/course-thumb-7.jpg" alt="thumb" />
                </div>
                <div className="category">
                  <div className="btn-1">
                    <a href="#">UI/UX Design</a>
                  </div>
                  <div className="price">
                    <p>$19.99</p>
                  </div>
                </div>
                <div className="course-title">
                  <h3>
                    <Link to="/course_details">
                      Beginner Diploma In Basic English Grammar - Better Search
                      Rang!
                    </Link>
                  </h3>
                </div>
                <div className="meta">
                  <span>
                    <img src="assets/img/icon/document-2.svg" alt="icon" />
                    10 Lesson
                  </span>
                  <span>
                    <img src="assets/img/icon/comment.svg" alt="icon" />
                    139
                  </span>
                </div>
                <div className="info-bottom">
                  <div className="info">
                    <div className="thumb">
                      <img src="assets/img/author/author-1.png" alt="thumb" />
                      <h4 className="name">Jon Smith</h4>
                    </div>
                    <div className="text">
                      <p>37 Classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="course-img">
                  <img
                    src="assets/img/course/course-thumb-8.jpg"
                    alt="course"
                  />
                </div>
                <div className="category">
                  <div className="btn-1">
                    <a href="#">Language</a>
                  </div>
                  <div className="price">
                    <p>$19.99</p>
                  </div>
                </div>
                <div className="course-title">
                  <h3>
                    <Link to="/course_details">
                      Visual Thinking: Drawing Data to communication of 2022
                    </Link>
                  </h3>
                </div>
                <div className="meta">
                  <span>
                    <img src="assets/img/icon/document-2.svg" alt="icon" />
                    13 Lesson
                  </span>
                  <span>
                    <img src="assets/img/icon/comment.svg" alt="icon" />
                    119
                  </span>
                </div>
                <div className="info-bottom">
                  <div className="info">
                    <div className="thumb">
                      <img src="assets/img/author/author-2.png" alt="thumb" />
                      <h4 className="name">Hard Son</h4>
                    </div>
                    <div className="text">
                      <p>37 Classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="course-img">
                  <img
                    src="assets/img/course/course-thumb-9.jpg"
                    alt="course"
                  />
                </div>
                <div className="category">
                  <div className="btn-1">
                    <Link to="/course_details">Intermediate</Link>
                  </div>
                  <div className="price">
                    <p>Free</p>
                  </div>
                </div>
                <div className="course-title">
                  <h3>
                    <Link to="/course_details">
                      The Challenge Of Global Learning Public Education.
                    </Link>
                  </h3>
                </div>
                <div className="meta">
                  <span>
                    <img src="assets/img/icon/document-2.svg" alt="icon" />
                    12 Lesson
                  </span>
                  <span>
                    <img src="assets/img/icon/comment.svg" alt="icon" />
                    129
                  </span>
                </div>
                <div className="info-bottom">
                  <div className="info">
                    <div className="thumb">
                      <img src="assets/img/author/author-3.png" alt="thumb" />
                      <h4 className="name">Mili Smith</h4>
                    </div>
                    <div className="text">
                      <p>37 Classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="course-img">
                  <img
                    src="assets/img/course/course-thumb-10.jpg"
                    alt="course"
                  />
                </div>
                <div className="category">
                  <div className="btn-1">
                    <a href="#">Internet</a>
                  </div>
                  <div className="price">
                    <p>$19.99</p>
                  </div>
                </div>
                <div className="course-title">
                  <h3>
                    <Link to="/course_details">
                      The Most Complete Design Thinki Course On The Market
                    </Link>
                  </h3>
                </div>
                <div className="meta">
                  <span>
                    <img src="assets/img/icon/document-2.svg" alt="icon" />
                    14 Lesson
                  </span>
                  <span>
                    <img src="assets/img/icon/comment.svg" alt="icon" />
                    239
                  </span>
                </div>
                <div className="info-bottom">
                  <div className="info">
                    <div className="thumb">
                      <img src="assets/img/author/author-4.png" alt="thumb" />
                      <h4 className="name">Bred Kome</h4>
                    </div>
                    <div className="text">
                      <p>37 Classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="course-img">
                  <img
                    src="assets/img/course/course-thumb-11.jpg"
                    alt="course"
                  />
                </div>
                <div className="category">
                  <div className="btn-1">
                    <a href="#">Webflow</a>
                  </div>
                  <div className="price">
                    <p>Free</p>
                  </div>
                </div>
                <div className="course-title">
                  <h3>
                    <Link to="/course_details">
                      Completed Landing Page Design &amp; Conversion Rate 2022
                    </Link>
                  </h3>
                </div>
                <div className="meta">
                  <span>
                    <img src="assets/img/icon/document-2.svg" alt="icon" />
                    09 Lesson
                  </span>
                  <span>
                    <img src="assets/img/icon/comment.svg" alt="icon" />
                    109
                  </span>
                </div>
                <div className="info-bottom">
                  <div className="info">
                    <div className="thumb">
                      <img src="assets/img/author/author-5.png" alt="thumb" />
                      <h4 className="name">Soid Vir</h4>
                    </div>
                    <div className="text">
                      <p>37 Classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="course-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="course-img">
                  <img
                    src="assets/img/course/course-thumb-12.jpg"
                    alt="course"
                  />
                </div>
                <div className="category">
                  <div className="btn-1">
                    <a href="#">Design</a>
                  </div>
                  <div className="price">
                    <p>$19.99</p>
                  </div>
                </div>
                <div className="course-title">
                  <h3>
                    <Link to="/course_details">
                      Completed Landing Page Design &amp; Conversion Rate 2022
                    </Link>
                  </h3>
                </div>
                <div className="meta">
                  <span>
                    <img src="assets/img/icon/document-2.svg" alt="icon" />
                    10 Lesson
                  </span>
                  <span>
                    <img src="assets/img/icon/comment.svg" alt="icon" />
                    139
                  </span>
                </div>
                <div className="info-bottom">
                  <div className="info">
                    <div className="thumb">
                      <img src="assets/img/author/author-6.png" alt="thumb" />
                      <h4 className="name">Jonhard</h4>
                    </div>
                    <div className="text">
                      <p>37 Classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-12">
              <div
                className="theme-btn aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/course_details">Browse All Course</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Course end --> */}

      {/* <!-- Career start --> */}
      <div className="career-section pt-80 pb-50 pt-xs-50 pb-xs-20">
        <div className="shape-1">
          <img src="assets/img/shape/snake-vec-1.svg" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="section-title text-center mb-50 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title mb-10">
                  <p>Choose Your Career</p>
                </div>
                <div className="title">
                  <h2>Discover Your Gain</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <div
                className="career-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="thumb">
                  <img
                    src="assets/img/career/career-thumb-1.png"
                    alt="career"
                  />
                </div>
                <div className="content">
                  <p>Start From Today</p>
                  <h4>
                    <a href="#">
                      Join Our Training Course &amp; Build Your Skill.
                    </a>
                  </h4>
                  <a className="read-more" href="#">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="career-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="thumb">
                  <img
                    src="assets/img/career/career-thumb-1.png"
                    alt="career"
                  />
                </div>
                <div className="content">
                  <p>Build Your Career</p>
                  <h4>
                    <a href="#">
                      Join Our Training Course &amp; Build Your Skill.
                    </a>
                  </h4>
                  <a className="read-more" href="#">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Career end --> */}

      {/* <!-- Choose  start --> */}
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
                    <Link to="/signup">Register now</Link>
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
                  <img src="assets/img/chose/chose-2.png" alt="thumb" />
                </div>
                <div
                  className="thumb-2 d-none d-xl-inline-block aos-init"
                  data-aos="zoom-in"
                >
                  <img src="assets/img/chose/chose-3.jpg" alt="thumb" />
                </div>
                <div className="thumb-3">
                  <img src="assets/img/shape/horn-1.svg" alt="thumb" />
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
      {/* <!-- Choose  end --> */}

      {/* <!-- instructors start --> */}
      <div className="instructors-section-2 pt-150 pb-150 pt-lg-120 pb-lg-100 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div
                className="section-title mb-50 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title mb-10">
                  <p>Instructor</p>
                </div>
                <div className="title">
                  <h2>Our Professional Instructor</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="instructor-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="thumb">
                  <img src="assets/img/instructor/instructor-1.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <p className="sub-title">SEO Manager</p>
                  <h3 className="title">
                    <Link to="/course_details">Rovert Smith</Link>
                  </h3>
                  <div className="meta-separator"></div>
                  <div className="meta">
                    <div className="meta-item">
                      <i className="fa-light fa-memo"></i> 10 Lesson
                    </div>
                    <div className="meta-item">
                      <i className="fa-light fa-users"></i> 64 Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="instructor-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="thumb">
                  <img src="assets/img/instructor/instructor-2.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <p className="sub-title">Web Developer</p>
                  <h3 className="title">
                    <Link to="/instructorsDetails">Milier Hard</Link>
                  </h3>
                  <div className="meta-separator"></div>
                  <div className="meta">
                    <div className="meta-item">
                      <i className="fa-light fa-memo"></i> 10 Lesson
                    </div>
                    <div className="meta-item">
                      <i className="fa-light fa-users"></i> 64 Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="instructor-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="thumb">
                  <img src="assets/img/instructor/instructor-3.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <p className="sub-title">UI/UX Designer</p>
                  <h3 className="title">
                    <Link to="/instructorsDetails">Jaceka Jon</Link>
                  </h3>
                  <div className="meta-separator"></div>
                  <div className="meta">
                    <div className="meta-item">
                      <i className="fa-light fa-memo"></i> 10 Lesson
                    </div>
                    <div className="meta-item">
                      <i className="fa-light fa-users"></i> 64 Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="instructor-wrap-2 aos-init"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="thumb">
                  <img src="assets/img/instructor/instructor-4.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <p className="sub-title">SEO Manager</p>
                  <h3 className="title">
                    <Link to="/instructorsDetails">Hardson Khan</Link>
                  </h3>
                  <div className="meta-separator"></div>
                  <div className="meta">
                    <div className="meta-item">
                      <i className="fa-light fa-memo"></i> 10 Lesson
                    </div>
                    <div className="meta-item">
                      <i className="fa-light fa-users"></i> 64 Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mt-20">
            <div className="col-xl-12">
              <div
                className="theme-btn aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/instructorsDetails">All instructor</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- instructors end --> */}

      {/* <!-- Testimonial start --> */}
      <div className="testimonial-section-2 pt-80 pb-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div
                className="section-title text-center text-xl-start mb-50 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title mb-10">
                  <p>Testimonial</p>
                </div>
                <div className="title">
                  <h2>What Learners Saying About our Courses</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-12 aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <TestimonialSlider /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial end --> */}

      {/* <!-- video start --> */}
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
                  <img src="assets/img/video/video-img-2.jpg" alt="video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- video end --> */}

      {/* <!-- FAQ start --> */}
      <div className="faq-section-2 pt-80 pb-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="faq-wrapper-2">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 text-xl-start text-center mb-lg-50 mb-md-50 mb-xs-50">
                <div
                  className="faq-thumb aos-init"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="faq-thumb-1">
                    <img src="assets/img/faq/faq-1.jpg" alt="thumb" />
                  </div>
                  <div className="faq-thumb-2 d-none d-xl-inline-block">
                    <img src="assets/img/shape/half-round-1.svg" alt="shape" />
                  </div>
                  <div className="student-thumbs d-none d-xl-inline-block">
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
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="faq-content-wrap-2">
                  <div className="section-title mb-20">
                    <div className="sub-title mb-10">
                      <p>Frequently Asked Question</p>
                    </div>
                    <div className="title">
                      <h2>Have Your Any Question?</h2>
                    </div>
                  </div>
                  <div className="ext-text mb-30">
                    <p>Discover FAQ From Our Support</p>
                  </div>
                  <div className="faq-accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How Can I Pay?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Objectively our their are many of passage cleaning the
                          services multimedia based of network.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What Is Process To Get Expert Team?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Objectively our their are many of passage cleaning the
                          services multimedia based of network.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How Does About Online Services?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Objectively our their are many of passage cleaning the
                          services multimedia based of network.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQ end --> */}

      {/* <!-- Blogs start --> */}
      <div className="blog-section-2 pt-150 pt-lg-120 pt-md-80 pt-xs-50">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="section-title mb-50 aos-init" data-aos="fade-up">
                <div className="sub-title mb-10">
                  <p>Our Recent Articles</p>
                </div>
                <div className="title">
                  <h2>Latest Blog &amp; News</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-grid-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="blog-img">
                  <img src="assets/img/blog/blog-4.jpg" alt="thumb" />
                </div>
                <div className="meta">
                  <a href="#">
                    <img src="assets/img/icon/hat.svg" alt="icon" />
                    Education
                  </a>
                  <a href="#">
                    <img src="assets/img/icon/archive.svg" alt="icon" />
                    21 Jan 2023
                  </a>
                </div>
                <h3 className="title">
                  <a href="#">
                    Educating Your Child Early &amp; Take Spread Knowledge
                  </a>
                </h3>
                <div className="text">
                  <p>
                    Beginner Diploma In Basic English Grammar is Better Search
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-grid-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="blog-img">
                  <img src="assets/img/blog/blog-5.jpg" alt="thumb" />
                </div>
                <div className="meta">
                  <a href="#">
                    <img src="assets/img/icon/hat.svg" alt="icon" />
                    Courses
                  </a>
                  <a href="#">
                    <img src="assets/img/icon/archive.svg" alt="icon" />
                    21 Jan 2023
                  </a>
                </div>
                <h3 className="title">
                  <a href="#">
                    Join Our Training Course &amp; Online Build Your Skill.
                  </a>
                </h3>
                <div className="text">
                  <p>
                    Beginner Diploma In Basic English Grammar is Better Search
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-grid-wrap aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="blog-img">
                  <img src="assets/img/blog/blog-6.jpg" alt="thumb" />
                </div>
                <div className="meta">
                  <a href="#">
                    <img src="assets/img/icon/hat.svg" alt="icon" />
                    Education
                  </a>
                  <a href="#">
                    <img src="assets/img/icon/archive.svg" alt="icon" />
                    21 Jan 2023
                  </a>
                </div>
                <h3 className="title">
                  <a href="#">
                    Educating Your Child Early &amp; Take Spread Knowledge
                  </a>
                </h3>
                <div className="text">
                  <p>
                    Beginner Diploma In Basic English Grammar is Better Search
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mt-20">
            <div className="col-xl-12">
              <div
                className="theme-btn aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to="/instructorsDetails">Read All Blogs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blogs end --> */}

      {/* <!-- Partners start --> */}
      <div className="partner-section-2 pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="section-title text-center mb-50 aos-init"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="sub-title mb-10">
                  <p>Our Partners</p>
                </div>
                <div className="title">
                  <h2>Trusted by 100+ Company</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-12 aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="swiper brand-layout-2 swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  style={{
                    transform: "translate3d(-540px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  <div
                    className="swiper-slide"
                    style={{ width: "240px", marginRight: "30px" }}
                    data-swiper-slide-index="0"
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-1.png" alt="thumb" />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-prev"
                    style={{ width: "240px", marginRight: "30px" }}
                    data-swiper-slide-index="1"
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-2.png" alt="thumb" />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "240px", marginRight: "30px" }}
                    data-swiper-slide-index="2"
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-3.png" alt="thumb" />
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    style={{ width: "240px", marginRight: "30px" }}
                    data-swiper-slide-index="3"
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-4.png" alt="thumb" />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "240px", marginRight: "30px" }}
                    data-swiper-slide-index="4"
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-5.png" alt="thumb" />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    style={{ width: "240px", marginRight: "30px" }}
                    data-swiper-slide-index="5"
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-1.png" alt="thumb" />
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index="6"
                    style={{ width: "240px", marginRight: "30px" }}
                  >
                    <div className="brand-item">
                      <img src="assets/img/brand/partner-2.png" alt="thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
