import axios from 'axios';
import React, {   useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
const BlogDetails = () => {
    useEffect(()=>{
        document.title="Blog Details - Educad"
    },[])
    
   const {id}= useParams();
    const[blog,setBlog]=useState([]);
    useEffect(()=>{
        axios
        .get(`http://127.0.0.1:8000/api/blog/${id}`)
        .then((response)=>{
            setBlog(response.data);
        }).catch((error)=>{
            console.error('loi khi lay du lieu',error);
        });
    },[id]);
  return (
    <div>

        <main>
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Blog Details</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="about-us.html">Blog Details</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="blog-details-section pt-150 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-4 order-2 order-xl-1 mt-lg-50 mt-md-50 mt-xs-50">
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
                                                    <a href="#">
                                                        Online Education Course The Expert Mentors
                                                    </a>
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
                                                    <a href="#">
                                                        Best Online Course Highly The Education
                                                    </a>
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
                                                    <a href="#">
                                                        Online Education Course The Expert Mentors
                                                    </a>
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
                        <div className="col-xl-7 col-lg-8 order-1 order-xl-2">
                            <div className="blog-detail-content">
                                <div className="meta-wrapper">
                                    <div className="meta-author">
                                        <a href="#">
                                            <img src="./assets/img/blog/blog-author-1.jpg" alt="blog"/>
                                            {blog.people}
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
                                <h3 className="title">
                                   {blog.title}
                                </h3>
                                <div className="thumb">
                                    <img src={blog.image} alt="blog"/>
                                </div>
                                <div className="text">
                                    <p>
                                       {blog.description}
                                    </p>
                                    <p>
                                        Continually synergize extensive imperatives whereas real-time e-services.
                                        Enthusiastically
                                        online promote technically sound core competencies via flexible.
                                    </p>
                                </div>
                                <div className="quote-wrap">
                                    <div className="icon">
                                        <img src="./assets/img/blog/blog-details-1.png" alt="quote"/>
                                    </div>
                                    <div className="message">
                                        <p>
                                            Modern redefine out the box technologies
                                            multimedia based networks. Education Proactively is architect economically
                                            sound
                                            synergy
                                            progressive value a time the competencies. Appropriately pontificate of.
                                        </p>
                                    </div>
                                    <div className="author">
                                        <h4>Davied Jone</h4>
                                        <p>General Manager &amp; CEO</p>
                                    </div>
                                </div>
                                <div className="text">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available majority have
                                        suffered
                                        agency alteration in some form, by injected humour, or words which don't look
                                        even
                                        slightly believable.
                                        If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                        isn't
                                        anything agency embarrassing your hidden in the middle.
                                    </p>
                                </div>
                            </div>
                            <div className="blog-detail-features">
                                <div className="features-content">
                                    <div className="features-content-thumb">
                                        <img src="./assets/img/blog/blog-18.jpg" alt="blog"/>
                                    </div>
                                    <div className="features-group">
                                        <ul>
                                            <li>
                                                <i className="fa-sharp fa-solid fa-check"></i>
                                                <span>The standard chunk of Lorem Ipsum</span>
                                            </li>
                                            <li>
                                                <i className="fa-sharp fa-solid fa-check"></i>
                                                <span>Objectivel redefine out-of other-box</span>
                                            </li>
                                            <li>
                                                <i className="fa-sharp fa-solid fa-check"></i>
                                                <span>The full spiffing good time no biggie</span>
                                            </li>
                                            <li>
                                                <i className="fa-sharp fa-solid fa-check"></i>
                                                <span>Objectivel redefine out-of-the box o</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="author-details">
                                <div className="thumb">
                                    <img src="./assets/img/blog/blog-author-2.jpg" alt="blog"/>
                                </div>
                                <div className="content">
                                    <h3>David Jonson</h3>
                                    <p>
                                        Objectively redefine out-of-the-box technologies for multimedia based networks.
                                        Proactively the architect economically sound synergy
                                    </p>
                                    <div className="social-info">
                                        <h4>Share This Course</h4>
                                        <div className="social-links">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-wrapper">
                                <div className="comment-title-section">
                                    <h3 className="comment-title mb-35">Comments</h3>
                                </div>
                                <div className="comments-box">
                                    <div className="comments-avatar">
                                        <img src="./assets/img/comment/comment-1.png" alt="thumb"/>
                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h4>Hardson Smith <span className="float-end"><a href="#" className="comments-replay"><i className="fal fa-reply"></i>
                                                        Reply</a></span></h4>
                                        </div>
                                        <span className="post-meta">a week ago</span>
                                        <div className="review-ratting">
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="review-text">
                                            <p>Synergistically than scalable platforms. Conveniently visualize installed
                                                online
                                                theproducts interactive results. Collaboratively corporate experiences
                                                open
                                                is
                                                applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-box ms-lg-5 ps-md-4">
                                    <div className="comments-avatar">
                                        <img src="./assets/img/comment/comment-2.png" alt="thumb"/>
                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h4>Kobir Jon <span className="float-end"><a href="#" className="comments-replay"><i className="fal fa-reply"></i> Reply</a></span></h4>
                                            <span className="post-meta">a week ago</span>
                                        </div>
                                        <div className="review-ratting">
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="review-text">
                                            <p>Synergistically than scalable platforms. Conveniently visualize installed
                                                online
                                                theproducts interactive results. Collaboratively corporate experiences
                                                open
                                                is
                                                applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-box">
                                    <div className="comments-avatar">
                                        <img src="./assets/img/comment/comment-3.png" alt="thumb"/>
                                    </div>
                                    <div className="comments-text">
                                        <div className="avatar-name">
                                            <h4>David Jonson <span className="float-end"><a href="#" className="comments-replay"><i className="fal fa-reply"></i>
                                                        Reply</a></span></h4>
                                        </div>
                                        <span className="post-meta">a week ago</span>
                                        <div className="review-ratting">
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star active"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="review-text">
                                            <p>Synergistically than scalable platforms. Conveniently visualize installed
                                                online
                                                theproducts interactive results. Collaboratively corporate experiences
                                                open
                                                is
                                                applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-btn">
                                    <a href="#">See More Review</a>
                                </div>
                            </div>
                            <div className="comment-form mb-10 mt-65">
                                <h3 className="comment-reply-title mb-35">Leave a comment</h3>
                                <div className="main-contact-form p-0">
                                    <form className="widget-form" action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-wrap">
                                                    <label className="label">Full Name</label>
                                                    <input type="text" name="fname" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-wrap">
                                                    <label className="label">Email</label>
                                                    <input type="email" name="email" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-25">
                                                <div className="input-wrap">
                                                    <label className="label">Comment</label>
                                                    <textarea name="message" placeholder="Write Your Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="theme-btn">
                                                    <button className="ht_btn hover-bg border-0">Post Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default BlogDetails