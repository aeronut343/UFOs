/* eslint-disable no-unused-vars */
// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select('tbody');

function buildTable(data) {
	// Clear existing data
	tbody.html('');

	// loop through each object and append the data to the table
	data.forEach((dataRow) => {
		// append a row
		let row = tbody.append('tr');
		Object.values(dataRow).forEach((val) => {
			// append and insert data
			let cell = row.append('td');
			cell.text(val);
		});
	});  
}
function handleClick() {
	// grab datetime value from filter
	let date = d3.select('#datetime').property('value');

	// check to see if a date was entered and filter the data
	let filteredData = tableData;
	if (date) {
		filteredData = filteredData.filter(row => row.datetime === date);
	}

	// rebuild the table with the filtered data
	buildTable(filteredData);
}
// use d3 to assign handleClick as the filter handler
d3.selectAll('#filter-btn').on('click', handleClick);

// build initial table for webpage
buildTable(tableData);