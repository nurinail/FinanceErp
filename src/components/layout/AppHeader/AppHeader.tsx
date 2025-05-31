import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import logo from "../../../assets/image/logo.jpg";
import { FaHistory } from "react-icons/fa";

const AppHeader = () => {
  return (
    <div className="appHeader">
      <Image width={100} src={logo} />
      <Typography.Title>Finance ERP</Typography.Title>
      <Space>
        <Typography.Link>Tarixçə</Typography.Link>
        <Badge count={3} dot>
          <FaHistory style={{ fontSize: "2rem" }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
