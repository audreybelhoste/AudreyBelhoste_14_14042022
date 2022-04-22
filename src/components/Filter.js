const Filter = ({handleFilterChange, filterText}) => {
	return (
		<div>
			<input
				type="text"
				name="filter"
				value={filterText}
				onChange={handleFilterChange}
			/>
		</div>
	);	
}

export default Filter