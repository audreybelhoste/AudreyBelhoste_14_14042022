import React from 'react';
import { useState } from "react";

export const EmployeeContext = React.createContext({ employees: [] });

const EmployeeContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    const addEmployee = (newEmployee) => {
        setEmployees([
            ...employees,
            formatEmployee(newEmployee)
        ]);
    };

    const value = { employees, addEmployee };
    
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const formatEmployee = (employee) => {
    employee.dateOfBirth = formatDate(employee.dateOfBirth);
    employee.startDate = formatDate(employee.startDate);

    return employee;
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en");
}

export default EmployeeContextProvider;