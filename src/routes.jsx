import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home"; 
import About from "../pages/About";
import ProductsDetails from "../pages/ProductsDetails";
import BlogDetails from "../pages/BlogDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { 
        path: "", 
        element: <Home /> 
      },
      { 
        path: "about",  
        element: <About /> 
      },
      { 
        path: "productDetails/:id",  
        element: <ProductsDetails /> 
      },
       { 
        path: "blockdetails/:id",  
        element: <BlogDetails /> 
      },
    ],
  },
]);

export default router; 