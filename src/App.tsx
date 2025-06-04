import { Menu } from "antd";
import "./App.scss";
import AppHeader from "./components/layout/AppHeader/AppHeader";
import { IoHomeSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaCreditCard, FaWarehouse } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import Loading from "./components/common/Loading/Loading";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

function App() {
  const navigate=useNavigate();
  const loading=useSelector((state:RootState)=>state.other.loading);
  return (
    <div className="app">
      {loading?<Loading/>:null}
        
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
