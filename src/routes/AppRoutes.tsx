import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Order from "../components/common/Order/Order";

const AppRoutes = () => {
  return <div>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        
    </Routes>
  </div>;
};

export default AppRoutes;
