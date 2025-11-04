import React from 'react'
import { Link } from 'react-router-dom'

const CourseDetails = () => {
  return (
    <div>

        <main>
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{ backgroundImage: 'url(./assets/img/backgroud/page-title-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Course Details</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a ><Link to="/course_details">Home </Link></a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a ><Link to="/course_details">Course Details </Link></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="course-details-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="main-content-wrap">
                                <div className="course-header">
                                    <div className="course-header-title">
                                        <h2>The Most Complete Design Thinking Online Course On The Market</h2>
                                    </div>
                                    <div className="ratting-wrap">
                                        <div className="ratting">
                                            <span>
                                                4.7
                                            </span>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span>
                                                (125)
                                            </span>
                                        </div>
                                        <div className="enroll">
                                            <a href="#"><i className="fa-duotone fa-user"></i></a>
                                            <span>
                                                2,35,687 Enrolled
                                            </span>
                                        </div>
                                        <div className="className">
                                            <a href="#"><i className="fa-duotone fa-circle-play"></i></a>
                                            <span>
                                                35 Classes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="course-header-text">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority
                                            have
                                            suffered alteration in some form, by injected humour, or randomised.</p>
                                    </div>
                                    <div className="course-header-img">
                                        <img src="./assets/img/course/course-thumb-24.jpg" alt="thumb"/>
                                    </div>
                                </div>
                                <div className="course-description-wrap">
                                    <div className="course-description-title">
                                        <h3>Course Description</h3>
                                        <div className="bar"></div>
                                    </div>
                                    <div className="course-description-text">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority
                                            have
                                            suffered alteration in some form, by injected humour, or randomised words
                                            which
                                            don't look even slightly believable. If you are going to use a passage of
                                            Lorem
                                            Ipsum, you to be sure there isn't anything embarrassing hidden in the
                                            middle.
                                        </p>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority
                                            have
                                            suffered alteration in some form, by injected humour, or randomised words
                                            which
                                            don't look even slightly believable. If you are going to use a passage of
                                            Lorem
                                            Ipsum.
                                        </p>
                                    </div>
                                </div>
                                <div className="overviews-wrap">
                                    <div className="overviews-title">
                                        <h3>Short Overview</h3>
                                        <div className="overview-bar"></div>
                                    </div>
                                    <div className="overview-layout">
                                        <div className="overview-list">
                                            <i className="fa-light fa-square-check"></i>
                                            <p>Best Curriculum &amp; Others Overview</p>
                                        </div>
                                        <div className="overview-list">
                                            <i className="fa-light fa-square-check"></i>
                                            <p>Online Course From Expert Mentors</p>
                                        </div>
                                        <div className="overview-list">
                                            <i className="fa-light fa-square-check"></i>
                                            <p>Highly Experienced &amp; Online Course</p>
                                        </div>
                                        <div className="overview-list">
                                            <i className="fa-light fa-square-check"></i>
                                            <p>350+ High Quality Topics &amp; Services</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-reviews-wrap">
                                    <div className="reviews-title">
                                        <h3>Course Reviews</h3>
                                        <div className="overview-bar"></div>
                                    </div>
                                    <div className="review">
                                        <div className="review-img">
                                            <img src="./assets/img/comment/comment-1.png" alt="comment"/>
                                        </div>
                                        <div className="review-info">
                                            <div className="name">
                                                <h4>Hardson Smith</h4>
                                                <span>a week ago</span>
                                            </div>
                                            <div className="review-ratting">
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review-text">
                                                <p>Synergistically than scalable platforms. Conveniently visualize
                                                    installed
                                                    online theproducts interactive results. Collaboratively corporate
                                                    experiences open is applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review mt-50 ps-md-5">
                                        <div className="review-img">
                                            <img src="./assets/img/comment/comment-2.png" alt="thumb"/>
                                        </div>
                                        <div className="review-info">
                                            <div className="name">
                                                <h4>Hamina Hasan</h4>
                                                <span>a week ago</span>
                                            </div>
                                            <div className="review-ratting">
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review-text">
                                                <p>Synergistically than scalable platforms. Conveniently visualize
                                                    installed
                                                    online theproducts interactive results. Collaboratively corporate
                                                    experiences open is applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review mt-50">
                                        <div className="review-img">
                                            <img src="./assets/img/comment/comment-3.png" alt="thumb"/>
                                        </div>
                                        <div className="review-info">
                                            <div className="name">
                                                <h4>Hardson Smith</h4>
                                                <span>a week ago</span>
                                            </div>
                                            <div className="review-ratting">
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star active"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <div className="review-text">
                                                <p>Synergistically than scalable platforms. Conveniently visualize
                                                    installed
                                                    online theproducts interactive results. Collaboratively corporate
                                                    experiences open is applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-reviews-btn-wrap text-center">
                                    <a href="">SEE MORE REVIEW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 mt-lg-50 mt-md-50 mt-xs-50">
                            <div className="sidebar-wrap widget-wrapper sidebar-wrap-right">
                                <div className="sidebar-widget-wrap mb-40">
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
                                <div className="sidebar-widget-wrap mb-40">
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
                                <div className="sidebar-widget-wrap mb-40">
                                    <h4 className="widget-title">Course Price</h4>
                                    <div className="widget-content">
                                        <div className="category-list">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Free
                                                            Courses</span>
                                                        <b>35</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Paid
                                                            Courses</span>
                                                        <b>27</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Subscription
                                                            Only</span>
                                                        <b>14</b>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget-wrap mb-40">
                                    <h4 className="widget-title">Class Duration</h4>
                                    <div className="widget-content">
                                        <div className="category-list">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> Less Than 2
                                                            hours</span>
                                                        <b>14</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> 3-5 hours</span>
                                                        <b>27</b>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><i className="fa-light fa-square-check"></i> 4-7 hours</span>
                                                        <b>12</b>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget-wrap mb-40">
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
                                <div className="sidebar-widget-wrap mb-40">
                                    <h4 className="widget-title">Share This Course</h4>
                                    <div className="widget-social-icon">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="course-section pt-80 pb-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-xl-12">
                            <div className="section-title aos-init" data-aos="fade-up" data-aos-delay="150">
                                <div className="title">
                                    <h2>More Related Course </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row c-row-40 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="course-wrap aos-init" data-aos="fade-up" data-aos-delay="200">
                                <div className="course-img">
                                    <img src="./assets/img/course/course-thumb-13.jpg" alt="course"/>
                                </div>
                                <div className="category">
                                    <a href="#">Language</a>
                                    <a href="#">English</a>
                                </div>
                                <div className="course-title">
                                    <h3>
                                        <a href="#">
                                            Beginner Diploma In Basic English Grammar - Better Search Rang!
                                        </a>
                                    </h3>
                                </div>
                                <div className="meta">
                                    <span>
                                        <img src="./assets/img/icon/document-g2.svg" alt="icon"/>
                                        12 Lesson
                                    </span>
                                    <span>
                                        <img src="./assets/img/icon/comment.svg" alt="icon"/>
                                        119
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
                            <div className="course-wrap aos-init" data-aos="fade-up" data-aos-delay="250">
                                <div className="course-img">
                                    <img src="./assets/img/course/course-thumb-14.jpg" alt="course"/>
                                </div>
                                <div className="category">
                                    <a href="#">SEO</a>
                                    <a href="#">Data</a>
                                </div>
                                <div className="course-title">
                                    <h3>
                                        <a href="#">
                                            Visual Thinking: Drawing Data to communication of 2022
                                        </a>
                                    </h3>
                                </div>
                                <div className="meta">
                                    <span>
                                        <img src="./assets/img/icon/document-g2.svg" alt="icon"/>
                                        20 Lesson
                                    </span>
                                    <span>
                                        <img src="./assets/img/icon/comment.svg" alt="icon"/>
                                        239
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
                            <div className="course-wrap aos-init" data-aos="fade-up" data-aos-delay="300">
                                <div className="course-img">
                                    <img src="./assets/img/course/course-thumb-15.jpg" alt="course"/>
                                </div>
                                <div className="category">
                                    <a href="#">Intermediate</a>
                                    <a href="#">Expert</a>
                                </div>
                                <div className="course-title">
                                    <h3>
                                        <a href="#">
                                            The Challenge Of Global Learning Public Education.
                                        </a>
                                    </h3>
                                </div>
                                <div className="meta">
                                    <span>
                                        <img src="./assets/img/icon/document-g2.svg" alt="icon"/>
                                        10 Lesson
                                    </span>
                                    <span>
                                        <img src="./assets/img/icon/comment.svg" alt="icon"/>
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
                    </div>
                </div>
            </div>
          
        </main>


    </div>
  )
}

export default CourseDetails