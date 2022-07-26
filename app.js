// console.log("Script working");

// alert("this script works"); //this gives a alert

//get me the button
var btnTranslate = document.querySelector("#btn-translate");

//get me the input
var txtInput = document.querySelector("#txt-input");

//get me the output
var outputDiv = document.querySelector("#output");

//test mockserver as api calls are limited;; var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"
// outputDiv.innerText="hi";

//for api url
function getTranslationURL(input) {
    return serverURL + "?text=" + input;
};

//handling errors
function errorHandler(error) {
    console.log("Error has occureF d", error);
    alert("Something is wrong, Maybe the server is down: try again after some time");
};

//what to do when click happens
function clickHandler() {
    // console.log("Clicked!");
    // console.log("input", txtInput.value);
    // outputDiv.innerText="agwgcvska \n"+txtInput.value;

    //First read input
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText)) //fetch the api url
        .then(response => response.json())
        //convert that response to response.json

        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText;
        }) //take that json and store the translated field of the json in a var and print that translated text as output


        /**  .then(json => console.log(json))we dont want entire json, just the translated part
         .then(json => console.log(json.contents.translated))//this puts output on console
         */

        .catch(errorHandler);



};
btnTranslate.addEventListener("click", clickHandler) //do the stuff in clickhandler function when button click event happens 