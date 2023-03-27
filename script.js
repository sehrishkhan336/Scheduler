var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var timeBlockEl = $(".time-block");
var currentHour = dayjs().hour();

//Display the current date and time in the top center of the page 
$(document).ready(function () {
  // set the format of the date and time
  // var currentDateEl = dayjs().format("ddd, MMM D, YYYY h:mm:ss A");
  console.log("Set the format of date and time here")
  // set time interval to show the seconds running
  setInterval(function () {
    var currentDateEl = dayjs().format("ddd, MMM D, YYYY h:mm:ss A");
    console.log("defined the timer interval to show the seconds running");
    currentDayEl.text(currentDateEl);
  }, 1000);
});


// set the past present and future properties
timeBlockEl.each(function () {
  // Get the hour from the div's id attribute

  var hour = parseInt($(this).attr("id").split("-")[1]);
  if (hour < currentHour) {
    $(this).addClass("past");
    console.log("Adding past class");
  } else if (hour === currentHour) {
    $(this).addClass("present");
    console.log("Adding present class");
  } else {
    $(this).addClass("future");
    console.log("Adding future class");
  }
});

// Task 3: Add a listener for click events on the save button
var hourEl;
var descriptionEl;
$(function () {

  //add event listener to save buttons
  saveBtnEl.on("click", function () {
    console.log("save button must work");
    // get parent hour element ID and description value of sibling textarea
    var hourEl = $(this).parent().attr("id");
    var descriptionEl = $(this).siblings(".description").val();
    // save description value to local storage using hour element ID as key
    localStorage.setItem(hourEl, descriptionEl);
    console.log(localStorage.getItem(hourEl));
  });
  // Task 4: Saved Tasks to persist when reloading the page
 

  timeBlockEl.each(function () {
    var task = localStorage.getItem($(this).attr("id"));
    if (task !== null) {
      $(this).find(".description").val(task);
    }
  });

});

