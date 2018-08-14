import NasaController from "./components/controller.js";


class App {
    constructor() {
        this.controllers = {
            nasaController: new NasaController
        }
    }
}

window.app = new App