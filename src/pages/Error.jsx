import React from 'react'

const Error = () => {
  return (
    <div><main>

           
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content text-lg-start text-center">
                                <h2 className="title">Error 404</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="error.html">Error 404</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="error-grid-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row pb-50 text-center">
                        <div className="col-xl-12">
                            <div className="error-thumb">
                                <img src="./assets/img/error/error-thumb.png" alt="thumb"/>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-xl-12">
                            <div className="error-content">
                                <div className="error-title">
                                    <h2>Page Not Found</h2>
                                </div>
                                <div className="error-text">
                                    <p>The page you are looking for does not exist. Please try it.</p>
                                </div>
                                <div className="theme-btn">
                                    <a href="index.html">Back To Page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
           
        </main></div>
  )
}

export default Error