import React from "react";
import style from "./navigation.module.scss";
import { Link, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";

const Navigation = () => {
    
  return (
    <div className="app">
      <div className={style.navigationComp}>
        <h2 className={style.navigationComp_title}>Finance ERP</h2>
        <nav className={style.navigationComp_nav}>
          <ul className={style.navigationComp_nav_menu}>
            <li className={style.navigationComp_nav_menu_item}>
              <Link
                to={"/"}
                className={style.navigationComp_nav_menu_item_link}
              >
                <IoHomeSharp /> Ana Səhifə
              </Link>
            </li>
            <li className={style.navigationComp_nav_menu_item}>
              <Link
                to={"/order"}
                className={style.navigationComp_nav_menu_item_link}
              >
                <SlBasket /> Satış
              </Link>
            </li>
            <li className={style.navigationComp_nav_menu_item}>
              <Link
                to={"/hr"}
                className={style.navigationComp_nav_menu_item_link}
              >
                <IoIosPeople /> HR
              </Link>
            </li>
            <li className={style.navigationComp_nav_menu_item}>
              <Link
                to={"/finance"}
                className={style.navigationComp_nav_menu_item_link}
              >
                <FaCreditCard /> Kartlar
              </Link>
            </li>
            <li className={style.navigationComp_nav_menu_item}>
              <Link
                to={"/stock"}
                className={style.navigationComp_nav_menu_item_link}
              >
                <FaWarehouse /> Anbar
              </Link>
            </li>
            <li className={style.navigationComp_nav_menu_item}>
              <Link
                to={"/customerinfo"}
                className={style.navigationComp_nav_menu_item_link}
              >
                <GrDocumentPerformance /> Müştəri İdarəçiliyi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
