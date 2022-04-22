import React from "react";
import { Link } from "react-router-dom"
import Table from "../components/Table";

const EmployeeList = () => {
	
	return (
		<div>
			<div className="container">
				<Link to="/">Home</Link>
				<Table />
			</div>
		</div>
	)
}

export default EmployeeList