// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  if (filter.test(a)) {
    return true;
  }
  else {
    return false;
  }
}/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/

function validateEmail(emailLink) {
  var a = document.getElementById(emailLink).value;
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (filter.test(a)) {
    return true;
  }
  else {
    return false;
  }
}

function validateCard(card) {
  var a = document.getElementById(card).value;
  var filter = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/; //https://regex101.com/
  if (filter.test(a)) {
    return true;
  }
  else {
    return false;
  }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["07/01/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  var barber = document.getElementById("barberChoice").value;
  if (barber == "jackson") {
    if (date.getDay() == 0 || date.getDay() == 5 || date.getDay() == 6){
      return [false];
    }
  } else {
    if (date.getDay() == 0 || date.getDay() == 4 || date.getDay() == 6){
      return [false];
    }
  }
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

  // phone validation, it calls validatePhone
  // and also some feedback as an Alert + putting a value in the input that shows the format required
  // the "addClass" will use the class "error" defined in style.css and add it to the phone input
  // The "error" class in style.css defines yellow background and red foreground
  $("#phone").on("change", function(){
    if (!validatePhone("phone")){
      alert("Numero invalide!");
      $("#phone").val("(XXX) XXX-XXXX | XXX-XXX-XXXX");
      $("#phone").addClass("error");
    }
    else {
      $("#phone").removeClass("error");
    }
  });

  $("#email").on("change", function(){
    if (!validateEmail("email")){
      alert("Adresse invalide!");
      $("#email").val("______@____.__");
      $("#email").addClass("error");
    }
    else {
      $("#email").removeClass("error");
    }
  });

  $("#creditCard").on("change", function(){
    if (!validateCard("creditCard")){
      alert("Carte invalide!");
      $("#creditCard").val("XXXX XXXX XXXX XXXX");
      $("#creditCard").addClass("error");
    }
    else {
      $("#creditCard").removeClass("error");
    }
  });

  // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
  // You can try different themes (the names are under the calendars) / This is Excite Bike
  // To use a different theme you must include its css in your HTML file.
  // The one I included in my HTML is the Excite Bike, but you can try others

  // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
  // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
  $( "#dateTimeInput" ).datepicker(
    {
      dateFormat: setDateFormat,
      // no calendar before June 1rst 2020
      minDate: new Date('06/18/2020'),
      maxDate: '+4M',
      // used to disable some dates
      beforeShowDay: $.datepicker.noWeekends,
      beforeShowDay: disableDates
    }
  );

  // Look at the different events on which an action can be performed
  // https://www.w3schools.com/jquery/jquery_events.asp
  // Here, we put
  $("#creditCard").on("mouseenter", function(){
    $("#creditCard").addClass("showInput");
  });

  $("#creditCard").on("mouseleave", function(){
    $("#creditCard").removeClass("showInput");
  });

  $("#firstName").on("mouseenter", function(){
    $("#firstName").addClass("showInput");
  });

  $("#firstName").on("mouseleave", function(){
    $("#firstName").removeClass("showInput");
  });

  $("#lastName").on("mouseenter", function(){
    $("#lastName").addClass("showInput");
  });

  $("#lastName").on("mouseleave", function(){
    $("#lastName").removeClass("showInput");
  });

  $("#email").on("mouseenter", function(){
    $("#email").addClass("showInput");
  });

  $("#email").on("mouseleave", function(){
    $("#email").removeClass("showInput");
  });

  $("#phone").on("mouseenter", function(){
    $("#phone").addClass("showInput");
  });

  $("#phone").on("mouseleave", function(){
    $("#phone").removeClass("showInput");
  });
  // https://jqueryui.com/tooltip/
  // The class "highlight" used here is predefined in JQuery UI
  // the message of the tooltip is encoded in the input (in the HTML file)
  $("#creditCard").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

  $("#firstName").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

  $("#lastName").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

  $("#phone").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });

  $("#email").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });
});
