import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import EmployeeList from './pages/EmployeeList';
import EmployeeContextProvider from './context';

function App() {
	return (
		<EmployeeContextProvider>
			<BrowserRouter>
				<div className="App">
					<Routes>
						<Route exact path="/" element={<Homepage />}>
						</Route>
						<Route path="/employee-list" element={<EmployeeList />}>
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</EmployeeContextProvider>
	);
}

export default App;
