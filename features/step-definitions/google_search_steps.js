const { Given, When, Then } = require('cucumber');

Given('I am a web user', ()=> {

  console.log("Requested Capabilities are => " + JSON.stringify(browser.capabilities));
  console.log("Started BROWSER Session: => " +  browser.sessionId);
  console.log("Is Mobile? -> " + browser.isMobile);
  return;
});