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
const eredmeny = document.querySelector("#eredmeny") as HTMLInputElement;
const Ahossz = document.querySelector("#Ahossz") as HTMLInputElement;
const Bhossz  = document.querySelector("#Bhossz") as HTMLInputElement;
const Chossz  = document.querySelector("#Chossz") as HTMLInputElement;
const Dhossz  = document.querySelector("#Dhossz") as HTMLInputElement;

calgomb?.addEventListener("click", () => { 
    let aNum=Number(Ahossz.value);
    let bNum=Number(Bhossz.value);
    let cNum=Number(Chossz.value);
    let dNum=Number(Dhossz.value);
    
    let string = "A trapéz területe:"
    let result = calcArea(aNum, bNum, cNum, dNum);
    eredmeny.textContent=string+" "+String(result);
    
});
function calcArea(aNum: number, bNum: number, cNum: number, dNum: number): number {
    const first =(aNum+cNum)/(4*(aNum-cNum)); //0.83
    const second = Math.sqrt((aNum+bNum-cNum+dNum)*(aNum-bNum-cNum+dNum)*(aNum+bNum-cNum-dNum)*(-aNum+bNum+cNum+dNum));
    return first*second;
}
