import React from 'react';
import { useState } from "react";

export const EmployeeContext = React.createContext({ employees: [] });

const EmployeeContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    const addEmployee = (newEmployee) => {
        setEmployees([
            ...employees,
            newEmployee
        ]);
    };

    const value = { employees, addEmployee };
    
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const formatEmployees = (employees) => {
	return employees.map(employee => ({
        ...employee, 
        dateOfBirth : formatDate(employee.dateOfBirth),
        startDate : formatDate(employee.startDate),
    }))
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en");
}

export default EmployeeContextProvider;