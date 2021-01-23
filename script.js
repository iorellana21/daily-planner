// create variable to contain todays date
var today = new Date();
// create variable to contain Day Month ## Year format
var todayDate = today.toDateString();
// add text to page to display
$("#currentDay").text(todayDate);

// variable to contain all tags with row class
var rowColor = $(".row");

// create an array and check if there is data in the 'users' key in localStorage
// if true, expand the array and add another index; else, create first index
var userArray = JSON.parse(localStorage.getItem(`${todayDate}`)) || [];

// display current hour
var currentHour = new Date().getHours();
console.log("current hour: " + currentHour);

// going through all rows and applying color based on the the rows hour value
for (var i = 0; i < rowColor.length; i++) {
    // display value for each row
    var hourValue = parseInt(rowColor[i].getAttribute("value"));
    // console.log("row " + rowColor[i].getAttribute("value") + " hour value variable - " + hourValue);

    // compare hour of row and current hour
    if (currentHour > hourValue) {
        // apply past class to row if current hour is greater than rows hour value
        var pastHours = rowColor[i].setAttribute("class", "past");

        // apply future class to row if current hour is less than rows hour value
    } else if (currentHour < hourValue) {
        var futureHours = rowColor[i].setAttribute("class", "future");

        // otherwise apply present class
    } else {
        var presentHour = rowColor[i].setAttribute("class", "present");
    }

}

// what happens when Save button is clicked
$("button").on("click", function (event) {
    // display button pressed
    console.log(event.currentTarget);
    // assign id of button pressed to hour variable
    var hour = event.currentTarget.id;
    // display id of button pressed
    console.log("variable hour: " + hour);

    // using hour variable, search for id of textarea tag and store value into variable
    var userInput = $("#input-" + hour).val();
    // display user input
    console.log("task entered: " + userInput);

    // concatenate hour and task
    console.log("hour: " + hour + "; task: " + userInput);

    // assign value to userInitials variable
    // userInitials = userInput.value; this is my userInput variable

    // object containing hour and task
    var user = {
        time: hour,
        task: userInput
    };

    // push values from user object to array
    userArray.push(user);

    // store array data as an item inside todayDate key
    localStorage.setItem(`${todayDate}`, JSON.stringify(userArray));

});


// display task from local storage to page
function loadData() {
    // retrieve data in local storage key and store into an array of objects
    var getTasks = JSON.parse(localStorage.getItem(`${todayDate}`));
    console.log(getTasks);

    // check if there was data in local storage
    if (getTasks !== null) {
        userArray = getTasks;
        console.log(userArray);
    } else {
        return;
    }

    // push saved events back onto page by appending if the key is equal to the index hour of the array object
    var keys = Object.entries(getTasks);
    console.log(keys);
    keys.forEach(([key, value]) => {
        for (var i = key; i < 18; i++)
            if ($("#input-" + i).attr('data-time') === key) {
                $('#input-' + i).append(value);
            }
    })
}

loadData();