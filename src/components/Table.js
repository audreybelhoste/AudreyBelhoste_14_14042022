import React, { useState } from "react";
import { EmployeeContext } from "../context";
import DataTable from "react-data-table-component";
import Filter from "./Filter";

const Table = () => {
	const columns = [
		{
			name: 'First Name',
			selector: row => row.firstname,
			sortable: true,
			wrap: true,
		},
		{
			name: 'Last Name',
			selector: row => row.lastname,
			sortable: true,
			wrap: true,
		},
		{
			name: 'Start Date',
			selector: row => row.startDate,
			sortable: true,
			wrap: true,
		},
		{
			name: 'Departement',
			selector: row => row.department,
			sortable: true,
			wrap: true,
		},
		{
			name: 'Date Of Birth',
			selector: row => row.dateOfBirth,
			sortable: true,
			wrap: true,
		},
		{
			name: 'Street',
			selector: row => row.street,
			sortable: true,
			wrap: true,
		},
		{
			name: 'City',
			selector: row => row.city,
			sortable: true,
			wrap: true,
		},
		{
			name: 'State',
			selector: row => row.state,
			sortable: true,
		},
		{
			name: 'Zip Code',
			selector: row => row.zipCode,
			sortable: true,
			wrap: true,
		},
	];

	const context = React.useContext(EmployeeContext);
	const employees = context.employees;

	const [filterText, setFilterText] = useState('');

	const handleFilterChange = (e) => {
		setFilterText(e.target.value)
	};

	const filteredEmployees = employees.filter(
		item => (item.firstname && item.firstname.toLowerCase().includes(filterText.toLowerCase())) || (item.lastname && item.lastname.toLowerCase().includes(filterText.toLowerCase()))
	)

	return (
		<div>
			{ employees.length > 0 && 
				<Filter
					handleFilterChange={handleFilterChange}
					filterText={filterText}
				/>
			}
			<DataTable
				columns={columns}
				data={filteredEmployees}
				pagination
			/>
		</div>
	);	
}

export default Table