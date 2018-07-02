var firstname  = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var age = prompt("How old are you?");
var today = new Date();
var months = today.getFullYear()-age;


document.write("Hello, " + firstname + " " + lastname + "." + " Your age is " + (age*12) +" months " + "or more than " + (age*365.24) + " days old.")