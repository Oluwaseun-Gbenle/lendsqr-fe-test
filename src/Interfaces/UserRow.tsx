export interface UserRow {
    organization: string;
    username: string;
    email: string;
    phone: string;
    dateJoined: string;
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  }