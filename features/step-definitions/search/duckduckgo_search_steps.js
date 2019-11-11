const assert = require('assert');
const { Given, When, Then } = require('cucumber');
import  SearchPage from '../../pages/search/search.page';

Given('I am a web user', ()=> {
  console.log("Current capabilities => " + JSON.stringify(browser.capabilities))
});

When("I search for {string}", (searchTerm)=> {
  SearchPage.open()
  SearchPage.searchFor(searchTerm)
});

Then('I get some results containing {string}', (resultsTerm)=> {
  assert.ok(browser.getTitle().includes(resultsTerm),
   "ResultPage's title does not containt searchTerm => " + resultsTerm)
});