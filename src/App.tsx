import { Card, Space }from "antd"
import './App.scss';
import AppHeader from "./components/layout/AppHeader/AppHeader";
import SideMenu from "./components/layout/SideMenu/SideMenu";
import PageContent from "./components/layout/PageContent/PageContent";
import AppFooter from "./components/layout/AppFooter/AppFooter";

function App() {

  return (
    <div className="app">
      <AppHeader/>
      <Space className="sideMenuAndPageContent">
        <SideMenu />
          <PageContent/>
      </Space>
      {/* <AppFooter/> */}

    </div>
  )
}

export default App