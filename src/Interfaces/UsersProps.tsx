export interface UsersProps {
    organization?: string;
    username?: string;
    email?: string;
    date?: string;
    phone?: string;
    status?: string;
}
export interface UserRow {
    organization: string;
    username: string;
    email: string;
    phone: string;
    dateJoined: string;
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  }
  export interface UserTableProps {
    data: UserRow[];
  }

export interface UserDetails {
    fullName: string;
    phone: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
    educationLevel: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
    twitterHandle: string;
    facebookName: string;
    instagramHandle: string;
    guarantors: Guarantor[];
  }
  
 export interface Guarantor {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  }