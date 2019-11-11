const assert = require('assert');
const { Given, When, Then } = require('cucumber');
import MobiPage from '../../pages/mobi/mobi.page';
import  MobiLoginPage from '../../pages/mobi/mobi.login.page';

Given('I am on Patient Login page', ()=> {
  console.log("Current capabilities => " + JSON.stringify(browser.capabilities))
});

When("I login as user {string} with password {string}", (username, password)=> {
  MobiLoginPage.loginAs(username, password)
});

Then('My prescriptions are displayed', ()=> {
  MobiLoginPage.verifyLandingScreen()
});