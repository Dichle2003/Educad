import React from "react";
import Header from "../layout/header";
import Navbar from "../layout/navbar";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import { useEffect, useState } from "react";
const Home = () => {
  const[total,setTotal]= useState();
  const[countUser,setCountUser]= useState();
  const[product,setProduct]=useState([]);
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/count_user')
    .then((response)=>{
      setCountUser(response.data.count);

    }).catch((error)=>{
      console.error("Loi khi lay du lieu",error);
    });
  }, [])
  useEffect(()=>{
      axios
      .get('http://127.0.0.1:8000/api/total_product')
      .then((response)=>{
      console.log('total', response.data)

        setTotal(response.data);
      }).catch((error)=>{
        console.error("Loi khi lay du lieu",error);
      });
  },[])

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/product`)
    .then((res)=>{
      setProduct(res.data);
      
    }).catch((err)=>{
      console.error('loi khi lay san pham',err);
    })
  },[])
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Navbar />

        <div className="container-fluid p-4">
       
          <div className="row g-3 justify-content-center mb-4">
     
            <div className="col-xl-3 col-md-6 col-sm-6">
              <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="mb-1 fw-semibold text-secondary">
                    Tổng sản phẩm
                  </p>
                  <h5 className="fw-bold text-dark mb-0">{total}</h5>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#e7f1ff",
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-box text-primary fs-5"></i>
                </div>
              </div>
            </div>

    
            <div className="col-xl-3 col-md-6 col-sm-6">
              <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="mb-1 fw-semibold text-secondary">
                    Tổng tài khoản
                  </p>
                  <h5 className="fw-bold text-dark mb-0">{countUser}</h5>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#e7f1ff",
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-user text-primary fs-5"></i>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-3 col-md-6 col-sm-6">
              <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="mb-1 fw-semibold text-secondary">
                    Tổng đơn hàng
                  </p>
                  <h5 className="fw-bold text-dark mb-0">186</h5>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#e7f1ff",
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-cart-shopping text-primary fs-5"></i>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-3 col-md-6 col-sm-6">
              <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="mb-1 fw-semibold text-secondary">
                    Tổng khóa học
                  </p>
                  <h5 className="fw-bold text-dark mb-0">37</h5>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#e7f1ff",
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-book-open text-primary fs-5"></i>
                </div>
              </div>
            </div>
          </div>

       {product.map((p)=>{
           return(
            <div className="py-3" key ={p.id}>
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
              <div className="row align-items-center">
                <div className="col-auto">
                  <i className="fa-solid fa-lock fs-4 text-primary"></i>
                </div>

                <div className="col">
                  <p className="mb-1 fw-semibold text-dark">{p.name}</p>
                  <p className="text-muted mb-0">{p.description}</p>
                </div>

                <div className="col-auto text-end">
                  <p className="text-muted mb-0">{moment(p.created_at).fromNow()}</p>
                </div>
              </div>
            </div>
          </div>
           )
       })}
         
        </div>
      </div>
    </div>
  );
};

export default Home;
