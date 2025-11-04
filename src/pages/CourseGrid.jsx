import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const CourseGrid = () => {
  useEffect(() => {
    document.title = "Course Grid - Educad";
  }, []);

  return (
    <div>
      <main>
        <div
          className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50"
          style={{
            backgroundImage: "url(assets/img/backgroud/page-title-bg.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title-content text-lg-start text-center">
                  <h2 className="title">Course Grid</h2>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a ><Link to="/">Home</Link></a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                      </li>
                      <li>
                        <a>
                          {" "}
                          <Link to="/course_details">Course Grid </Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categories-section pt-150 pb-120 pt-lg-120 pb-lg-90 pt-md-80 pb-md-50 pt-xs-50 pb-xs-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-title text-center mb-50">
                  <div
                    className="sub-title mb-10 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <p>Top Categories</p>
                  </div>
                  <div
                    className="title aos-init"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
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
                  data-aos-delay="150"
                >
                  <div className="icon">
                    <img src="./assets/img/icon/bag.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>Account &amp; Business</h4>
                    <p>263+ Course Available</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="course-category-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <img src="./assets/img/icon/document.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>Certificat Course</h4>
                    <p>350+ Course Available</p>
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
                    <img src="./assets/img/icon/camera.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>Photography</h4>
                    <p>250+ Course Available</p>
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
                    <img src="./assets/img/icon/volume-up.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>Audio Book</h4>
                    <p>260+ Course Available</p>
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
                    <img src="./assets/img/icon/category.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>Management</h4>
                    <p>300+ Course Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-title text-center mb-50">
                  <div
                    className="sub-title aos-init"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <p>Course</p>
                  </div>
                  <div
                    className="title aos-init"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h2>Most Popular Courses</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row c-row-40">
              <div className="col-lg-4 col-md-6">
                <div
                  className="course-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="course-img">
                    <img
                      src="./assets/img/course/course-thumb-13.jpg"
                      alt="course"
                    />
                  </div>
                  <div className="category">
                    <a href="#">Language</a>
                    <a href="#">English</a>
                  </div>
                  <div className="course-title">
                    <h3>
                      <a >
                        <Link to="/course_details">
                        Beginner Diploma In Basic English Grammar - Better
                        Search Rang!
                        </Link>
                      </a>
                    </h3>
                  </div>
                  <div className="meta">
                    <span>
                      <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                      10 Lesson
                    </span>
                    <span>
                      <img src="./assets/img/icon/comment.svg" alt="icon" />
                      139
                    </span>
                  </div>
                  <div className="info-bottom">
                    <div className="ratting-wrap">
                      <span>6.7</span>
                      <div className="rating">
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="price">
                      <p>$19.99</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="course-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="course-img">
                    <img
                      src="./assets/img/course/course-thumb-14.jpg"
                      alt="course"
                    />
                  </div>
                  <div className="category">
                    <a href="#">SEO</a>
                    <a href="#">Data</a>
                  </div>
                  <div className="course-title">
                    <h3>
                      <a >
                        <Link to="/course_details">
                        Visual Thinking: Drawing Data to communication of 2022
                        </Link>
                      </a>
                    </h3>
                  </div>
                  <div className="meta">
                    <span>
                      <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                      10 Lesson
                    </span>
                    <span>
                      <img src="./assets/img/icon/comment.svg" alt="icon" />
                      139
                    </span>
                  </div>
                  <div className="info-bottom">
                    <div className="ratting-wrap">
                      <span>6.7</span>
                      <div className="rating">
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="price">
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="course-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="course-img">
                    <img
                      src="./assets/img/course/course-thumb-15.jpg"
                      alt="course"
                    />
                  </div>
                  <div className="category">
                    <a href="#">Intermediate</a>
                    <a href="#">Expert</a>
                  </div>
                  <div className="course-title">
                    <h3>
                      <a >
                        <Link to="/course_details">
                        The Challenge Of Global Learning Public Education.
                        </Link>
                      </a>
                    </h3>
                  </div>
                  <div className="meta">
                    <span>
                      <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                      10 Lesson
                    </span>
                    <span>
                      <img src="./assets/img/icon/comment.svg" alt="icon" />
                      139
                    </span>
                  </div>
                  <div className="info-bottom">
                    <div className="ratting-wrap">
                      <span>6.7</span>
                      <div className="rating">
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="price">
                      <p>$29.99</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="course-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="course-img">
                    <img
                      src="./assets/img/course/course-thumb-16.jpg"
                      alt="course"
                    />
                  </div>
                  <div className="category">
                    <a href="#">Internet</a>
                    <a href="#">Merketing</a>
                  </div>
                  <div className="course-title">
                    <h3>
                      <a ><Link to="/course_details">
                        The Most Complete Design Thinkin Course On The Market
                        </Link>
                      </a>
                    </h3>
                  </div>
                  <div className="meta">
                    <span>
                      <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                      10 Lesson
                    </span>
                    <span>
                      <img src="./assets/img/icon/comment.svg" alt="icon" />
                      139
                    </span>
                  </div>
                  <div className="info-bottom">
                    <div className="ratting-wrap">
                      <span>6.7</span>
                      <div className="rating">
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="price">
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="course-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="course-img">
                    <img
                      src="./assets/img/course/course-thumb-17.jpg"
                      alt="course"
                    />
                  </div>
                  <div className="category">
                    <a href="#">Webflow</a>
                    <a href="#">UX/UI</a>
                  </div>
                  <div className="course-title">
                    <h3>
                      <a><Link to="/course_details">
                        Completed Landing Page Design &amp; Conversion Rate 2022
                      </Link>
                      </a>
                    </h3>
                  </div>
                  <div className="meta">
                    <span>
                      <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                      10 Lesson
                    </span>
                    <span>
                      <img src="./assets/img/icon/comment.svg" alt="icon" />
                      139
                    </span>
                  </div>
                  <div className="info-bottom">
                    <div className="ratting-wrap">
                      <span>6.7</span>
                      <div className="rating">
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="price">
                      <p>$19.99</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="course-wrap aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="course-img">
                    <img
                      src="./assets/img/course/course-thumb-18.jpg"
                      alt="course"
                    />
                  </div>
                  <div className="category">
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                  </div>
                  <div className="course-title">
                    <h3>
                      <a ><Link to="/course_details">
                        Completed Landing Page Design &amp; Conversion Rate 2022
                        </Link>
                      </a>
                    </h3>
                  </div>
                  <div className="meta">
                    <span>
                      <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                      10 Lesson
                    </span>
                    <span>
                      <img src="./assets/img/icon/comment.svg" alt="icon" />
                      139
                    </span>
                  </div>
                  <div className="info-bottom">
                    <div className="ratting-wrap">
                      <span>6.7</span>
                      <div className="rating">
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star active"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="price">
                      <p>$19.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center mt-10">
              <div className="col-xl-12">
                <div
                  className="theme-btn aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a href="#">Browse All Course</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseGrid;
