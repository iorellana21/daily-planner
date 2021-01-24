// create variable to contain todays date
var today = new Date();
// create variable to contain Day Month ## Year format
var todayDate = today.toDateString();
// add text to page to display
$("#currentDay").text(todayDate);



// create an array and check if there is data in the 'users' key in localStorage
// if true, expand the array and add another index; else, create first index
var userArray = JSON.parse(localStorage.getItem(`${todayDate}`)) || [];

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
