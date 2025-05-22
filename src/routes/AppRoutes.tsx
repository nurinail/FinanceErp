import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Order from "../components/common/Order/Order";
import Finance from "../components/common/CashAccount/Finace";
import Stock from "../components/common/Stock/Stock";
import HR from "../components/common/HR/HR";
import Navigation from "../components/layout/Navigation/Navigation";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route path="/order" element={<Order />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/hr" element={<HR />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
