import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  useEffect(() => {
    document.title = "Instructors - Educad";
  });
  const [intructor, setIntructor] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/intructor")
      .then((response) => {
        setIntructor(response.data);
      })
      .catch((error) => {
        console.error("Loi khi lay du lieu", error);
      });
  }, []);

  return (
    <div>
      <main>
        <div
          className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50"
          style={{
            backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title-content text-lg-start text-center">
                  <h2 className="title">Instructors</h2>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a>
                          <Link to="/">Home</Link>
                        </a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                      </li>
                      <li>
                        <a>
                          <Link to="/instructors">Instructors</Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="instructors-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
          <div className="container">
            <div className="row mb-50 text-center">
              <div className="col-xl-12">
                <div className="section-title">
                  <div
                    className="sub-title mb-10 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <p>Instructor</p>
                  </div>
                  <div
                    className="title aos-init"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h2>Our Professional Instructor</h2>
                  </div>
                </div>
              </div>
            </div>
            {intructor.map((intructors) => {
              return (
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-md-6" key={intructors.id}>
                    <div
                      className="instructor-wrap-2 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="thumb">
                        <img
                          src={intructors.image}
                          alt={intructors.name}
                        />
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
                        <p className="sub-title">{intructors.category}</p>
                        <h3 className="title">
                          <a>
                            <Link to="/instructorsDetails">{intructors.name} </Link>
                          </a>
                        </h3>
                        <div className="meta-separator"></div>
                        <div className="meta">
                          <div className="meta-item">
                            <i className="fa-light fa-memo"></i> {intructors.lesson} Lesson
                          </div>
                          <div className="meta-item">
                            <i className="fa-light fa-users"></i>{intructors.num_member}  Students
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="row mt-20 text-center">
              <div className="col-xl-12">
                <div
                  className="theme-btn aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a href="#">All instructor</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Instructors;
