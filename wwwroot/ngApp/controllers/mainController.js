class MainController {
    constructor() {
        this.message = this.randomFortune();
    }
    randomFortune(){
    return Math.floor((Math.random() * 10) + 1);
    
    }
}
