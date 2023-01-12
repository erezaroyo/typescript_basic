"use strict";
function getInputByUser() {
    var _a;
    (_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const input = document.getElementById("currency");
        console.log(input === null || input === void 0 ? void 0 : input.nodeValue);
    });
}
getInputByUser();
