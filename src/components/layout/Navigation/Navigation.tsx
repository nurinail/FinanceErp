import React from "react";
import style from "./navigation.module.scss"
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

const Navigation = () => {
  return (
    <div className={style.navigationComp}>
      <h2 className={style.navigationComp_title}>Finance ERP</h2>
      <nav className={style.navigationComp_nav}>
        <ul className={style.navigationComp_nav_menu}>
            <li className={style.navigationComp_nav_menu_item}><Link to={"/"}><IoHomeSharp/> Ana Səhifə</Link></li>
            <li className={style.navigationComp_nav_menu_item}><Link to={"/order"}><SlBasket/> Satış</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
