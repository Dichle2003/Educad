import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Routes>
      {/* Các route nằm trong Layout (có Header + Footer) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Nếu bạn muốn có route khác không dùng layout, có thể viết ngoài */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  )
}

export default App
