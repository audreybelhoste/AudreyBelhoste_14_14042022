import { useState } from "react";
import { createEmployee } from "../services/employeeService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "../utils/states";
import Select from 'react-select'
import Modal from 'simple-modal-component-ab';
import { departments } from "../utils/departments";

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

	const [isOpened, setIsOpened] = useState(false);

	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createEmployee(employee);
		setIsOpened(true);
	};

	return(	
		<form onSubmit={handleSubmit}>
			<label for="firstname">
				First Name
			</label>
			<input
				type="text"
				name="firstname"
				id="firstname"
				required="true"
				value={employee.firstname}
				onChange={handleInputChange}
			/>
			
			<label for="lastname">
				Last Name
			</label>
			<input
				type="text"
				name="lastname"
				id="lastname"
				required="true"
				value={employee.lastname}
				onChange={handleInputChange}
			/>
						
			<label for="dateOfBirth">
				Date of Birth
			</label>
			<DatePicker 
				selected={employee.dateOfBirth} 
				id="dateOfBirth"
				required="true"
				onChange={(date) => setEmployee({ ...employee, dateOfBirth:date})}
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
			/>
			
			<label for="startDate">
				Start Date
			</label>
			<DatePicker 
				selected={employee.startDate} 
				id="startDate"
				required="true"
				onChange={(date) => setEmployee({ ...employee, startDate:date})}       
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
			/>
			
			<fieldset className="address">
				<legend>Address</legend>
				<label for="street">
					Street
				</label>
				<input
					type="text"
					name="street"
					id="street"
					required="true"
					value={employee.street}
					onChange={handleInputChange}
				/>
				
				<label for="city">
					City
				</label>
				<input
					type="text"
					name="city"
					id="city"
					required="true"
					value={employee.city}
					onChange={handleInputChange}
				/>
				
				<label for="state">
					State
				</label>
				<Select name="state" id="state" required="true" options={states} value={employee.state} onChange={(state) => setEmployee({ ...employee, state:state})}/>
				
				<label for="zipCode">
					Zip Code
				</label>
					<input
						type="number"
						name="zipCode"
						required="true"
						id="zipCode"
						value={employee.zipCode}
						onChange={handleInputChange}
					/>
			</fieldset>
			<label for="department">
				Department
			</label>
			<Select name="department" id="department" required="true" options={departments} value={employee.department} onChange={(department) => setEmployee({ ...employee, department:department})}/>
			
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