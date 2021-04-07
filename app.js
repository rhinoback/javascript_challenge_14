// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select(".table");

// Use D3 to select the table
var table = d3.selectAll("td");

//Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).
//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least
tableData.forEach((AlienAwesome) => {
    console.log(AlienAwesome)
    var row= tbody.append("tr")
    Object.entries(AlienAwesome).forEach(function([key, value]){
    var cell = row.append("td");
    cell.text(value)
    });
})


// //* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
// var button = d3.select("#filter-btn");

// var form = d3.select("#datetime");

// button.on("click", runEnter);
// form.on("submit", runEnter);

// function runEnter() {
//     d3.event.preventDefault();

//     var inputElement = d3.select("datetime");

//     var inputValue = inputElement.property("value");

//     console.log(inputValue);


// }
// tableData.forEach((AlienAwesome) => {
//     console.log(AlienAwesome)
//     var row= tbody.append("tr")
//     Object.entries(AlienAwesome).forEach(function([key, value]){
//     var cell = row.append("td");
//     cell.text(value)
//     });

// d3.select("h1>span").text(inputValue);


