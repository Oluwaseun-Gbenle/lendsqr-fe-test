import React, { FC, useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import userDetailsSummary from "../../data/userDetailsSummary.json"
import { CardProps } from '../../Interfaces/CardProps'
import generalUsersData from "../../data/generalUsersData.json"
import { approveUserSVG, cancelUserSVG, eyeSVG, filterSVG, menuSVG } from '../../Utils/svg-icons'
import FilterForm from './Filterform'
import Pagination from './Pagination'
import { UsersProps } from '../../Interfaces/UsersProps'
import { dashboardContent } from './DashboardContent'
import { log } from 'console'


const Users: FC <any> = ({setActiveItem}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showFilterForm, setShowFilterForm] = useState<boolean>(false);
  const [indexView, setIndexView] = useState<any>()
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(100);
  const totalItems = 500;
  const [users, setUsers] = useState<UsersProps[]>(generalUsersData);
  

  const toggleDropdown = (index: number) => {
    if (indexView === index) {
      // If the clicked dropdown is already open, close it
      setIndexView(null);
    } else {
      // Otherwise, open the clicked dropdown
      setIndexView(index);
    }
    setIsDropdownOpen(!isDropdownOpen);
 };

  return (
    <div className='users-container'>
      <div className="page-title">Users</div>
      <div className="summary-cards">
        {userDetailsSummary.map((item: CardProps) => (
          <Card key={item.title} title={item.title} value={item.value} icon={item.icon} iconColor={item.iconColor} />
        ))}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ORGANIZATION <span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span> {showFilterForm && <FilterForm initialUsers={generalUsersData} setUsers={setUsers}/>}</th>
            <th>USERNAME <span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
            <th>EMAIL<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
            <th>PHONE NUMBER<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
            <th>DATE JOINED<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
            <th>STATUS<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((row, index) => (
            <tr key={index}>
              <td>{row.organization}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.date}</td>
              <td>
                <span className={`status ${row.status?.toLowerCase()}`}>
                  {row.status}
                </span>
              </td>
              <td className="dropdown-container">
                <div onClick={() => { toggleDropdown(index) }} ref={dropdownRef}>
                  {menuSVG}


                </div>
                {isDropdownOpen && indexView === index && (
                  <div className="dropdown-menu">
                    <div className='dropdown-route' onClick={()=>{setActiveItem("Users Details"); console.log("clicked")}}><div className="dropdown-icon">{eyeSVG} View Details</div> </div>
                    <div className='dropdown-route'><div className="dropdown-icon">{cancelUserSVG} Blacklist User</div></div>
                    <div className='dropdown-route'><div className="dropdown-icon">{approveUserSVG} Activate User</div></div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  )
}

export default Users