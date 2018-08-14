import APOD from "../models/APOD.js";

export default class NasaService {
    constructor() { }
    getData(callback) {
        fetch("https://api.nasa.gov/planetary/apod?api_key=8rBCbSnmG9OD7uhtGC3qKkBq1HzbqoVof3DSvUHv")
            .then(res => res.json())
            .then(res => callback(new APOD(res)))
    }
}