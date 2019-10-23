import Page from './page'

class SearchPage extends Page {
  
  get searchInput() { return $('input[name="q"]')  }
  get searchButton() { return $('input[name="btnK"]') }

  open(){
    super.open('/')
  }

  searchFor(text){
    this.searchInput.clear()
    this.searchInput.setValue(text)
    this.searchButton.click()
  }

}

export default new SearchPage();