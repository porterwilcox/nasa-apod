import NasaService from "./service.js";


let nasaService = new NasaService

export default class NasaController {
    constructor() {
        getData();
    }
}

function getData() {
    nasaService.getData(drawPage)
}

let htmlApp
let dateInput
let dateNow = new Date()
let year = dateNow.getFullYear()
let month = dateNow.getMonth() + 1
if (month < 10) {
    month = `0${month}`
}
let day = dateNow.getDate()
if (day < 10) {
    day = `0${month}`
}
function drawPage(apod) {
    let template = `
    <img class="apod-image" src="${apod.imageurl}" alt="astronomy image" />
    <div class="text">
    <input class="date-input" type="date" name="date" value="${apod.date}" min="1995-07-01" max="${year}-${month}-${day}" />
    <h1>${apod.title}</h1>
    <p>${apod.explanation} 
    <br><span class="copyright"> -copyright: ${apod.copyright}</span>    
    </p>
    </div>
    `
    htmlApp = document.querySelector(".app")
    htmlApp.innerHTML = template
    
    dateInput = document.querySelector('.date-input')
    function getNewData() {
        nasaService.getNewData(drawPage, dateInput.value)
    }
    dateInput.addEventListener("input", getNewData)
}

