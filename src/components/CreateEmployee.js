import React, { useState } from "react";
import { EmployeeContext } from "../context";
import { createEmployee } from "../services/employeeService";
import { states } from "../utils/states";
import Select from 'react-select';
import { Modal } from 'simple-modal-component-ab';
import { departments } from "../utils/departments";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const CreateEmployee = () => {
	
	const [employee, setEmployee] = useState({
		firstname: "",
		lastname: "",
		dateOfBirth: new Date(),
		startDate: new Date(),
		street: "",
		city: "",
		state: "",
		zipCode: "",
		department: "",
	});

	const context = React.useContext(EmployeeContext);

	const [isOpened, setIsOpened] = useState(false);

	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createEmployee(employee, context);
		setIsOpened(true);
	};

	return(	
		<form onSubmit={handleSubmit}>
			<label htmlFor="firstname">
				First Name
			</label>
			<input
				type="text"
				name="firstname"
				id="firstname"
				required={true}
				value={employee.firstname}
				onChange={handleInputChange}
			/>
			
			<label htmlFor="lastname">
				Last Name
			</label>
			<input
				type="text"
				name="lastname"
				id="lastname"
				required={true}
				value={employee.lastname}
				onChange={handleInputChange}
			/>
						
			<label htmlFor="dateOfBirth">
				Date of Birth
			</label>
			<DatePicker 
				selected={employee.dateOfBirth} 
				id="dateOfBirth"
				onChange={(date) => setEmployee({ ...employee, dateOfBirth:date})}
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
			/>
			
			<label htmlFor="startDate">
				Start Date
			</label>
			<DatePicker 
				selected={employee.startDate} 
				id="startDate"
				onChange={(date) => setEmployee({ ...employee, startDate:date})}       
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
			/>
			
			<fieldset className="address">
				<legend>Address</legend>
				<label htmlFor="street">
					Street
				</label>
				<input
					type="text"
					name="street"
					id="street"
					value={employee.street}
					onChange={handleInputChange}
				/>
				
				<label htmlFor="city">
					City
				</label>
				<input
					type="text"
					name="city"
					id="city"
					value={employee.city}
					onChange={handleInputChange}
				/>
				
				<label htmlFor="state">
					State
				</label>
				<Select name="state" id="state" options={states} value={employee.state} onChange={(state) => setEmployee({ ...employee, state:state})}/>
				
				<label htmlFor="zipCode">
					Zip Code
				</label>
					<input
						type="number"
						name="zipCode"
						id="zipCode"
						value={employee.zipCode}
						onChange={handleInputChange}
					/>
			</fieldset>
			<label htmlFor="department">
				Department
			</label>
			<Select name="department" id="department" options={departments} value={employee.department} onChange={(department) => setEmployee({ ...employee, department:department})}/>
			
			<button type="submit">
				Save
			</button>
			<Modal
				isOpened={isOpened}
				isClosable
				onClose={() => setIsOpened(false)}
			>
				<p>Employee Created!</p>
			</Modal>
		</form>
	)
}

export default CreateEmployee