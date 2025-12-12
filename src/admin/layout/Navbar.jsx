import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClass =
    "w-100 d-flex align-items-center gap-2 px-3 py-2 text-start rounded border-0 fw-medium transition";

  return (
    <aside
      className="bg-white border-end shadow-sm d-flex flex-column"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <nav className="p-3">
        <ul className="list-unstyled m-0">

          {/* Tổng quan */}
          <li className="mb-2">
            <NavLink
              to="/ad"
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              style={({ isActive }) =>
                isActive ? { borderLeft: "4px solid #0d6efd" } : {}
              }
            >
              <i className="ri-dashboard-line fs-5"></i>
              <span>Tổng quan</span>
            </NavLink>
          </li>

          {/* Quản lý sản phẩm */}
          <li className="mb-2">
            <NavLink
              to="/qlsp"
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              style={({ isActive }) =>
                isActive ? { borderLeft: "4px solid #0d6efd" } : {}
              }
            >
              <i className="ri-shopping-bag-line fs-5"></i>
              <span>Quản lý sản phẩm</span>
            </NavLink>
          </li>

          {/* Quản lý tài khoản */}
          <li className="mb-2">
            <NavLink
              to="/qluser"
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              style={({ isActive }) =>
                isActive ? { borderLeft: "4px solid #0d6efd" } : {}
              }
            >
              <i className="ri-user-settings-line fs-5"></i>
              <span>Quản lý tài khoản</span>
            </NavLink>
          </li>

          {/* Quản lý Blog */}
          <li className="mb-2">
            <NavLink
              to="/qlblog"
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              style={({ isActive }) =>
                isActive ? { borderLeft: "4px solid #0d6efd" } : {}
              }
            >
              <i className="ri-book-open-line fs-5"></i>
              <span>Quản lý Blog</span>
            </NavLink>
         
          </li>
          
          
           <li className="mb-2">
            <NavLink
              to="/qlcourse"
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              style={({ isActive }) =>
                isActive ? { borderLeft: "4px solid #0d6efd" } : {}
              }
            >
              <i className="ri-book-open-line fs-5"></i>
              <span>Quản lý Course</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
