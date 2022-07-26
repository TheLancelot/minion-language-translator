// console.log("Script working");

// alert("this script works"); //this gives a alert

var btnTranslate=document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");


function clickHandler()
{
    console.log("Clicked!");
    console.log("input", txtInput.value);

}
btnTranslate.addEventListener("click",clickHandler)