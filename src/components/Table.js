import { useState } from "react";
import DataTable from "react-data-table-component";
import { getEmployees } from "../services/employeeService";
import Filter from "./Filter";

const Table = () => {
	const columns = [
		{
			name: 'First Name',
			selector: row => row.firstname,
			sortable: true,
		},
		{
			name: 'Last Name',
			selector: row => row.lastname,
			sortable: true,
		},
		{
			name: 'Start Date',
			selector: row => row.startDate,
			sortable: true,
		},
		{
			name: 'Departement',
			selector: row => row.department,
			sortable: true,
		},
		{
			name: 'Date Of Birth',
			selector: row => row.dateOfBirth,
			sortable: true,
		},
		{
			name: 'Street',
			selector: row => row.street,
			sortable: true,
		},
		{
			name: 'City',
			selector: row => row.city,
			sortable: true,
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
		},
	];

	const employees = getEmployees();

	const [filterText, setFilterText] = useState('');

	const handleFilterChange = (e) => {
		setFilterText(e.target.value)
	};

	const filteredEmployees = employees.filter(
		item => item.firstname && item.firstname.toLowerCase().includes(filterText.toLowerCase()),
	)

	return (
		<div>
			<Filter
				handleFilterChange={handleFilterChange}
				filterText={filterText}
			/>
			<DataTable
				columns={columns}
				data={filteredEmployees}
				pagination
			/>
		</div>
	);	
}

export default Table