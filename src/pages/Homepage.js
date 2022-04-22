import { Link } from "react-router-dom"
import CreateEmployee from "../components/CreateEmployee"

const Homepage = () => {

	return (
		<div>
			<div className="title">
				<h1>HRnet</h1>
			</div>
			<div className="container">
				<Link to="employee-list">View Current Employees</Link>
				<CreateEmployee />
			</div>
		</div>
	)
}

export default Homepage