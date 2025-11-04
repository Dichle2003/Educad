import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
const BlogGrid = () => {
    useEffect(()=>{
        document.title="Blog Grid - Educad"
    },[]);
    const [blog,setBlog]=useState([]);
    useEffect(()=>{
        axios
        .get('http://127.0.0.1:8000/api/blog')
        .then((response)=>{
            setBlog(response.data);

        }).catch((error)=>{
            console.error('loi khi lay du lieu',error);
        });
    })


  return (
    <div>

        <main>
          
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Blog Grid</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><Link to = "/">Home/</Link></li>
                                        <li>Pages</li>
                                        <li><Link to = "/blockgrid">Blog Grid</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="blog-grid-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-50">
                                <div className="sub-title mb-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <p>Our Recent Articles</p>
                                </div>
                                <div className="title aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <h2>Latest Blog &amp; News</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       
                       {blog.map((blogs)=>{
                        return(
                                <div className="col-lg-4 col-md-6" key={blogs.id}>
                            <div className="blog-grid-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                <div className="blog-img">
                                    <img src={blogs.image} alt="thumb"/>
                                </div>
                                <div className="meta">
                                    <a href="#">
                                        <img src="./assets/img/icon/hat.svg" alt="icon"/>
                                        Education
                                    </a>
                                    <a href="#">
                                        <img src="./assets/img/icon/archive.svg" alt="icon"/>
                                        {blogs.date}
                                    </a>
                                </div>
                                <h3 className="title">
                                    <Link to = {`/blockdetails/${blogs.id}`}>
                                       {blogs.title}
                                       </Link>
                                    
                                </h3>
                                <div className="text">
                                    <p>{blogs.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                       })}
                        
                       
                    </div>
                    <div className="row text-center mt-20">
                        <div className="col-xl-12">
                            <div className="page-pagination aos-init" data-aos="fade-up" data-aos-delay="200">
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
           
        </main>
    </div>
  )
}

export default BlogGrid