import { useEffect  } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);
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
