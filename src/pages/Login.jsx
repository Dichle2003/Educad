import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [error, setError] = useState('');
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login', {
        
        username: username,
        password: password,
      });

      
      localStorage.setItem('token', res.data.token);

      alert('Đăng nhập thành công!');
      console.log('Token:', res.data.token);
        navigate("/");
    } catch (err) {
      console.error(err);
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản/mật khẩu.');
    }
  };

  useEffect(() => {
    document.title = 'Login - Educad';
  }, []);

  return (
    <div>
      <main>
        <div
          className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50"
          style={{
            backgroundImage: 'url(./assets/img/backgroud/page-title-bg.jpg)',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title-content">
                  <h2 className="title">Login</h2>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="#">Pages</a></li>
                      <li><a href="about-us.html">Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="signup-section pt-150 pb-150 pt-lg-120 pb-lg-90 pt-md-80 pb-md-50 pt-xs-50 pb-xs-20">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="signup-form">
                  <div className="section-title text-center mb-50">
                    <div className="title">
                      <h2>Log in Your Account</h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    
                    <div className="input-wrap mb-20">
                      <span>
                        <img src="./assets/img/icon/profile.svg" alt="icon" />
                      </span>
                      <input
                        type="text"
                        value={username}
                        placeholder="Username "
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>

                    <div className="input-wrap pass mb-20">
                      <span>
                        <img src="./assets/img/icon/lock-bold.svg" alt="icon" />
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                      />
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className="col-12">
                      <div className="submit-btn">
                        <button className="signup-btn btn-1" type="submit">
                          Login Now
                        </button>
                        <span className="divider">OR</span>
                        <button className="signup-btn" type="button">
                          <img
                            className="mr-20"
                            src="./assets/img/icon/google.svg"
                            alt="icon"
                          />{' '}
                          Login With Google
                        </button>
                      </div>

                      <div className="redirect-section text-center">
                        <p className="mt-40">
                          Don’t have an account?{' '}
                          <b>
                            <a href="signup.html">Sign up Today</a>
                          </b>
                        </p>
                        <h5 className="text-heading">Forgot password</h5>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
