// let student = ["Leonald", "Raphael", "Donatello", "Michalangelo"];

// document.getElementById("demo").innerHTML = student[2];
// document.querySelector("#demo").innerHTML = student[3];

let userDetails = [];
userDetails[0] = prompt("What is your name?");
userDetails[1] = prompt("What is last name?");
userDetails[2] = prompt("How old are you?");
document.getElementById("demo").innerHTML = userDetails[0] + " " + userDetails[1] + " " + userDetails[2];

