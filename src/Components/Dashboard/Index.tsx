import React, { useState } from 'react'
import NavBar from './NavBar';
import user from "../../data/user.json"
import SideBar from './SideBar';
import sideBarMenu from "../../data/sidebar.json"
import { dashboardContent } from './DashboardContent';
import "../../Styles/Dashboard.scss"


const Dashboard = () => {
  const [activeItem, setActiveItem] = useState<string>('Users');
  console.log("activeItem",activeItem)
  return (
    <div className="dashboard">
      <NavBar user={user} />
      <div className="dashboard-content">
        <SideBar menuItems={sideBarMenu} activeItem={activeItem} setActiveItem={setActiveItem} />
        {dashboardContent(activeItem,setActiveItem)}
      </div>
    </div>
  )
}

export default Dashboard