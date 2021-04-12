// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.selectAll("td");

function tableBuilding(data){
    tbody.html("")
    data.forEach((rowData)=>{
        let row=  tbody.append("tr");
        Object.values(rowData).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}

function runEnter(){
    let inputElement = d3.select("#datetime").property("value");
    let filtered = tableData;
    
    if (inputElement) {
        filtered = filtered.filter(row=>row.datetime===inputElement);
    }
    tableBuilding(filtered);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", runEnter);
// Build the table when the page loads
tableBuilding(tableData);

