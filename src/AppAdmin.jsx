import React from 'react'
import { Routes, Route } from "react-router-dom";
import {} from 'react-router-dom'
import Header from './admin/layout/header.jsx'
import Home from './admin/page/home.jsx'
import Qlysanpham from './admin/page/Qlysanpham.jsx'
import QlyUser from './admin/page/QlyUser.jsx'
import QlBlog from './admin/page/QlBlog.jsx'
import Edit_user from './admin/page/Edit_user.jsx'
import Qlcourse from './admin/page/Qlcourse.jsx';
const AppAdmin = () => {
  return (
    <Routes>
     
      <Route path="/ad" element={<Home />} />
      <Route path="/qlsp" element={<Qlysanpham />} />
      <Route path="/qluser" element={<QlyUser />} />
      <Route path="/qlblog" element={<QlBlog />} />
      <Route path="/edit_user" element={<Edit_user />} />
      <Route path='/qlcourse' element={< Qlcourse/>}></Route>
    </Routes> 
     )
}

export default AppAdmin