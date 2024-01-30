import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const [hide, setHide] = useState(true);
  useEffect(() => {
    if (location.pathname === "/") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [location]);

  return (
    <>
      {!hide && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
