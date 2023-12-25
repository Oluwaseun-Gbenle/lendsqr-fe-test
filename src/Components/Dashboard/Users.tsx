import React, { FC, useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import { CardProps } from '../../Interfaces/CardProps'
import { approveUserSVG, cancelUserSVG, eyeSVG, filterSVG, menuSVG } from '../../Utils/svg-icons'
import FilterForm from './Filterform'
import Pagination from './Pagination'
import { UsersProps } from '../../Interfaces/UsersProps'
import { fetchUserData, fetchUserDetailsSummary } from '../../data services/apiservice'


const Users: FC<any> = ({ setActiveItem }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showFilterForm, setShowFilterForm] = useState<boolean>(false);
  const [indexView, setIndexView] = useState<any>()
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [initialUsers, setInitialUsers] = useState<UsersProps[]>([]);
  const [userDetailsSummary, setUserDetailsSummary] = useState<CardProps[]>();
  const [itemsPerPage, setItemsPerPage] = useState<number>(50);
  const [paginatedUsers, setPaginatedUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUsers(data);
        setInitialUsers(data);
        // Set paginated data
        const offset = (currentPage - 1) * itemsPerPage;
        const paginatedData = data.slice(offset, offset + itemsPerPage);
        setPaginatedUsers(paginatedData);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    const getUserDetailsSummary = async () => {
      try {
        const data = await fetchUserDetailsSummary();
        setUserDetailsSummary(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    getUserData();
    getUserDetailsSummary();
  }, []);

  // Handling change in currentPage or itemsPerPage
  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    const paginatedData = users.slice(offset, offset + itemsPerPage);
    setPaginatedUsers(paginatedData);
  }, [currentPage, itemsPerPage, users]);

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
        {userDetailsSummary?.map((item: CardProps) => (
          <Card key={item.title} title={item.title} value={item.value} icon={item.icon} iconColor={item.iconColor} />
        ))}
      </div>
      <div className='table-container'>
        <table className="user-table">
          <thead>
            <tr>
              <th>ORGANIZATION <span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span> {showFilterForm && <FilterForm initialUsers={initialUsers} setUsers={setUsers} />}</th>
              <th>USERNAME <span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
              <th>EMAIL<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
              <th>PHONE NUMBER<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
              <th>DATE JOINED<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
              <th>STATUS<span className="filter-icon" onClick={() => { setShowFilterForm(!showFilterForm) }}>{filterSVG}</span></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((row, index) => (
              <tr key={index}>
                <td>{row.organization}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`status ${row.status?.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td className="dropdown-container">
                  <div onClick={() => { toggleDropdown(index); }} ref={dropdownRef}>
                    {menuSVG}


                  </div>
                  {isDropdownOpen && indexView === index && (
                    <div className="dropdown-menu">
                      <div className='dropdown-route' onClick={() => { setActiveItem("Users Details"); console.log("clicked") }}><div className="dropdown-icon">{eyeSVG} View Details</div> </div>
                      <div className='dropdown-route'><div className="dropdown-icon">{cancelUserSVG} Blacklist User</div></div>
                      <div className='dropdown-route'><div className="dropdown-icon">{approveUserSVG} Activate User</div></div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={users.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  )
}

export default Users