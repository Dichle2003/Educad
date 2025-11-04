import React, { useEffect } from 'react'

const Faq = () => {
    
        useEffect(()=>{
             document.title = "Faq - Educad";
        },[]);
    


  return (
    <div>
        <main>
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50"style={{ backgroundImage: 'url(./assets/img/backgroud/page-title-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content text-lg-start text-center">
                                <h2 className="title">FAQ’s</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="faq.html">FAQ’s</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="categories-section pt-150 pt-lg-120 pt-md-80 pt-xs-50">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-50">
                                <div className="sub-title mb-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <p>Top Categories</p>
                                </div>
                                <div className="title aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <h2>Explore Our Courses</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center">
                        <div className="col">
                            <div className="course-category-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                <div className="icon">
                                    <img src="assets/img/icon/bag.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h4>Account &amp; Business</h4>
                                    <p>263+ Course Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="course-category-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon">
                                    <img src="assets/img/icon/document.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h4>Certificat Course</h4>
                                    <p>350+ Course Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="course-category-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                                <div className="icon">
                                    <img src="assets/img/icon/camera.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h4>Photography</h4>
                                    <p>250+ Course Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="course-category-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon">
                                    <img src="assets/img/icon/volume-up.svg" alt="icon"/>
                                </div>
                                <div className="content">
                                    <h4>Audio Book</h4>
                                    <p>260+ Course Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="course-category-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="350">
                                <div className="icon">
                                    <img src="assets/img/icon/category.svg" alt="icon"/>
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
           
            <div className="faq-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-50">
                                <div className="sub-title mb-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <p>Frequently Ask Question</p>
                                </div>
                                <div className="title aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <h2>Have Your Any Question?</h2>
                                </div>
                            </div>
                            <div className="faq-content-wrap-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div className="faq-accordion-2" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How Can I Pay?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What Is Process To Get Expert Team?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How Does About Online Services?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How Can I Migrate To Another Site?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                How Can I Migrate To Another Site?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                How Does About Online Services?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                Can I Develop My Website Without Code?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-30">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                How Many Sites I Can Create At Once?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Objectively redefine out-of-the-box technologies for multimedia based
                                                networks.
                                                Proactively the architect economically sound synergy with progressive
                                                value.
                                                Authoritatively engage out-of-is the box users for interoperable core
                                                competencies. Appropriately pontificate B2B strategic theme of time
                                                areas
                                                rather
                                                than professional metrics. Monotonectally.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xl-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="theme-btn">
                                <a href="#">Add Questions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            
        </main>

    </div>
  )
}

export default Faq