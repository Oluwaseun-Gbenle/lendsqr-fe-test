import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import { dashboardContent } from './DashboardContent';
import "../../Styles/Dashboard.scss"
import { fetchSidebarData, fetchUserProfileData } from '../../data services/apiservice';
import { MenuItem } from '../../Interfaces/MenuItem';
import { UserProfile } from '../../Interfaces/NavBarProps';



const Dashboard = () => {
  const [activeItem, setActiveItem] = useState<string>('Users');
  const [sideBarData, setSideBarData] = useState<MenuItem[]>([]);
  const [userProfileData, setUserProfileData] = useState<UserProfile>();
  const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchSidebarData();
        setSideBarData(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    const getUserProfileData = async () => {
      try {
        const data = await fetchUserProfileData();
        setUserProfileData(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    getUserData();
    getUserProfileData();
  }, []);
  return (
    <div className="dashboard">
      <NavBar userProfileData={userProfileData} toggleSideMenu={toggleSideMenu} setToggleSideMenu={setToggleSideMenu} />
      <div className="dashboard-content">
        <SideBar menuItems={sideBarData} activeItem={activeItem} setActiveItem={setActiveItem} toggleSideMenu={toggleSideMenu} />
        {dashboardContent(activeItem, setActiveItem)}
      </div>
    </div>
  )
}

export default Dashboard