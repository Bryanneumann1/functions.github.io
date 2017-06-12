"use strict";

function getWage(){
	var pay = prompt("hourly rate")
	return pay;
}

function getHours(){
	var hours = prompt("hours worked");
	return hours;
}
function overTimeHours(hours){
	if (hours > 40) {
	result = hours - 40;
	return overTimeHours;
}}

function findBasePay(hoursWorked,hourlyRate) {
	var	result;
	if (hoursWorked > 40) {
	result = 40 * hourlyRate;
	return result;} return hoursWorked * hourlyRate;
}

function findBassPayVoid(hoursWorked,hourlyRate) {
	var result;
	result = hoursWorked * hourlyRate;
	console.log("This finds your base pay",result);
}

function findHoursOverStandardWeek(hours,standard){
	if (hours < 40)
    {
	return 0;
}	else if (hours > 40){return hours - 40;}}

function findHoursOverStandardWeekVoid(hours,standard) {
	var result;
	result = hours - standard;
	console.log("This finds your overtime hours");
}

function findOverTimeRateVoid(overTimeHours,overTimeMultiplier,basePay) {
	var result;
	result = overTimeHours * overTimeMultiplier * basePay;
	return result;
}

function addOverTimeToBasePay(overTimePay,basePay) {
	var result;
	result = overTimePay + basePay;
	console.log("This is your total pay with overtime",result);
	return result;
}

function runPayCalculator(){
	var hoursWorked = getHours();
	var hourlyRate = getWage();
	var payForStandardWeek = findBasePay(hoursWorked, hourlyRate);
	var	standard = 40;
	var overTimeHours = findHoursOverStandardWeek(hoursWorked, standard);
	var overTimeMultiplier = 1.5;
	var overTimePay = findOverTimeRateVoid(overTimeHours, overTimeMultiplier,hourlyRate);
	var totalPaid = addOverTimeToBasePay(overTimePay, payForStandardWeek);
}

runPayCalculator();

