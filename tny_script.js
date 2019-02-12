"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Nicholas Le
   Date: 02/05/19  

*/

// One of my favorite book series is the chronicles of Nick

// window.alert("welcome to tulsa");

//Run the countdown clock
runClock();
setInterval("runClock()", 1000);

function runClock() {
    //Current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    //Display current date and time
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

    //Calculate days,hours,mins,secs left until new years
    var newYear = new Date("January 1, 2020");
    var nextYear = currentDay.getFullYear() + 1;

    newYear.setFullYear(nextYear);

    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60

    //Displays time left until new years
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}