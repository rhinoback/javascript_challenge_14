// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select(".table");

// Use D3 to select the table
var table = d3.selectAll("td");

// Use D3 to set the table class to `table table-striped`
// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
// Iterate through each student/grade pair
tableData.forEach((AlienAwesome) => {
    console.log(AlienAwesome)
    var row= tbody.append("tr")
    Object.entries(AlienAwesome).forEach(function([key, value]){
    var cell = row.append("td");
    cell.text(value)
    });
})

  



