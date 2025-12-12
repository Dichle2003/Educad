import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Navbar from "../layout/navbar";
import axios from "axios";

const QlyUser = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleShow = (user) => {
    setEditingUser(user);
    setFormData({
      username: user.username || '',
      email: user.email || '',
      phone: user.phone || '',
      password: user.password || ''
    });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormData({ username: '', email: '', phone: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    if (!editingUser) return;
    try {
      await axios.put(`http://127.0.0.1:8000/api/users/${editingUser.id}`, formData);
      alert("Cập nhật tài khoản thành công");
      handleClose();
      fetchUsers();
    } catch (error) {
      console.error("Lỗi khi cập nhật tài khoản", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có muốn xóa không?")) {
      return;
    }
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
      alert('Xóa tài khoản thành công');
      fetchUsers();
    } catch (error) {
      console.error("Lỗi khi xóa tài khoản", error);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div className="d-flex">
          <Navbar />
          <div className="container-fluid p-4">
            <div>
              <div><p>Quản lý tài khoản</p></div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên Đăng Nhập</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số Điện Thoại</th>
                    <th scope="col">Dạng tài khoản</th>
                    <th scope="col">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.role}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-primary me-2" 
                          onClick={() => handleShow(user)}
                          title="Sửa"
                        >
                          <i className="fa-solid fa-pen" style={{ color: 'blue' }}></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-danger" 
                          onClick={() => handleDelete(user.id)}
                          title="Xóa"
                        >
                          <i className="fa-solid fa-trash" style={{ color: 'red' }}></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chỉnh sửa tài khoản</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form  >
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu (để trống nếu không thay đổi)</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Nhập mật khẩu mới nếu muốn thay đổi"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Đóng</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Cập nhật</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QlyUser;