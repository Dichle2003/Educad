import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams

const ProductsDetails = () => {
  useEffect(() => {
    document.title = "product detail - educad";
  }, []);

  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    console.log("Add to cart:", product, quantity);
  };

  const handleBuyNow = () => {
    console.log("Buy now:", product, quantity);
  };

  useEffect(() => {
    if (!id) {
      setError("ID sản phẩm không hợp lệ");
      setLoading(false);
      return;
    }

    axios
      .get(`http://127.0.0.1:8000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setError("Không thể tải sản phẩm. Vui lòng thử lại.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container">Đang tải...</div>;
  if (error) return <div className="container text-danger">Lỗi: {error}</div>;
  if (!product) return <div className="container">Không tìm thấy sản phẩm.</div>;

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
                <div className="page-title-content">
                  <h2 className="title">Product Details</h2>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="product-details-section pt-150 pb-40 pt-lg-60">
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-lg-6 mb-40">
                <div className="product-img-slider">
                  <div className="product__item__slider mb-20">
                    {product.images ? (
                      product.images.map((img, index) => (
                        <div key={index} className="slick-slide">
                          <img src={img.url || img} alt={product.name} className="w-100" />
                        </div>
                      ))
                    ) : (
                      <img src={product.image || "assets/img/product/product_big_01.jpg"} alt={product.name} className="w-100" />
                    )}
                  </div>
                  <div className="product__thumb__slider">
                    {product.thumbs ? (
                      product.thumbs.map((thumb, index) => (
                        <div key={index} className="product-item slick-slide" style={{ width: "170px" }}>
                          <img src={thumb.url || thumb} alt="Thumb" style={{ width: "100%" }} />
                        </div>
                      ))
                    ) : (
                      <div className="product-item slick-slide" style={{ width: "170px" }}>
                        <img src={product.image || "assets/img/product/product_thumb_01.jpg"} alt="Thumb" style={{ width: "100%" }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-40">
                <div className="product-details-content pt-lg-4 ps-xl-5">
                  <div className="product__details">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="price-list mt-25 mb-25">
                      <span className="old-price">${product.old_price || product.price}</span>
                      <span className="new-price">${product.price}</span>
                    </div>
                    <div className="product-rating mb-20">
                      {[...Array(product.rating || 5)].map((_, i) => (
                        <a key={i} href="#"><i className="fas fa-star"></i></a>
                      ))}
                      <a href="#">({product.rating || 5})</a>
                    </div>
                    <div className="color-mode mb-25">
                      <p className="mr-20">Color:</p>
                      {product.colors?.map((color, index) => (
                        <span key={index} style={{ backgroundColor: color }} className="color-cus"></span>
                      )) || (
                        <>
                          <span style={{ backgroundColor: "#F2994A" }} className="color-cus"></span>
                          <span style={{ backgroundColor: "#008000" }} className="color-cus"></span>
                          <span style={{ backgroundColor: "#EB5757" }} className="color-cus"></span>
                          <span style={{ backgroundColor: "#2F80ED" }} className="color-cus"></span>
                        </>
                      )}
                    </div>
                    <p>{product.description}</p>
                    <p className="stock-text border-bottom d-inline-block mt-20 mb-25">
                      {product.stock ? `${product.stock} Stock Ready To Buy` : "Last 24 Stock Ready To Buy"}
                    </p>
                    <div className="product-category">
                      <p>
                        Category: <span className="fw-bold">{product.category || "Watch, Smartwatch, Apple"}</span>
                      </p>
                    </div>
                    <div className="products_quantity_area d-sm-flex align-items-center mt-40">
                      <div className="product-quantity text-center mr-30 mb-30">
                        <div className="cart-plus-minus">
                          <input type="text" value={quantity} readOnly />
                          <div className="dec qtybutton" onClick={handleDecrement}>-</div>
                          <div className="inc qtybutton" onClick={handleIncrement}>+</div>
                        </div>
                      </div>
                      <div className="products_action_area d-flex align-items-center mb-30">
                        <a className="add-to-cart" href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <a href="#" className="cart-btn" onClick={(e) => { e.preventDefault(); handleBuyNow(); }}>
                      Buy Now
                    </a>
                    <div className="social-icon mt-30 mb-30">
                      <span className="pe-1 me-sm-4">Share Now:</span>
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="product-review-section pb-100 pb-lg-15">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12">
                <ul
                  className="nav nav-tabs product-tab"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Product Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      Product Include
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      Product Review
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-10">
                <div className="tab-content mt-40 mb-45" id="myTabContent">
                  <div
                    className="tab-pane fade show active text-center"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>{product.description || "Holisticly coordinate user-centric resources through client-centric content. Completely embrace intermandated models for pandemic supply chains. Synergistically facilitate ubiquitous platforms whereas error-free initiatives. Intrinsicly maintain visionary interfaces before orthogonal relationships. Compellingly iterate world-className process improvements after resource-leveling materials."}</p>
                    <p>
                      Authoritatively maintain technically sound internal or
                      "organic" sources whereas quality leadership. Conveniently
                      customize team driven. Holisticly coordinate user-centric
                      resources through client-centric content. Completely
                      embrace intermandated models for pandemic supply chains.
                      Synergistically facilitate ubiquitous platforms whereas
                      error-free initiatives. Intrinsicly maintain visionary
                      interfaces before orthogonal relationships. Compellingly
                      iterate world-className process improvements after
                      resource-leveling materials.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="description-content mb-30">
                          <h4 className="semi-title mb-20">About Products</h4>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, humour, or randomised words embarrassing
                            hidden in the midde of text. There are many
                            variations of passage of Lorem Ipsum don't look even
                            slightly believable. embarrassing hidden.
                          </p>
                          <div className="feature-list mt-50">
                            <h4 className="semi-title mb-20">Features</h4>
                            <p className="para">
                              Vestibulum velit nibh, egestas vel faucibus vitae,{" "}
                              <span>feugiat sollicitudin</span> urna. Praesent
                              iaculisin sapien. There are many variations of
                              passages of Lorem Ipsum available.
                            </p>
                            <p className="para">
                              Donec libero dolor, tincidunt id laoreet vitae,
                              ullamcorper eu tortor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12">
                        <div className="desc-img mb-30">
                          <img
                            className="w-100"
                            src={product.image || "assets/img/product/product_big_01.jpg"}
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="description_content mb-30">
                          <div className="product-rating mb-35">
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                            <a href="#">(03 Reviews)</a>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, humour, or randomised words embarrassing
                            hidden in the midde of text. There are many
                            variations of passage of Lorem Ipsum don't look even
                            slightly believable. embarrassing hidden.
                          </p>
                          <div className="feature_list mt-30">
                            <h4 className="mb-20">Features</h4>
                            <p>
                              Vestibulum velit nibh, egestas vel faucibus vitae,{" "}
                              <span className="text-theme">
                                feugiat sollicitudin
                              </span>{" "}
                              urna. Praesent iaculisin sapien. There are many
                              variations of passages of Lorem Ipsum available.
                            </p>
                            <p>
                              Donec libero dolor, tincidunt id laoreet vitae,
                              ullamcorper eu tortor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12">
                        <div className="desc_img mb-30">
                          <img
                            className="w-100"
                            src={product.image || "assets/img/product/product_big_01.jpg"}
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="subscribe-section bg-white pb-md-80 pb-xs-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="subscribe-wrapper aos-init"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6">
                      <div className="subscribe-title text-lg-start text-center">
                        <h3>Subscribe To Our Newsletter</h3>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-md-30 mt-xs-30">
                      <div className="subscribe-form text-lg-start text-center">
                        <form action="#">
                          <div className="input-wrap">
                            <input type="email" placeholder="Enter Your Mail" />
                            <button type="submit">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsDetails;