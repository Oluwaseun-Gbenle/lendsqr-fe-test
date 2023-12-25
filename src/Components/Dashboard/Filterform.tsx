import React, { FC, useState } from 'react';
import '../../Styles/Dashboard.scss';
import { UsersProps } from '../../Interfaces/UsersProps';
import { log } from 'console';

const FilterForm: FC<any> = ({ initialUsers, setUsers }) => {
    const [organization, setOrganization] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [filters, setFilters] = useState<any>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters: any) => ({ ...prevFilters, [name]: value }));

    };
    console.log("filters", filters);

    const handleFilter = () => {
        let filteredUsers;

        if (filters.organization) {
            filteredUsers = initialUsers.filter((user: UsersProps) => user.organization?.includes(filters.organization));
        }
        if (filters.username) {
            filteredUsers = initialUsers.filter((user: UsersProps) => user.username?.toLowerCase().includes(filters.username.toLowerCase()));
        }
        if (filters.email) {
            filteredUsers = initialUsers.filter((user: UsersProps) => user.email?.toLowerCase().includes(filters.email.toLowerCase()));
        }
        if (filters.date) {
            filteredUsers = initialUsers.filter((user: UsersProps) => user.date === filters.date);
        }
        if (filters.phone) {
            filteredUsers = initialUsers.filter((user: UsersProps) => user.phone?.includes(filters.phone));
        }
        if (filters.status) {
            filteredUsers = initialUsers.filter((user: UsersProps) => user.status?.toLowerCase() === filters.status?.toLowerCase());
        }
        setUsers(filteredUsers);
    };


    return (
        <div className="filter-form">
            <label>
                Organization
                <select name="organization" value={organization} className="select-input" onChange={e => { handleInputChange(e); setOrganization(e.target.value) }}>
                    <option value="">Select</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Lendstar">Lendstar</option>
                    <option value="Irorun">Irorun</option>
                </select>
            </label>

            <label>
                Username
                <input name="username" type="text" value={username} onChange={e => { handleInputChange(e); setUsername(e.target.value) }} placeholder="User" />
            </label>

            <label>
                Email
                <input name="email" type="text" value={email} onChange={e => { handleInputChange(e); setEmail(e.target.value) }} placeholder="Email" />
            </label>

            <label>
                Date
                <input name="date" type="date" value={date} onChange={e => { handleInputChange(e); setDate(e.target.value) }} placeholder="Date" />
            </label>

            <label>
                Phone Number
                <input name="phone" type="tel" value={phone} onChange={e => { handleInputChange(e); setPhone(e.target.value) }} placeholder="Phone Number" />
            </label>

            <label>
                Status
                <select name="status" value={status} className="select-input" onChange={e => { handleInputChange(e); setStatus(e.target.value) }}>
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blacklisted">Blacklisted</option>
                </select>
            </label>

            <div className="buttons">
                <button onClick={() => { setUsers(initialUsers); }}>Reset</button>
                <button onClick={(e) => { handleFilter(); e.preventDefault() }}>Filter</button>
            </div>
        </div>
    );
};

export default FilterForm;
