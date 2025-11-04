import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!formData.agree) {
      alert("Bạn cần đồng ý với điều khoản");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }
    if (formData.password.length < 8) {
      alert("Nhập mật khẩu tối thiểu 8 ký tự");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/users", {
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        password_confirmation:formData.confirmPassword,
      });

      alert("Tạo tài khoản thành công!");
      console.log(response.data);
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agree: false,
      });
    } catch (error) {
      console.error(error);
      alert("Lỗi khi tạo tài khoản!");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - educad";
  }, []);

  return (
    <main>
      <div className="breadcrumb-section pt-190 pb-150" style={{ backgroundImage: "url(./assets/img/backgroud/page-title-bg.jpg)" }}>
        <div className="container text-center">
          <h2 className="title">Signup</h2>
        </div>
      </div>

      <div className="signup-section pt-150 pb-150">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="signup-form">
                <div className="section-title text-center mb-50">
                  <h2>Create Your Account</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="input-wrap mb-20">
                    <span><img src="./assets/img/icon/profile.svg" alt="icon" /></span>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-wrap mail mb-20">
                    <span><img src="./assets/img/icon/message-bold.svg" alt="icon" /></span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-wrap phone mb-20">
                    <span><img src="./assets/img/icon/call-bold.svg" alt="icon" /></span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-wrap pass mb-20">
                    <span><img src="./assets/img/icon/lock-bold.svg" alt="icon" /></span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-wrap pass mb-20">
                    <span><img src="./assets/img/icon/lock-bold.svg" alt="icon" /></span>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-check mb-20">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                    />
                    <span>Tôi đồng ý với điều khoản & điều kiện</span>
                  </div>

                  <div className="col-12">
                    <div className="submit-btn">
                      <button className="signup-btn btn-1" type="submit">Submit Now</button>
                      <span className="divider">OR</span>
                      <button className="signup-btn" type="button">
                        <img className="mr-20" src="./assets/img/icon/google.svg" alt="icon" /> Sign Up With Google
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
