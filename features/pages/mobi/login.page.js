import Page from '../mobi/Page';

class LoginPage extends Page {
  
   get searchInput() { return $('#search_form_input_homepage')  }
   get searchButton() { return $('#search_button_homepage') }
   get results(){ return $('form[role="search"]')}

  open(){
    super.open('/')
  }

  searchFor(text){
    this.searchInput.setValue(text)    
    // There is a problem with google search button click
    this.searchButton.click()
  }

}

export default new SearchPage()