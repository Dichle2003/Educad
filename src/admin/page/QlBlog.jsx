import React, { useEffect, useState } from "react";
import {} from "react-router-dom";
import Header from "../layout/header.jsx";
import Navbar from "../layout/navbar.jsx";
import axios from "axios";
const QlBlog = () => {
  useEffect(() => {
    document.title = "Quản Lý Blog";
  }, []);
  const [blog, setBlog] = useState([]);
  
  const [formData,setFormData]=useState({
    title:'',
    description:'',
    people:'',
    comment:'',
    image:'',
    date:''
  });
  const onChange=(e)=>{
    const {name,value}=e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await axios.post(`http://127.0.0.1:8000/api/create_blog`,formData)
      alert("Thêm blog thành công");
      window.location.reload();

    }
    catch(error){
      console.error("Lỗi khi thêm blog:",error);
    }
  }
 

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blog`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu blog:", error);
      });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
const handleDelete=async(id)=>{
     if(!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;
     try{
      await axios.delete(`http://127.0.0.1:8000/api/delete_blog/${id}`)
      alert('Xóa sản phẩm thành công')
      setBlog((prev) => prev.filter((item) => item.id !== id));

     }
     catch(error){
       console.error('loi khi xoa san pham',error)
     }
}
    

  return (
    <div>
      {" "}
      <div>
        <Header />
        <div className="d-flex">
          <Navbar />
          <div className="container-fluid p-4">
            <div>
              <div className="row">
                <p className="col">Quản lý Blog</p>
                <button
                  onClick={handleShow}
                  className="col-2 bg-blue text-center  text-black  "
                  style={{ height: "30px", border: "none" }}
                >
                  + Thêm Blog
                </button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">People</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {blog.map((b, index) => {
                    return (
                      <tr key={b.id}>
                        <th scope="row">{index + 1}</th>
                        <td style={{ maxWidth: "200px" }}>{b.title}</td>
                        <td
                          style={{
                            maxWidth: "400px",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {b.description}
                        </td>
                        <td>{b.people}</td>
                        <td>{b.comment}</td>
                        <td>
                          <tr className="row">
                            <th className="col-2">
                              <i
                                class="fa-solid fa-pen"
                                style={{ color: "blue" }}
                              ></i>
                            </th>
                            <th className="col-9">
                              <i onClick={()=>handleDelete(b.id)}
                                class="fa-solid fa-trash "
                                style={{ color: "red" }}
                              ></i>
                            </th>
                          </tr>
                        </td>
                      </tr>
                    );
                  })}
                  {showModal && (
                    <div
                      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                      style={{ zIndex: 1050, background: "rgba(0,0,0,0.5)" }}
                    >
                      <div
                        className="bg-white rounded-4 p-4 w-100"
                        style={{ maxWidth: "600px" }}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5>Thêm sản phẩm mới</h5>
                          <button
                            className="btn-close"
                            onClick={handleClose}
                          ></button>
                        </div>
                        <form onSubmit={handleSubmit} className="vstack gap-3">
                        


                          <div className="row g-3">
                            <div className="col-md-6">
                              <label className="form-label fw-medium">
                                Title
                              </label>
                              <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Nhập tiêu đề..."
                                value={formData.title}
                                onChange={onChange}
                                required
                               
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-medium">
                                Description
                              </label>
                              <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Mô tả ngắn..."
                                value={formData.description}
                                onChange={onChange}
                                required
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-medium">
                                People
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="people"
                                placeholder="Số người..."
                                value={formData.people}
                                onChange={onChange}
                                required
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-medium">
                                Comment
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Số bình luận..."
                                name ="comment"
                                value={formData.comment}
                                onChange={onChange}
                                required
                              />
                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-medium">
                                Image
                              </label>
                              <input type="text" className="form-control" 
                              placeholder="nhập đường dẫn url"
                              name="image"
                              value={formData.image}
                              onChange={onChange}
                                required
                              />

                            </div>

                            <div className="col-md-6">
                              <label className="form-label fw-medium">
                                Date
                              </label>
                              <input type="date" className="form-control"
                              value={formData.date}
                              name="date"
                              onChange={onChange}
                              required
                              />
                            </div>
                          </div>

                          <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                            <button type="submit" className="btn btn-primary">
                              Thêm
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={handleClose}
                            >
                              Hủy
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QlBlog;
