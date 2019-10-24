const config = require(require.resolve('../../wdio.conf.js')).config;
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
import  SearchPage from '../pages/search.page';
// const SearchPage = require('../pages/search.page');
// var currentPage = new SearchPage();

Given('I am a web user', ()=> {

  // console.log("Requested Capabilities are => " + JSON.stringify(browser.capabilities));
  // console.log("Started BROWSER Session: => " +  browser.sessionId);
  // console.log("Is Mobile? -> " + browser.isMobile);
  // console.log("CONFIG => " + JSON.stringify(config));

  // browser.url(config.baseUrl);
  // assert.strictEqual(browser.getTitle(), 'Google')

});

When("I search google for {string}", (searchTerm)=> {
  SearchPage.open()
  SearchPage.searchFor(searchTerm);
  // return true;
});

Then('I get some results containing {string}', (resultsTerm)=> {
  return ;
});