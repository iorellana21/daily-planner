// create variable to contain todays date
var today = new Date();
// create variable to contain Day Month ## Year format
var todayDate = today.toDateString();
// add todays date to page to display
$("#currentDay").text(todayDate);

// assign/display current hour
var currentHour = new Date().getHours();
console.log("current hour: " + currentHour);

// selecting all row tags with value attribute
var rows = document.querySelectorAll("[value]");

// creating object with each hour as a key for local storage
var timeEntry = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: ""
}

// assign timeEntry object values with the stored values from local storage
Object.assign(timeEntry, JSON.parse(localStorage.getItem(`${todayDate}`)));

// assign different colors to different time after comparing with current hour
rows.forEach(function (rowElement) {
    // grabbing the value attribute for each row
    var rowHour = parseInt(rowElement.getAttribute("value"));

    // assign the value attribute of row into the input tag value
    rowElement.querySelector("input").value = timeEntry[rowHour];

    // compare hour of row and current hour
    if (currentHour > rowHour) {
        // apply past class to row if current hour is greater than rows hour value
        $(rowElement).addClass("past");
    }
    // apply future class to row if current hour is less than rows hour value
    else if (currentHour < rowHour) {
        $(rowElement).addClass("future");

        // otherwise apply present class
    } else {
        $(rowElement).addClass("present");
    }
});

// what happens when a Save button is clicked
$(".btn").click(function (event) {
    // display id of button pressed
    console.log(event.currentTarget.id);

    // get parent element of button pressed
    var parentValue = $(this).parent();

    // pull in/display value attribute of parent row element and assign to hourValue
    var hourValue = parseInt(parentValue.attr("value"));
    console.log("hour value of parent element: " + hourValue);

    // grab the hourValue from parent element and select that key in timeEntry object
    // assign that key the value of user input in input tag
    timeEntry[hourValue] = parentValue.find("input").val();

    // store user input from timeEntry object into local storage key
    localStorage.setItem(`${todayDate}`, JSON.stringify(timeEntry));
});
