"use strict";
function getAverage(array) {
    let sum = 0;
    array.forEach(function (value) {
        sum += value;
    });
    return sum / array.length;
}
function getArray() {
    const arr = [];
    let num1 = Number(prompt("enter number to stop enter -1"));
    while (num1 != -1) {
        arr.push(num1);
        num1 = Number(prompt("enter number to stop enter -1"));
    }
    return arr;
}
alert(getAverage(getArray()));
