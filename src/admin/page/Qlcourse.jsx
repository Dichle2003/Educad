import React, { useState, useEffect } from "react";
import Header from "../layout/header";
import Navbar from "../layout/navbar";
import axios from "axios";

const Qlcourse = () => {
  useEffect(() => {
    document.title = "Quản Lý Course";
  }, []);

  const [course, setCourse] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    category_key: "",
    comment: "",
    num_menber: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editing, setEditing] = useState(null);

  // Lấy danh sách course
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/course`)
      .then((response) => {
        setCourse(response.data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu course:", error);
      });
  }, []);

  // --- THÊM COURSE ---
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://127.0.0.1:8000/api/create_course`, formData);
      alert("Thêm course thành công!");
      setShowModal(false);
      setFormData({
        name: "",
        image: "",
        price: "",
        description: "",
        category: "",
        category_key: "",
        comment: "",
        num_menber: "",
      });
      const res = await axios.get(`http://127.0.0.1:8000/api/course`);
      setCourse(res.data.data);
    } catch (error) {
      console.error("Lỗi khi thêm course:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa course này?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_course/${id}`);
      alert("Xóa thành công!");
      setCourse((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa course:", error);
    }
  };

 
  const handleShowEdit = (item) => {
    setEditing(item);
    setShowEditModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/update_course/${editing.id}`,
        editing
      );
      alert("Cập nhật thành công!");
      setShowEditModal(false);
      const res = await axios.get(`http://127.0.0.1:8000/api/course`);
      setCourse(res.data.data);
    } catch (error) {
      console.error("Lỗi khi cập nhật course:", error);
    }
  };

  return (
    <div>
      {showEditModal && editing && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050, background: "rgba(0,0,0,0.5)" }}
        >
          <div className="bg-white rounded-4 p-4 w-100" style={{ maxWidth: "600px" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Cập nhật Course</h5>
              <button className="btn-close" onClick={() => setShowEditModal(false)}></button>
            </div>

            <form onSubmit={handleUpdate} className="vstack gap-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                required
              />
              <input
                type="text"
                className="form-control"
                name="image"
                value={editing.image}
                onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                required
              />
              <input
                type="number"
                className="form-control"
                name="price"
                value={editing.price}
                onChange={(e) => setEditing({ ...editing, price: e.target.value })}
                required
              />
              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={editing.description}
                onChange={(e) =>
                  setEditing({ ...editing, description: e.target.value })
                }
              ></textarea>

             
              <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowEditModal(false)}>
                  Hủy
                </button>
                <button type="submit" className="btn btn-primary">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Nội dung chính */}
      <Header />
      <div className="d-flex">
        <Navbar />
        <div className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Quản lý Course</h4>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
            >
              + Thêm Course
            </button>
          </div>

          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Mô tả</th>
                <th>Giá</th>
                <th>Danh mục</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {course.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Không có dữ liệu
                  </td>
                </tr>
              ) : (
                course.map((b, index) => (
                  <tr key={b.id}>
                    <td>{index + 1}</td>
                    <td>{b.name}</td>
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
                    <td>{b.price}</td>
                    <td>{b.category}</td>
                    <td>
                      <div className="d-flex gap-3">
                        <i
                          onClick={() => handleShowEdit(b)}
                          className="fa-solid fa-pen text-primary"
                          style={{ cursor: "pointer" }}
                        ></i>
                        <i
                          onClick={() => handleDelete(b.id)}
                          className="fa-solid fa-trash text-danger"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Modal Thêm Course */}
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
                  <h5>Thêm Course mới</h5>
                  <button className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>

                <form onSubmit={handleSubmit} className="vstack gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tên course..."
                        value={formData.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Image</label>
                      <input
                        type="text"
                        name="image"
                        className="form-control"
                        placeholder="URL ảnh..."
                        value={formData.image}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Price</label>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Giá..."
                        value={formData.price}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Description</label>
                      <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Mô tả..."
                        value={formData.description}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Category</label>
                      <input
                        type="text"
                        name="category"
                        className="form-control"
                        placeholder="Danh mục..."
                        value={formData.category}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Category Key</label>
                      <input
                        type="text"
                        name="category_key"
                        className="form-control"
                        placeholder="Key..."
                        value={formData.category_key}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Comment</label>
                      <input
                        type="text"
                        name="comment"
                        className="form-control"
                        placeholder="Bình luận..."
                        value={formData.comment}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium">Num Member</label>
                      <input
                        type="text"
                        name="num_menber"
                        className="form-control"
                        placeholder="Số thành viên..."
                        value={formData.num_menber}
                        onChange={onChange}
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
                      onClick={() => setShowModal(false)}
                    >
                      Hủy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qlcourse;
