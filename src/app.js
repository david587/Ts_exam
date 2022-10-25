/*
* File: app.js
* Author: Baráth Dávid
* Copyright: 2022, Baráth Dávid
* Group: Szoft 2/n
* Date: 2022-10-25
* Github: https://github.com/587/
* Licenc: GNU GPL
*/

const calgomb = document.querySelector("#calgomb");
const eredmeny = document.querySelector("#eredmeny");
const Ahossz = document.querySelector("#Ahossz");
const Bhossz = document.querySelector("#Bhossz");
const Chossz = document.querySelector("#Chossz");
const Dhossz = document.querySelector("#Dhossz");
calgomb === null || calgomb === void 0 ? void 0 : calgomb.addEventListener("click", () => {
    let aNum = Number(Ahossz.value);
    let bNum = Number(Bhossz.value);
    let cNum = Number(Chossz.value);
    let dNum = Number(Dhossz.value);
    let string = "A trapéz területe:";
    let result = calcArea(aNum, bNum, cNum, dNum);
    eredmeny.textContent = string + " " + String(result);
});
function calcArea(aNum, bNum, cNum, dNum) {
    const first = (aNum + cNum) / (4 * (aNum - cNum)); //0.83
    const second = Math.sqrt((aNum + bNum - cNum + dNum) * (aNum - bNum - cNum + dNum) * (aNum + bNum - cNum - dNum) * (-aNum + bNum + cNum + dNum));
    return first * second;
}
