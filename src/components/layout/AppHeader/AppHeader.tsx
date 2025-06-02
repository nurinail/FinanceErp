import classNames from "classnames";
import { Badge, Space, Typography } from "antd";
import { IoIosNotifications } from "react-icons/io";
import logo from "../../../assets/image/logo.svg";
import user from "../../../assets/image/user.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [isModal,setIsModal]=useState<boolean>(false);
  const navigate=useNavigate();
  const logOut=()=>{
    setIsModal(false);
    navigate("/");
  }
  return (
    <div className="appHeader">
      <img className="appHeader_logo" src={logo} alt="logo" />

      <Space className="appHeader_nav">
        <div className={classNames(isModal?"appHeader_nav_modal":"none_active")}>
          <p className="appHeader_nav_modal_title">Çıxmaq istədiyinə əminsinizmi?</p>
          <div className="appHeader_nav_modal_buttons">
            <button onClick={logOut} className="appHeader_nav_modal_buttons_item">Bəli</button>
            <button onClick={()=>setIsModal(false)} className="appHeader_nav_modal_buttons_item">Xeyr</button>
          </div>
        </div>
        <Typography.Link onClick={()=>setIsModal(prev=>!prev)} className="appHeader_nav_logout">Çıxış</Typography.Link>
        <Badge count={3}>
          <IoIosNotifications className="appHeader_nav_icon" />
        </Badge>
        <div className="appHeader_nav_user">
          <img className="appHeader_nav_user_img" src={user} alt="user" />
          <div className="appHeader_nav_user_circle">
            <div className="appHeader_nav_user_circle_item"></div>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default AppHeader;
