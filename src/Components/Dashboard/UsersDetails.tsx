import React, { FC,  useState } from 'react'
import { backSVG, starOutlineSVG, starSVG, userSVG } from '../../Utils/svg-icons'
import userBankDetails from "../../data/userBankDetails.json"
import userDetails from "../../data/userDetails.json"

const UsersDetails: FC = () => {
const tabs = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];
 const [activeTab, setactiveTab] = useState("General Details")

  return (
    <div className='users-container'>
      <div className="page-title">
      <div className="go-back-text">{backSVG} <span>Back to Users</span></div>
        <div className="heading-container">
            <div>User Details</div>
            <div className="user-status-btns">
            <div className="blacklist-user-btn">Blacklist User</div>
            <div className="activate-user-btn">Activate User</div>
           </div>
        </div>
        </div>
        <div className="user-detail-card">
            <div className="user-details-display">
      <div className="user-info">
        <div className="avatar">
          <div className="user-icon">{userSVG}</div>
        </div>
        <div className="user-text">
          <h2>{userBankDetails.name}</h2>
          <p>{userBankDetails.id}</p>
        </div>
      </div>
      <div className="user-tier">
        <div className="user-tier-text">User's Tier</div>
        {[...Array(userBankDetails.stars)].map((_, i) => (
          <span key={i} className="star-icon">{starSVG}</span>
          
        ))}
         {[...Array(3-userBankDetails.stars)].map((_ , i) => (
          userBankDetails.stars < 3 &&<span key={i} className="star-icon">{starOutlineSVG}</span>
          
        ))}
      </div>
      <div className="user-balance">
        <h3>{userBankDetails.balance}</h3>
        <p>{userBankDetails.accountNumber}/{userBankDetails.bankName}</p>
      </div>
      </div>
      <div className="navigation-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-item ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setactiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
    </div>
    
    <div className="user-detail-section">
      {/* Personal Information */}
        <div className="details-heading">Personal Information</div>
        <div className="personal-information">
        <div className="info-row">
        <div className="info-item">
          <div className="details-title">FULL NAME</div>
          <p>{userDetails.personalInformation.fullName}</p>
        </div>
        <div className="info-item">
          <div className="details-title">PHONE NUMBER</div>
          <p>{userDetails.personalInformation.phoneNumber}</p>
        </div>
        <div className="info-item">
          <div className="details-title">EMAIL ADDRESS</div>
          <p>{userDetails.personalInformation.emailAddress}</p>
        </div>
        <div className="info-item">
          <div className="details-title">BVN</div>
          <p>{userDetails.personalInformation.bvn}</p>
        </div>
        <div className="info-item">
          <div className="details-title">GENDER</div>
          <p>{userDetails.personalInformation.gender}</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-item">
          <div className="details-title">MARITAL STATUS</div>
          <p>{userDetails.personalInformation.maritalStatus}</p>
        </div>
        <div className="info-item">
          <div className="details-title">CHILDREN</div>
          <p>{userDetails.personalInformation.children}</p>
        </div>
        <div className="info-item">
          <div className="details-title">TYPE OF RESIDENCE</div>
          <p>{userDetails.personalInformation.typeOfResidence}</p>
        </div>
      </div>
      </div>  
       <div className="section">  
      </div>

      {/* Education and Employment */}
      <div className="details-heading">Education and Employment</div>
      <div className="education-and-employment">
      <div className="info-row">
        <div className="info-item">
          <div className="details-title">LEVEL OF EDUCATION</div>
          <p>{userDetails.educationAndEmployment.levelOfEducation}</p>
        </div>
        <div className="info-item">
          <div className="details-title">EMPLOYMENT STATUS</div>
          <p>{userDetails.educationAndEmployment.employmentStatus}</p>
        </div>
        <div className="info-item">
          <div className="details-title">SECTOR OF EMPLOYMENT</div>
          <p>{userDetails.educationAndEmployment.sectorOfEmployment}</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-item">
          <div className="details-title">DURATION OF EMPLOYMENT</div>
          <p>{userDetails.educationAndEmployment.durationOfEmployment}</p>
        </div>
        <div className="info-item">
          <div className="details-title">OFFICE EMAIL</div>
          <p>{userDetails.educationAndEmployment.officeEmail}</p>
        </div>
        <div className="info-item">
          <div className="details-title">MONTHLY INCOME</div>
          <p>{userDetails.educationAndEmployment.monthlyIncome}</p>
        </div>
        <div className="info-item">
          <div className="details-title">LOAN REPAYMENT</div>
          <p>{userDetails.educationAndEmployment.loanRepayment}</p>
        </div>
      </div>
    </div>
     <div className="section"> 
      </div>
  

      {/* Socials */}
      <div className="details-heading">Socials</div>
      <div className="socials">
      <div className="info-row">
        <div className="info-item">
          <div className="details-title">TWITTER</div>
          <p>{userDetails.socials.twitter}</p>
        </div>
        <div className="info-item">
          <div className="details-title">FACEBOOK</div>
          <p>{userDetails.socials.facebook}</p>
        </div>
        <div className="info-item">
          <div className="details-title">INSTAGRAM</div>
          <p>{userDetails.socials.instagram}</p>
        </div>
      </div>
    </div>
      <div className="section"></div>

      {/* Guarantor */}
      <div className="details-heading">Guarantor</div>
      {userDetails.guarantor.map((guarantor, index) => (
        <div key={index}>
       <div className="guarantor">
       <div className="info-row">
         <div className="info-item">
           <div className="details-title">FULL NAME</div>
           <p>{guarantor.fullName}</p>
         </div>
         <div className="info-item">
           <div className="details-title">PHONE NUMBER</div>
           <p>{guarantor.phoneNumber}</p>
         </div>
         <div className="info-item">
           <div className="details-title">EMAIL ADDRESS</div>
           <p>{guarantor.emailAddress}</p>
         </div>
         <div className="info-item">
           <div className="details-title">RELATIONSHIP</div>
           <p>{guarantor.relationship}</p>
         </div>
       </div>
     </div>
     <div className="guarantor-section"> </div>
     </div>
      ))}
   
    </div>
       
    </div>
  )
}

export default UsersDetails