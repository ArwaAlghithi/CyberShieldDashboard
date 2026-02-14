import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Overview from "../pages/Overview";
import Vault from "../pages/Vault";
import BreachSearch from "../pages/BreachSearch";
import { useNavigate } from "react-router-dom";

function DashBoard({ setIsLoggedin }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [showSideBar, setShowSideBar] = useState(true);
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Overview />;
      case "vault":
        return <Vault />;
      case "breach":
        return <BreachSearch />;
      default:
        return <Overview />;
    }
  };

  const handleLogout = () => {
    setIsLoggedin(false);
    navigate("/Login");
  };

  return (
    <div className="layout">
      {showSideBar && (
        <SideBar
          activePage={activePage}
          onPageChange={setActivePage}
          onLogout={handleLogout}
        />
      )}
      <div className="content-area">
        <Header onToggleSideBar={() => setShowSideBar(!showSideBar)} />
        <main className="main-content">{renderContent()}</main>
      </div>
    </div>
  );
}

export default DashBoard;
