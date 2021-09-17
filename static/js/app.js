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