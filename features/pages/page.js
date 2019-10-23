export default class Page {
  
  constructor(){
    this.title = "Google";
  }

  open(path){
    browser.url(path);
  }

}