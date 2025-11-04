import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    useEffect(()=>{
        document.title = "Document- Educad";
    },[])

    const [product,setProduct]=useState([]);
    useEffect (()=>{
        fetchProduct();
    },[]);
    const fetchProduct=()=>{
        axios
        .get(`http://127.0.0.1:8000/api/product`)
        .then((response)=>{
            setProduct(response.data)
        })
        .catch((err)=>{
            console.error('lỗi khi lấy sản phẩm',err);

        });
        

    }

  return (
    <div>
        <main>
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Products</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><Link to ='/'>Home</Link></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><Link to ='/product'>Products</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <section className="products__section pt-150 pb-130 pt-lg-60 pb-lg-40">
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center">
                        <div className="col-sm-6 text-center text-sm-start mb-40">
                            <p className="show-product-count fw-medium">
                                Showing 07/200 result
                            </p>
                        </div>
                        <div className="col-sm-6 text-center text-sm-end mb-40">
                            <div className="sort-item">
                                <div className="dropdown">
                                    <span>Sort by</span>
                                    <button className="sort-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Default <i className="bi bi-chevron-down"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Latest</a></li>
                                        <li><a className="dropdown-item" href="#">Newst</a></li>
                                        <li><a className="dropdown-item" href="#">A to Z</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-4 gx-xxl-5">
                        <div className="col-lg-9">
                            <div className="row gx-4 px-0">
                                {product.map((products)=>{
                                    return(
                                        <div className="col-lg-4 col-md-4 col-sm-6"  key={products.id}>
                                    <figure className="product__wrapper white-bg mb-45">
                                        <div className="product-thumb">
                                            <Link to ='/productdetail'><img src={products.image} className="figure-img w-100" alt="product_img"/></Link>
                                            <div className="action-btn">
                                                <a href="#"><i className="fa-regular fa-cart-shopping"></i></a>
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                                <a href="#"><i className="fa-light fa-eye"></i></a>
                                                <a href="#"><i className="fa-light fa-code-compare"></i></a>
                                            </div>
                                        </div>
                                        <figcaption className="figure-caption">
                                            <div className="product-tag">{products.slug}</div>
                                            <h4>
                                                <Link className="product__title " to ='/productdetail'>
                                                    {products.name}
                                                    </Link>
                                                </h4>
                                            <div className="price">
                                                <span className="old-price">{products.price}</span>
                                            </div>
                                           <Link className="cart-btn" to ={`/productDetails/${products.id}`}><i className="bi bi-cart2"></i>
                                                Shop
                                                Now
                                                </Link>
                                        </figcaption>
                                    </figure>
                                </div>

                               ) })}
                                
       
                                <div className="col-lg-12 mt-15">
                                    <div className="page-pagination justify-content-lg-start justify-content-center">
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
                        <div className="col-lg-3 order-lg-first">
                            <div className="shop-sidebar">
                                <div className="sidebar-widget mb-40">
                                    <div className="widget-title mb-15">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="sidebar_widget-content">
                                        <div className="categories-accordion">
                                            <div className="accordion" id="accordionShop">
                                                <div className="accordion-item mb-10">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Smart Glass
                                                    </button>
                                                    <ul id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionShop">
                                                        <li><a href="#">Ai Glass</a></li>
                                                        <li><a href="#">Digital Glass</a></li>
                                                        <li><a href="#">5D Gadget</a></li>
                                                    </ul>
                                                </div>
                                                <div className="accordion-item mb-10">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Watches
                                                    </button>
                                                    <ul id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionShop">
                                                        <li><a href="#">Smart Gear</a></li>
                                                        <li><a href="#">Apple Watch</a></li>
                                                        <li><a href="#">Smart Gadget</a></li>
                                                    </ul>
                                                </div>
                                                <div className="accordion-item mb-10">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Smart Mobile
                                                    </button>
                                                    <ul id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionShop">
                                                        <li><a href="#">SamSung Gadget</a></li>
                                                        <li><a href="#">Apple Gear</a></li>
                                                        <li><a href="#">Smart Gadget</a></li>
                                                    </ul>
                                                </div>
                                                <div className="accordion-item mb-10">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Camera
                                                    </button>
                                                    <ul id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionShop">
                                                        <li><a href="#">Smart Camera</a></li>
                                                        <li><a href="#">3D Gadget</a></li>
                                                        <li><a href="#">5D Camera</a></li>
                                                    </ul>
                                                </div>
                                                <div className="accordion-item mb-10">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Play Station
                                                    </button>
                                                    <ul id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionShop">
                                                        <li><a href="#">Sony Gadget</a></li>
                                                        <li><a href="#">Xbox Game</a></li>
                                                        <li><a href="#">Smart Gadget</a></li>
                                                    </ul>
                                                </div>
                                                <div className="accordion-item">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Headphone
                                                    </button>
                                                    <ul id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionShop">
                                                        <li><a href="#">HiFi Earphone</a></li>
                                                        <li><a href="#">Wearless Speaker</a></li>
                                                        <li><a href="#">Bedside Alexa</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-40">
                                    <div className="widget-title mb-15">
                                        <h4>hightlight</h4>
                                    </div>
                                    <div className="sidebar_widget-content">
                                        <ul className="highlight_content">
                                            <li><a href="#">Promotions (885)</a></li>
                                            <li><a href="#">New Arrivals (987)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-40">
                                    <div className="widget-title mb-15">
                                        <h4>By Prices</h4>
                                    </div>
                                    <div className="sidebar_widget-content">
                                        <div className="price__slider">
                                            <form className="price_range" action="#">
                                                <button className="filter">filter</button>
                                                <label htmlFor="amount">Price:</label>
                                                <input type="text" id="amount" readOnly="" style={{ border: 0, color: "#f6931f", fontWeight: "bold" }}
/>
                                            </form>

                                            <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header"style={{ width: "45%", left: "15%" }}
></div><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:'15%' }}></span><span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:" 60%"}}></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-40">
                                    <div className="widget-title mb-15">
                                        <h4>by review</h4>
                                    </div>
                                    <div className="sidebar_widget-content">
                                        <div className="widget_review">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                                                <div className="products_rating mb-10">
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <span>(05)</span>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                                <div className="products_rating mb-10">
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <span>(04)</span>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
                                                <div className="products_rating mb-10">
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <span>(03)</span>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
                                                <div className="products_rating mb-10">
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <span>(02)</span>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
                                                <div className="products_rating">
                                                    <a href="#"><i className="fas fa-star"></i></a>
                                                    <span>(03)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-40">
                                    <div className="widget-title mb-20">
                                        <h4>by color</h4>
                                    </div>
                                    <div className="sidebar_widget-content">
                                       <div className="color_picker">
  <a href="#" className="color" style={{ backgroundColor: "#e6c79e" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#09abd7" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#2fb946" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#9e8367" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#dd620a" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#eded0d" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#926f08" }}></a>
  <a href="#" className="color" style={{ backgroundColor: "#4b06c2" }}></a>
</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
         
           
        </main>

    </div>
  )
}

export default Products