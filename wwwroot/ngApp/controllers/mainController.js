class MainController {
    constructor() {
        let fortune = this.createArray(); 
        this.message = this.getFortune(fortune);
    }
   
  
    //create array of 10 fortunes
    //creat function to randomly pick one fortunes
    createArray() {
        let result = [
            "So text", 
            "Going to work on this",
             "Keep working", 
             "Use your resources", 
             "Note to self", 
             "If others can do it so can you", 
             "Study like your job depends on it, cause it does", 
             "Learn this", 
             "JavaScrip...",
             "Going to do this"
        ];   
        return result;
    }


    getFortune(fortunes){
        let result = "";
        let random = Math.floor((Math.random() * 10) + 1);
        result = fortunes[random];
        return result;
    } 

}
