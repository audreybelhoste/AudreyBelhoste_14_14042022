const Filter = ({handleFilterChange, filterText}) => {
	return (
		<div>
			<label>Search: 
				<input
					type="text"
					name="filter"
					value={filterText}
					onChange={handleFilterChange}
				/>
			</label>
		</div>
	);	
}

export default Filter