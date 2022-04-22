import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
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
  );
}

export default App;
