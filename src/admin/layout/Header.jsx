import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    document.title = "Admin Dashboard";
  });
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  }
  return (
    <div>
    <header className="bg-white shadow-sm border-bottom border-secondary-subtle px-4 py-3">
      <div className="d-flex align-items-center justify-content-between">
    
        <div className="d-flex align-items-center gap-3">
          <div
            className="bg-primary rounded d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px" }}
          >
            <i className="fa-solid fa-user-graduate" style={{color: '#f7f7f7'}}></i>
          </div>
          <h1
            className="fw-bold text-dark fs-3 m-0"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            Educad Dashboard
          </h1>
        </div>

       
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link text-secondary p-0">
            <i className="fa-solid fa-bell"></i>
          </button>
          <button className="btn btn-link text-secondary p-0">
            <i className="fa-solid fa-gear"></i>
          </button>
          <div
            className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px", cursor: "pointer" }}
          >
            <i onClick={handleLogout} className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
      
    </header>
     
</div>
  );
};

export default Header;
