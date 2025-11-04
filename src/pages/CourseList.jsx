import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const CourseList = () => {
  useEffect(() => {
    document.title = "Course_list - Educad";
  }, []);
  const[course,setCourse]= useState([]);
  useEffect(()=>{
    fetchCourse();
  },[])
  const fetchCourse=()=>{
    axios
    .get(`http://127.0.0.1:8000/api/course`)
    .then((response)=>{
      setCourse(response.data);
    })
    .catch((err)=>{
      console.error('lỗi kết nối',err);
    })
  }

  return (
    <div>

        <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{ backgroundImage: 'url(./assets/img/backgroud/page-title-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Course List</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a ><Link to="/">Home</Link></a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a ><Link to="/course_list">Carouse List</Link></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <div className="course-list-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-4 order-2 order-lg-1 mt-lg-50 mt-md-50 mt-xs-50">
              <div className="sidebar-wrap widget-wrapper">
                <div className="sidebar-widget-wrap mb-40">
                  <h4 className="widget-title">Search</h4>
                  <div className="search-form">
                    <form action="#">
                      <div className="input-wrap">
                        <input type="email" placeholder="Search" />
                        <button type="submit">
                          <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
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
                            <span>
                              <i className="fa-light fa-square-check"></i> Web
                              Design
                            </span>
                            <b>35</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> App
                              Landing
                            </span>
                            <b>94</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> Web
                              Development
                            </span>
                            <b>25</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> Web
                              Consulting
                            </span>
                            <b>18</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> App
                              Categories
                            </span>
                            <b>14</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> Digital
                              Marketing
                            </span>
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
                            <span>
                              <i className="fa-light fa-square-check"></i> Free
                              Courses
                            </span>
                            <b>35</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> Paid
                              Courses
                            </span>
                            <b>27</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i>{" "}
                              Subscription Only
                            </span>
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
                            <span>
                              <i className="fa-light fa-square-check"></i> Less Than
                              2 hours
                            </span>
                            <b>14</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> 3-5 hours
                            </span>
                            <b>27</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <i className="fa-light fa-square-check"></i> 4-7 hours
                            </span>
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
              </div>
            </div>
            <div className="row col-xl-7 col-lg-8 order-1 order-lg-2">
              <div className="col-12">
                <div className="filter-wrap">
                  <div className="filter-title">
                    <h4>
                      Showing <span>3614</span> Course
                    </h4>
                  </div>
                  <div className="filter-dropdown-wrap">
                    <div className="filter-text">Sort by</div>
                    <div className="filter-dropdown">
                      <div className="select-wrap nice-select-active">
                        <select style={{display:"none"}}>
                          <option value="Category">Category</option>
                          <option value="Category">Web Development</option>
                          <option value="Category">Software</option>
                          <option value="Category">UI/UX Design</option>
                          <option value="Category">Data Science</option>
                          <option value="Category">Artificial Int</option>
                          <option value="Category">Miscellaneous</option>
                        </select>
                        <div className="nice-select" tabIndex="0">
                          <span className="current">Category</span>
                          <ul className="list">
                            <li
                              data-value="Category"
                              className="option selected focus"
                            >
                              Category
                            </li>
                            <li data-value="Category" className="option">
                              Web Development
                            </li>
                            <li data-value="Category" className="option">
                              Software
                            </li>
                            <li data-value="Category" className="option">
                              UI/UX Design
                            </li>
                            <li data-value="Category" className="option">
                              Data Science
                            </li>
                            <li data-value="Category" className="option">
                              Artificial Int
                            </li>
                            <li data-value="Category" className="option">
                              Miscellaneous
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {course.map((courses)=>{
              return(
                  <div className="col-xl-12 col-lg-6 col-md-6" key ={courses.id}>
                <div className="course-list-content mb-30">
                  <div className="course-img">
                    <img
                      src={courses.image}
                      alt="thumb"
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
                      <a ><Link to="/course_details">
                        The Most Complete Design Thinking Online Course On The
                        Market
                        </Link>
                      </a>
                    </div>
                    <div className="course-meta-bottom">
                      <span>
                        <img src="./assets/img/icon/document-g2.svg" alt="icon" />
                        {courses.comment} lessons
                      </span>
                      <span>
                        <img src="./assets/img/icon/3-user.svg" alt="icon" />
                        {courses.num_menber} Students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
           
              <div className="col-12">
                <div className="page-pagination justify-content-start">
                  <a href="#">
                    <i className="fa-solid fa-angles-left"></i>
                  </a>
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
