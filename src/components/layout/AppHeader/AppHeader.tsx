import classNames from "classnames";
import { Badge, Space } from "antd";
import { CiLogout } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";
import logo from "../../../assets/image/logo.svg";
import user from "../../../assets/image/user.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { handleLoading } from "../../../store/slices/other";

const AppHeader = () => {
  const [isModal,setIsModal]=useState<boolean>(false);
  const historyLenght=useSelector((state:RootState)=>state.history.history.length)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logOut=()=>{
    setIsModal(false);
    dispatch(handleLoading(true));
    setTimeout(()=>{
      navigate("/");
      dispatch(handleLoading(false))
    },1000)
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
        <button onClick={()=>setIsModal(prev=>!prev)} className="appHeader_nav_logout"><CiLogout/></button>
        <Badge count={historyLenght}>
          <button className="appHeader_nav_history">
          <VscHistory className="appHeader_nav_icon" />

          </button>
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
