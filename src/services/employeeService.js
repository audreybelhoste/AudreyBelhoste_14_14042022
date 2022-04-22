export const createEmployee = (employeeData) => {
	const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstname: employeeData.firstname,
        lastname: employeeData.lastname,
        dateOfBirth: employeeData.dateOfBirth,
        startDate: employeeData.startDate,
        department: employeeData.department,
        street: employeeData.street,
        city: employeeData.city,
        state: employeeData.state.label,
        zipCode: employeeData.zipCode
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
}

export const formatEmployees = (employees) => {
	return employees.map(employee => ({
        ...employee, 
        dateOfBirth : employee.dateOfBirth
    }))
}

export const getEmployees = () => {
	const employees = JSON.parse(localStorage.getItem('employees')) || [];
	return formatEmployees(employees);
}