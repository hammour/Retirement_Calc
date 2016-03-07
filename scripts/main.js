var currentAge = parseFloat(prompt("What is your current age?"));
var retirementAge = parseFloat(prompt("At what age would you like to retire?"));
var left = retirementAge-currentAge;
document.write("<div>You have "+ left +" years left until you can retire<div>");
var today = new Date();
var thisYear = today.getFullYear();
var retirementYear = thisYear + left;
document.write("<div>It's " + thisYear + ", so you can retire in " + retirementYear +"</div>") ;


