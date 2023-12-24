import React from 'react'
import { Card } from './Card'
import userDetailsSummary from "../../data/userDetailsSummary.json"
import { CardProps } from '../../Interfaces/CardProps'
import generalUsersData from "../../data/generalUsersData.json"
import { UserRow } from '../../Interfaces/UserRow'
import { filterSVG, menuSVG } from '../../Utils/svg-icons'

const Users = () => {
  return (
    <div className='users-container'>
      <div className="page-title">Users</div>
      <div className="summary-cards">
        {userDetailsSummary.map((item: CardProps) => (
          <Card title={item.title} value={item.value} icon={item.icon} iconColor={item.iconColor} />
        ))}
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>ORGANIZATION <span>{filterSVG}</span></th>
            <th>USERNAME <span>{filterSVG}</span></th>
            <th>EMAIL<span>{filterSVG}</span></th>
            <th>PHONE NUMBER<span>{filterSVG}</span></th>
            <th>DATE JOINED<span>{filterSVG}</span></th>
            <th>STATUS<span>{filterSVG}</span></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {generalUsersData.map((row, index) => (
            <tr key={index}>
              <td>{row.organization}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.dateJoined}</td>
              <td>
                <span className={`status ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </td>
              <td>{menuSVG}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Users