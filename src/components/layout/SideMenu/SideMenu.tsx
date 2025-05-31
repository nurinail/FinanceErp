import { Menu } from "antd";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
    const navigate=useNavigate()
    const items=[
        {
            label:"Ana Səhifə",
            key:"/",
            icon:<IoHomeSharp />,
        },
        {
            label:"Satış",
            key:"/order",
            icon:<SlBasket />,
        },
        {
            label:"Maliyə",
            key:"/finance",
            icon:<FaCreditCard />,
        },
        {
            label:"Anbar",
            key:"/inventor",
            icon:<FaWarehouse />,
        },
        {
            label:"İşçilər",
            key:"/hr",
            icon:<IoIosPeople />,
        },
    ]
  
   return  <Menu className="sideMenu" items={items} onClick={(item)=>
        navigate(item.key)}>

    </Menu>
 ;
};

export default SideMenu;
