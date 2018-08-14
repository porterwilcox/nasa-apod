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
    <img class="apod-image" src="${apod.imageurl}" alt="astronomy image" />
    <div class="text">
        <span class="date">${apod.date}</span>
        <h1>${apod.title}</h1>
        <p>${apod.explanation} 
            <br><span class="copyright"> -copyright: ${apod.copyright}</span>    
        </p>
    </div>
    `
    htmlApp = document.querySelector(".app")
    htmlApp.innerHTML = template
}

