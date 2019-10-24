import Page from './page';

class SearchPage extends Page {
  // module.exports = class SearchPage extends Page {
  get searchInput() { return $('input[name="q"]')  }
  get searchButton() { return $('input[name="btnK"]') }

  async open(){
    await super.open('/')
  }

  async searchFor(text){
    // this.searchInput.clear()
    await this.searchInput.setValue(text)
    await this.searchButton.click()
  }

}

export default new SearchPage()