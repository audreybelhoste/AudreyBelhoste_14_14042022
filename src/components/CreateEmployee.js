import { useState } from "react";
import { createEmployee } from "../services/employeeService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "../utils/states";
import Select from 'react-select'

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

	const handleInputChange = (e) => {
		console.log(e)
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		console.log(employee)
		e.preventDefault();
		createEmployee(employee);
	};

	return(
		<form onSubmit={handleSubmit}>
			<label>
				First Name
				<input
					type="text"
					name="firstname"
					value={employee.firstname}
					onChange={handleInputChange}
				/>
			</label>
			<label>
				Last Name
				<input
					type="text"
					name="lastname"
					value={employee.lastname}
					onChange={handleInputChange}
				/>
			</label>			
			<label>
				Date of Birth
				<DatePicker 
					selected={employee.dateOfBirth} 
					onChange={(date) => setEmployee({ ...employee, dateOfBirth:date})}
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
				/>
			</label>
			<label>
				Start Date
				<DatePicker 
					selected={employee.startDate} 
					onChange={(date) => setEmployee({ ...employee, startDate:date})}       
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
				/>
			</label>
			<fieldset className="address">
				<legend>Address</legend>
				<label>
					Street
					<input
						type="text"
						name="street"
						value={employee.street}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					City
					<input
						type="text"
						name="city"
						value={employee.city}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					State
					<Select name="state" options={states} value={employee.state} onChange={(state) => setEmployee({ ...employee, state:state})}/>
				</label>
				<label>
					Zip Code
					<input
						type="number"
						name="zipCode"
						value={employee.zipCode}
						onChange={handleInputChange}
					/>
				</label>
			</fieldset>
			<label>Department
                <select name="department" value={employee.department} onChange={handleInputChange}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
			</label>
			<button type="submit">
				Save
			</button>
		</form>
	)
}

export default CreateEmployee