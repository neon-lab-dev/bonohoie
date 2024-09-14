import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer";
import Moments from "../components/Moments/Moments";
import NotificationBar from '../components/NotificationBar/NotifcationBar';
import ScrollToTop from '../utils/ScrollToTop';


const MainLayout = () => {

  return (
    <div>
      <ScrollToTop/>
      <NotificationBar/>
      <NavBar/>
      <Outlet></Outlet>
      <Moments/>
      <Footer/>
    </div>
  );
};

export default MainLayout;
