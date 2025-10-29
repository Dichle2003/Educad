import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PreloaderStart from "../components/PreloaderStart";

function Layout() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
   useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
   useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);
    return (
      <div>
      {loading && <PreloaderStart />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;