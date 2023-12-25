export interface UsersBankDetailsProps {
    name: string,
    id: string,
    stars: number,
    balance: string,
    accountNumber: string,
    bankName: string
}

export interface UserDetailsProps {
    personalInformation: {
        fullName: string,
        phoneNumber: string,
        emailAddress: string,
        bvn: string,
        gender: string,
        maritalStatus: string,
        children: string,
        typeOfResidence: string,
    },
    educationAndEmployment: {
        levelOfEducation: string,
        employmentStatus: string,
        sectorOfEmployment: string,
        durationOfEmployment: string,
        officeEmail: string,
        monthlyIncome: string,
        loanRepayment: string,
    },
    socials: {
        twitter: string,
        facebook: string,
        instagram: string,
    },
    guarantor: [{
        fullName: string,
        phoneNumber: string,
        emailAddress: string,
        relationship: string
    },
        {
            fullName: string,
            phoneNumber: string,
            emailAddress: string,
            relationship: string
        }]
}
