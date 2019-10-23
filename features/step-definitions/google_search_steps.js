import {SearchPage} from './features/pages/search.page';
const { Given, When, Then } = require('cucumber');
const config = require(require.resolve('../../wdio.conf.js')).config;
const assert = require('assert');
console.log("CURRENT DIR => " + process.cwd());


Given('I am a web user', ()=> {

  // console.log("Requested Capabilities are => " + JSON.stringify(browser.capabilities));
  // console.log("Started BROWSER Session: => " +  browser.sessionId);
  // console.log("Is Mobile? -> " + browser.isMobile);
  // console.log("CONFIG => " + JSON.stringify(config));

  // browser.url(config.baseUrl);
  // assert.strictEqual(pageTitle, 'Google')
});

When("I search google for {string}", async (searchTerm)=> {
  return await SearchPage.searchFor(searchTerm);
});

Then('I get some results containing {string}', (resultsTerm)=> {
  return ;
});