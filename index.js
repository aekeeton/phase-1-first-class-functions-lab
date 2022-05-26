// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [...array.slice(0, 2)];
}

const returnLastTwoDrivers = function(array) {
    return [...array.slice(2)];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function() {
        return fare * 5
    }
}

const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}

