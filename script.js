// create variable to contain todays date
var today = new Date();
// create variable to contain Day Month ## Year format
var todayDate = today.toDateString();
// add text to page to display
$("#currentDay").text(todayDate);

// create an array to contain hours
var hours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
];

// for-loop to create timeblocks for each value in hours array
for (var i = 0; i < hours.length; i++) {
    // displaying working hours
    console.log(hours[i]);

    // create div tag to contain entire timeblock for each hour
    var timeBlockTag = $("<div>");
    // assign the row class
    $(timeBlockTag).addClass("row");


    // create h2 tag to display hour
    var hourTag = $("<h2>");
    // assign the hour class
    $(hourTag).addClass("hour");
    // add text to display hours in array
    $(hourTag).text(hours[i]);



    // create textarea tag to contain user input
    var textTag = $("<textarea>");
    // assign the description and time-block classes
    $(textTag).addClass("description");
    $(textTag).addClass("time-block");

    
    // create textarea tag to display save button
    var buttonTag = $("<button>");
    $(buttonTag).addClass("saveBtn");














    // append timeBlockTag to .container
    $(".container").append(timeBlockTag);
    // append hour, text, button tags to timeBlockTag
    $(timeBlockTag).append(hourTag);
    $(timeBlockTag).append(textTag);
    $(timeBlockTag).append(buttonTag);




    
}
