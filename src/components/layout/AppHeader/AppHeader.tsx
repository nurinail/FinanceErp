import { Badge, Space } from "antd";
import { IoIosNotifications } from "react-icons/io";
import logo from "../../../assets/image/logo.svg";
import user from "../../../assets/image/user.svg";

const AppHeader = () => {
  return (
    <div className="appHeader">
      <img className="appHeader_logo" src={logo} alt="logo" />

      <Space className="appHeader_nav">
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
