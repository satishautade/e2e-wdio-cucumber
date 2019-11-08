const assert = require('assert');
const { Given, When, Then } = require('cucumber');
import  MobiPage from '../../pages/mobi/mobi.page';

Given('I am on Patient Login page', ()=> {
  console.log("Current capabilities => " + JSON.stringify(browser.capabilities))
  MobiPage.acceptDataPolicyTerms()

});

When("I login as user {string}", (username)=> {
  console.log("USERNAME => " + username);
});

Then('My prescriptions are displayed', ()=> {
  var resultsTerm = 'MedAdvisor Mobile'
  assert.ok(browser.getTitle().includes(resultsTerm),
   "ResultPage's title does not containt searchTerm => " + resultsTerm)
});