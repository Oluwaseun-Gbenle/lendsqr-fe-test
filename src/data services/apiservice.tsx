import axios from 'axios';

// Creating an instance of Axios
const api = axios.create({
    baseURL: 'https://run.mocky.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchUserData = async () => {
    try {
        const response = await api.get('/v3/60d2881e-231a-4321-96ff-1e4efd8dd899');
        return response.data;


    } catch (error) {
        throw error;
    }
};


export const fetchSidebarData = async () => {
    try {
        const response = await api.get('/v3/e4ddd694-de7b-4dd9-9729-00fada4aa1e7');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchUserProfileData = async () => {
    try {
        const response = await api.get("v3/8ace47a4-1a16-4153-bbdb-8beda27b4a0c");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchUserBankDetails = async () => {
    try {
        const response = await api.get("/v3/25424071-7a5e-4962-b6ed-710d0f759f95");
        localStorage.setItem("storedUserBankDetails", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchUserDetails = async () => {
    try {
        const response = await api.get("/v3/c70d5d19-e7ba-4da7-8633-0a0ca373161e");
        localStorage.setItem("storedUserDetails", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchUserLoanSummary = async () => {
    try {
        const response = await api.get("/v3/beaf8971-ae43-4b82-8f7d-fdc20ade37d7");
        return response.data;
    } catch (error) {
        throw error;
    }
};

