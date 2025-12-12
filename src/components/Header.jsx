import { Link,  } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Header() {
     const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [cart, setCart] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => {
    setActive(prev => (prev === "active" ? "" : "active"));
  };
   const handleClickCart = () => {
    setCart(prev => (prev === "cart-info" ? "" : "cart-info"));
  };
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < 245) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    // Gắn sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogout=async()=>{
   
    try {
        const token = localStorage.getItem("token");
    await axios.post("http://127.0.0.1:8000/api/logout", {},{
        headers: {Authorization: `Bearer ${token}`}
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user")
      alert("Đăng xuất thành công!");
      navigate("/login");
  }
  catch (error) {
    console.error("Lỗi khi đăng xuất:", error);
  }
   
  }
  
  return (
    <>
    {/* <!-- shopping-cart-bar start --> */}
    <div className={`cart-menu-right cart-style-1 white-bg ${cart}`}>
        <div className="close-icon float-right" onClick={handleClickCart}>
            <a href="javascript:void(0);">
              <i className="fal fa-times"></i>
              </a>
        </div>
        <div className="dropdown-cart-products">
            <div className="product">
                <div className="product__cart-details">
                    <h5 className="product-title">
                        <a href="product.html">Best color ful Lamp for ceiling</a>
                    </h5>

                    <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>
                            x $84.00
                        </span>
                </div>

                <figure className="product__image-container">
                    <a href="product.html" className="product-img">
                        <img src="assets/img/product/cart/product-01.jpg" alt="product" />
                    </a>
                </figure>
                <a href="#" className="remove-btn" title="Product remove"><i className="fal fa-times"></i></a>
            </div>
            <div className="product">
                <div className="product__cart-details">
                    <h5 className="product-title">
                        <a href="product.html">Love color Table Lamp for room</a>
                    </h5>

                    <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>
                            x $84.00
                        </span>
                </div>

                <figure className="product__image-container">
                    <a href="product.html" className="product-img">
                        <img src="assets/img/product/cart/product-02.jpg" alt="product" />
                    </a>
                </figure>
                <a href="#" className="remove-btn" title="Product remove"><i className="fal fa-times"></i></a>
            </div>
            <div className="product">
                <div className="product__cart-details">
                    <h5 className="product-title">
                        <a href="product.html">Best color ful Lamp for ceiling</a>
                    </h5>

                    <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>
                            x $84.00
                        </span>
                </div>

                <figure className="product__image-container">
                    <a href="product.html" className="product-img">
                        <img src="assets/img/product/cart/product-03.jpg" alt="product" />
                    </a>
                </figure>
                <a href="#" className="remove-btn" title="Product remove"><i className="fal fa-times"></i></a>
            </div>
        </div>

        <div className="cart-total mb-15">
            <span>Total</span>
            <span className="cart-total-price">$160.00</span>
        </div>

        <div className="cart-action">
            <a href="cart.html" className="btn btn-primary">View Cart</a>
            <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i
                    className="fal fa-long-arrow-right"></i></a>
        </div>
    </div>
    {/* <!-- shopping-cart-bar end --> */}
    {/* <!-- header start --> */}
    <header className="header-area header-style-2">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-6 offset-xl-3">
                        <div className="header-contact-info d-lg-flex">
                            <div className="info-wrap">
                                <span>Call: </span>
                                <a href="tel:808555-0111">(808) 555-0111</a>
                            </div>
                            <div className="info-separator d-none d-lg-inline-block"></div>
                            <div className="info-wrap d-none d-lg-inline-block">
                                <span>Mail: </span>
                                <a href="mailto:alma.lawson@example.com">alma.lawson@example.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-6 text-end">
                        <div className="header-buttons justify-content-end">
                            <a onClick={handleLogout}>
                                <img src="assets/img/icon/user.svg" alt="icon" />
                            </a>
                            <a className="shopping-cart" href="javascript:void(0)" onClick={handleClickCart}>
                                <img src="assets/img/icon/cart.svg" alt="icon" />
                                <span className="badge">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`main-header-area header-bottom ${isSticky ? "sticky-header" : ""}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-6 d-flex align-items-center">
                        <div className="logo logo-hide">
                            <a href="index.html">
                                <img className="logo-dark" src="assets/img/logo/logo.svg" alt="logo" />
                                <img className="logo-white" src="assets/img/logo/logo-white.svg" alt="logo" />
                            </a>
                            <div className="shape"></div>
                        </div>
                        <div className="category-menu-wrap">
                            <div className="header-dropdown ms-0">
                                <form action="#">
                                    <div className="select-wrap nice-select-active">
                                        <select style={{display: 'none'}}>
                                            <option value="Category">Category</option>
                                            <option value="Category">Web Development</option>
                                            <option value="Category">Software</option>
                                            <option value="Category">UI/UX Design</option>
                                            <option value="Category">Data Science</option>
                                            <option value="Category">Artificial Int</option>
                                            <option value="Category">Miscellaneous</option>
                                        </select>
                                        <div className="nice-select" tabIndex="0"><span className="current">Category</span>
                                            <ul className="list">
                                                <li data-value="Category" className="option selected">Category</li>
                                                <li data-value="Category" className="option">Web Development</li>
                                                <li data-value="Category" className="option">Software</li>
                                                <li data-value="Category" className="option">UI/UX Design</li>
                                                <li data-value="Category" className="option">Data Science</li>
                                                <li data-value="Category" className="option">Artificial Int</li>
                                                <li data-value="Category" className="option">Miscellaneous</li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-6 d-flex justify-content-end align-items-center">
                        <div className="main-menu d-none d-xl-block">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li className="has-dropdow">
                                        <a href="">Course
                                            <i className="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><Link to="/course_list">Course List</Link></li>
                                            <li><Link to="/course_grid">Course Grid</Link></li>
                                            <li><Link to="/course_details">Course Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdow">
                                        <a href="#">Pages
                                             <i className="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><Link to="/faq">FAQ</Link></li>
                                            <li><Link to="/instructors">Instructors</Link></li>
                                            <li><Link to ="/instructorsDetails">Instructors Details"</Link></li>
                                            <li className="has-dropdow">
                                                <a href="#">Shop
                                                     <i className="fa-solid fa-caret-down"></i> <span></span></a>
                                                <ul className="sub-menu">
                                            <li><Link to="/product">Products</Link></li>
                                            <li><Link to ='/productdetail'>Products Detail</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to = "/login">Login</Link></li>
                                            <li><Link to = "/signup">Sign Up</Link></li>
                                            <li><Link to = "/cart">Cart</Link></li>
                                            <li><Link to = "/checkout">Check Out</Link></li>
                                            <li><Link to = "/error">Error</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdow">
                                        <a href="#">Blogs
                                             <i className="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><Link to = "/blockclassic">Block Classic</Link></li>
                                            <li><Link to = "/blockgrid">Block Grid</Link></li>
                                            <li><Link to = "/blockdetails">Block Details</Link></li>
                                        </ul>
                                    </li>
                                            <li><Link to = "/contact">Contact</Link></li>
                                </ul>
                            </div>
                        <div className="header-dropdown cat-menu-hide">
                            <form action="#">
                                <div className="select-wrap nice-select-active">
                                    <select style={{display: 'none'}}>
                                        <option value="Category">Category</option>
                                        <option value="Category">Web Development</option>
                                        <option value="Category">Software</option>
                                        <option value="Category">UI/UX Design</option>
                                        <option value="Category">Data Science</option>
                                        <option value="Category">Artificial Int</option>
                                        <option value="Category">Miscellaneous</option>
                                    </select>
                                    <div className="nice-select" tabIndex="0"><span className="current">Category</span>
                                        <ul className="list">
                                            <li data-value="Category" className="option selected">Category</li>
                                            <li data-value="Category" className="option">Web Development</li>
                                            <li data-value="Category" className="option">Software</li>
                                            <li data-value="Category" className="option">UI/UX Design</li>
                                            <li data-value="Category" className="option">Data Science</li>
                                            <li data-value="Category" className="option">Artificial Int</li>
                                            <li data-value="Category" className="option">Miscellaneous</li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="cart-sidebar">
                            <a className="shopping-cart" href="#">
                                <img src="assets/img/icon/cart-w.svg" alt="icon" />
                                <span className="badge">0</span>
                            </a>
                        </div>
                        <div className="open-menu-bar" onClick={handleClick}>
                            <div className="bar-1"></div>
                            <div className="bar-2"></div>
                            <div className="bar-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- header end --> */}

    {/* <!-- off-canvas start --> */}
    <div className={`off-canvas-section ${active}`}>
        <div className={`off-canvas-wrap ${active}`}>
            <div className="off-canvas-head mb-30">
                <div className="logo">
                    <a href="index.html">
                        <img src="assets/img/logo/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="off-canvas-close" onClick={handleClick}>
                  <i className="fa-solid fa-xmark"></i></div>
            </div>
            <div className="off-canvas-menu mb-30">
                <ul>
                    <li className="has-dropdown"><span className="toggle-btn"><i className="fa-solid fa-v"></i></span>
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 2</a></li>
                            <li><a href="index-3.html">Home 3</a></li>
                        </ul>
                    </li>
                    <li><a href="about-us.html">About</a></li>
                    <li className="has-dropdown"><span className="toggle-btn"><i className="icon"></i></span>
                        <a href="#">Course</a>
                        <ul className="sub-menu">
                            <li><a href="course-list.html">Course List</a></li>
                            <li><a href="course-grid.html">Course Grid</a></li>
                            <li><a href="course-details.html">Course Details</a></li>
                        </ul>
                    </li>
                    <li className="has-dropdown"><span className="toggle-btn"><i className="icon"></i></span>
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="instructors.html">Instructors</a></li>
                            <li><a href="instructors-details.html">Instructors Details</a></li>
                            <li className="has-dropdown"><span className="toggle-btn"><i className="icon"></i></span>
                                <a href="#">Shop <span></span></a>
                                <ul className="sub-menu">
                                    <li><a href="product.html">Product</a></li>
                                    <li><a href="product-details.html">Product Details</a></li>
                                </ul>
                            </li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="signup.html">Signup</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="error.html">Error</a></li>
                        </ul>
                    </li>
                    <li className="has-dropdown"><span className="toggle-btn"><i className="icon"></i></span>
                        <a href="#">Blogs</a>
                        <ul className="sub-menu">
                            <li><a href="blog-classic.html">Blog Classic</a></li>
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            {/* <!-- offset-sidebar start --> */}
            {/* <hr> */}
            <div className="offset-sidebar">
                {/* <!-- <div className="mobile-menu"></div> --> */}
                <div className="offset-widget mb-40">
                    <div className="info-widget">
                        <h4 className="offset-title mb-20">About Us</h4>
                        <p className="mb-30">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and
                            praising pain was born and will give you a complete account of the system and
                            expound the actual teachings of the great explore
                        </p>
                    </div>
                </div>
                <div className="offset-widget mb-30 pr-10">
                    <div className="info-widget info-widget2">
                        <h4 className="offset-title mb-20">Contact Info</h4>
                        <p>
                            <i className="fal fa-address-book"></i>
                            23/A, Miranda City Likaoli Prikano, Dope</p>
                        <p>
                            <i className="fal fa-phone"></i>
                            +0989 7876 9865 9
                        </p>
                        <p>
                            <i className="fal fa-envelope-open"></i>
                            info@example.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="header-buttons d-flex justify-content-center mt-20">
                <a href="login.html">
                    <img src="assets/img/icon/user.svg" alt="icon"/>
                </a>
                <a href="cart.html">
                    <img src="assets/img/icon/cart.svg" alt="icon" />
                </a>
            </div>
        </div>
        <div className="off-canvas-overlay"></div>
    </div>
    {/* <!-- off-canvas end --> */}
    </>
  );
}

export default Header;