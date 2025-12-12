import React, { useEffect, useState } from "react";
import Header from "../layout/header";
import Navbar from "../layout/navbar";
import axios from "axios";

const Qlysanpham = () => {
  
  useEffect(() => {
    document.title = "Quản lý sản phẩm";
  }, []);

  
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    slug: "",
    image: "",
    description: "",
  });
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const fetchProducts = async (q = "") => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/product${q ? `?q=${q}` : ""}`
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleShowEdit = (product) => {
    setEditing(product);
    setShowEditModal(true);
  };
  const handleCloseEdit = () => {
    setEditing(null);
    setShowEditModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/create_product", formData);
      alert("Thêm sản phẩm thành công!");
      setFormData({ name: "", price: "", slug: "", image: "", description: "" });
      handleClose();
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Lỗi khi thêm sản phẩm");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete_product/${id}`);
      alert("Xóa sản phẩm thành công!");
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editing) return;
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/update_product/${editing.id}`,
        editing
      );
      alert("Cập nhật sản phẩm thành công!");
      handleCloseEdit();
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Cập nhật thất bại!");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(search);
  };

  return (
    <div>
      <Header />
      <div className="d-flex">
        <Navbar />
        <div className="container-fluid p-4">
          <form onSubmit={handleSearch} className="mb-4 w-50 d-flex border rounded-pill mx-auto">
            <input
              type="text"
              className="form-control border-0 rounded-pill ps-3"
              placeholder="Nhập tên sản phẩm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-primary rounded-pill me-1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Quản lý sản phẩm</h4>
            <button className="btn btn-primary" onClick={handleShow}>
              + Thêm sản phẩm
            </button>
          </div>

          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>STT</th>
                <th>Tên SP</th>
                <th>Slug</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={p.id}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.slug}</td>
                  <td>{p.price}</td>
                  <td>{p.description}</td>
                  <td>
                    <i
                      onClick={() => handleShowEdit(p)}
                      className="fa-solid fa-pen text-primary me-3"
                      role="button"
                    ></i>
                    <i
                      onClick={() => handleDelete(p.id)}
                      className="fa-solid fa-trash text-danger"
                      role="button"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 1050, background: "rgba(0,0,0,0.5)" }}>
              <div className="bg-white rounded-4 p-4 w-100" style={{ maxWidth: "600px" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Thêm sản phẩm mới</h5>
                  <button className="btn-close" onClick={handleClose}></button>
                </div>
                <form onSubmit={handleSubmit} className="vstack gap-3">
                  <input type="text" className="form-control" placeholder="Tên sản phẩm" name="name" value={formData.name} onChange={handleChange} required />
                  <input type="text" className="form-control" placeholder="Slug" name="slug" value={formData.slug} onChange={handleChange} required />
                  <input type="url" className="form-control" placeholder="Link hình ảnh" name="image" value={formData.image} onChange={handleChange} required />
                  <input type="text" className="form-control" placeholder="Giá (VNĐ)" name="price" value={formData.price} onChange={handleChange} required />
                  <textarea name="description" className="form-control" placeholder="Mô tả..." rows="3" value={formData.description} onChange={handleChange}></textarea>
                  <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                    <button type="button" className="btn btn-outline-secondary" onClick={handleClose}>Hủy</button>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {showEditModal && editing && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 1050, background: "rgba(0,0,0,0.5)" }}>
              <div className="bg-white rounded-4 p-4 w-100" style={{ maxWidth: "600px" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Cập nhật sản phẩm</h5>
                  <button className="btn-close" onClick={handleCloseEdit}></button>
                </div>
                <form onSubmit={handleUpdate} className="vstack gap-3">
                  <input type="text" className="form-control" name="name" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} required />
                  <input type="text" className="form-control" name="slug" value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} required />
                  <input type="url" className="form-control" name="image" value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} required />
                  <input type="text" className="form-control" name="price" value={editing.price} onChange={(e) => setEditing({ ...editing, price: e.target.value })} required />
                  <textarea name="description" className="form-control" rows="3" value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })}></textarea>
                  <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                    <button type="button" className="btn btn-outline-secondary" onClick={handleCloseEdit}>Hủy</button>
                    <button type="submit" className="btn btn-primary">Cập nhật</button>
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

export default Qlysanpham;
