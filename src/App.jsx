import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CourseList from "./pages/CourseList";
import CourseDetails from "./pages/CourseDetails";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CourseGrid from "./pages/CourseGrid";
import Faq from "./pages/Faq";
import Instructors from "./pages/Instructors";
import InstructorDetails from "./pages/InstructorDetails";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Error from "./pages/Error";
import BlogClassic from "./pages/BlogClassic";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
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
        <Route path="course_list" element={<CourseList />} />
        <Route path="course_grid" element={<CourseGrid />} />
        <Route path="course_details" element={<CourseDetails />} />
        <Route path="faq" element={<Faq />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="instructorsDetails" element={<InstructorDetails />} />
        <Route path="product" element={<Products />} />
        <Route path="productdetail" element={<ProductsDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="error" element={<Error />} />
        <Route path="blockclassic" element={<BlogClassic />} />
        <Route path="blockgrid" element={<BlogGrid />} />
        <Route path="blockdetails" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />

        <Route path="productDetails/:id" element={<ProductsDetails />} />
         <Route path="blockdetails/:id" element={<BlogDetails />} />
      </Route>

      {/* Nếu bạn muốn có route khác không dùng layout, có thể viết ngoài */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
