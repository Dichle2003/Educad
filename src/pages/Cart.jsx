import React, { useEffect } from 'react'

const Cart = () => {
    useEffect(()=>{
        document.title="Cart - educad"
    },[])
  return (
    <div><main>
        
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50" style={{backgroundImage: "url(assets/img/backgroud/page-title-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Cart</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="about-us.html">Cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-section pt-150 pb-180 pt-lg-120 pb-lg-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <form action="#" className="cart-list-form">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th colspan="2">Product</th>
                                                <th>Price</th>
                                                <th>QTY</th>
                                                <th>Total</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnails"><a href="#" className="product-img"><img src="assets/img/product/cart-1.jpg" alt="Product"/></a></td>
                                                <td className="product-info">
                                                    <a href="#" className="product-name">Rolex Gold Watch</a>
                                                    <div className="serial">#859632007881</div>
                                                    <ul className="style-none">
                                                        <li className="size">Size: 23”</li>
                                                        <li className="color">Color: Red</li>
                                                    </ul>
                                                </td>
                                                <td className="price"><span>$99.00</span></td>
                                                <td className="quantity">
                                                    <ul className="order-box style-none">
                                                        <li>
                                                            <div className="btn value-decrease">-</div>
                                                        </li>
                                                        <li><input type="number" min="1" max="22" value="1" disabled="" className="product-value val"/></li>
                                                        <li>
                                                            <div className="btn value-increase">+ </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="price total-price"><span>$99.00</span></td>
                                                <td><a href="#" className="remove-product">x</a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnails"><a href="#" className="product-img"><img src="assets/img/product/cart-2.jpg" alt="Product"/></a></td>
                                                <td className="product-info">
                                                    <a href="#" className="product-name">Quilted Gilet With Hood</a>
                                                    <div className="serial">#859632007881</div>
                                                    <ul className="style-none">
                                                        <li className="size">Size: 23”</li>
                                                        <li className="color">Color: N/A</li>
                                                    </ul>
                                                </td>
                                                <td className="price"><span>$120.00</span></td>
                                                <td className="quantity">
                                                    <ul className="order-box style-none">
                                                        <li>
                                                            <div className="btn value-decrease">-</div>
                                                        </li>
                                                        <li><input type="number" min="1" max="22" value="1" disabled="" className="product-value val"/></li>
                                                        <li>
                                                            <div className="btn value-increase">+ </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="price total-price"><span>$120.00</span></td>
                                                <td><a href="#" className="remove-product">x</a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnails"><a href="#" className="product-img"><img src="assets/img/product/cart-3.jpg" alt="Product"/></a></td>
                                                <td className="product-info">
                                                    <a href="#" className="product-name">Jogers with Black strip</a>
                                                    <div className="serial">#859632007881</div>
                                                    <ul className="style-none">
                                                        <li className="size">Size: N/A</li>
                                                        <li className="color">Color: Red</li>
                                                    </ul>
                                                </td>
                                                <td className="price"><span>$143.00</span></td>
                                                <td className="quantity">
                                                    <ul className="order-box style-none">
                                                        <li>
                                                            <div className="btn value-decrease">-</div>
                                                        </li>
                                                        <li><input type="number" min="1" max="22" value="1" disabled="" className="product-value val"/></li>
                                                        <li>
                                                            <div className="btn value-increase">+ </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="price total-price"><span>$143.00</span></td>
                                                <td><a href="#" className="remove-product">x</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart-footer">
                                    <div className="coupon-section d-md-flex justify-content-between px-sm-3 mx-lg-3">
                                        <div className="coupon-form d-lg-flex align-items-center mb-20">
                                            <input type="text" placeholder="Coupon Code"/>
                                            <button className="ht_btn coupon_btn md-mt-20 sm-mb-20">Apply Code</button>
                                        </div> 
                                        <div className="update-section d-flex justify-content-center justify-content-lg-end mb-20">
                                            <p>Continue Shopping</p>
                                            <button className="update-cart-button ms-sm-4">Update
                                                cart</button>
                                        </div>
                                    </div> 
                                </div> 
                            </form>
                        </div>
                        <div className="col-xl-4">
                            <div className="grey-bg cart-total-section d-flex flex-column pt-5">
                                <table className="cart-total-table">
                                    <tbody>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>$276.65</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping Fee:</th>
                                            <td>$13.00</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping Date: <span>14 Aug to 18 Aug</span></th>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td>$289.65</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="checkout.html" className="theme-btn-seven checkout-process mt-30">Proceed To
                                    Checkout</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
         
            
        </main></div>
  )
}

export default Cart