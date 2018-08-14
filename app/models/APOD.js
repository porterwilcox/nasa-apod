export default class APOD {
    constructor(reqData){
        this.title = reqData.title
        this.date = reqData.date
        this.explanation = reqData.explanation
        this.imageurl = reqData.hdurl
        this.copyright = reqData.copyright
    }
}