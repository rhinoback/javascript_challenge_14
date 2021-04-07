// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select(".table");

// Use D3 to select the table
var table = d3.selectAll("td");

//Loop through and make the table
tableData.forEach((AlienAwesome) => {
    console.log(AlienAwesome)
    var row= tbody.append("tr")
    Object.entries(AlienAwesome).forEach(function([key, value]){
    var cell = row.append("td");
    cell.text(value)
    });
