import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Order from "../components/common/Order/Order";
import Finance from "../components/common/CashAccount/Finace";
import Stock from "../components/common/Stock/Stock";
import HR from "../components/common/HR/HR";
import History from "../components/common/History/History";
import LoginSignUp from "../pages/Login/LoginSignUp";
import SignUp from "../pages/Login/SignUp";

const AppRoutes = () => {
  return <div>
    <Routes>
      <Route path="/history" element={<History/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/" element={<LoginSignUp/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/finance" element={<Finance/>}></Route>
      <Route path="/inventor" element={<Stock/>}></Route>
      <Route path="/hr" element={<HR/>}></Route>
    </Routes>
  </div>;
};

export default AppRoutes;
