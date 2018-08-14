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
function drawPage(apod) {
    let template = `
    <div class="apod" style="background-image: url('${apod.imageurl}'}">
        <span class="date">${apod.date}</span>
        <h1>${apod.title}</h1>
        <p>${apod.explanation} 
            <span>${apod.copyright}</span>    
        </p>
    `
    htmlApp = document.querySelector(".app")
    htmlApp.innerHTML = template
}

