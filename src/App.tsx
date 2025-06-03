import { Card, Menu, Space } from "antd";
import "./App.scss";
import AppHeader from "./components/layout/AppHeader/AppHeader";
import PageContent from "./components/layout/PageContent/PageContent";
import AppFooter from "./components/layout/AppFooter/AppFooter";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaCreditCard, FaWarehouse } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { Header } from "antd/es/layout/layout";

function App() {
  const navigate=useNavigate();
  return (
    <div className="app">
      <AppHeader/>
      <div className="sideMenuAndPageContent">
      <Menu 
      onClick={({key})=>{
        navigate(key)
      }}
      items={[
        {
      label: "Ana Səhifə",
      key: "/history",
      icon: <IoHomeSharp />,
    },

    {
      label: "Satış",
      key: "/order",
      icon: <SlBasket />,
    },
    {
      label: "Maliyə",
      key: "/finance",
      icon: <FaCreditCard />,
    },
    {
      label: "Anbar",
      key: "/inventor",
      icon: <FaWarehouse />,
    },
    {
      label: "İşçilər",
      key: "/hr",
      icon: <IoIosPeople />,
    },
      ]}
      >

      </Menu>

      <AppRoutes/>

      </div>
    </div>
  );
}

export default App;
