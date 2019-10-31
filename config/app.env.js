const getConfigForDuckDuckGo = require('./ddg.env')
let appConfig = {}

function getConfigFor(applicationName, environment) {

  switch(applicationName.toLowerCase()) {

    case 'ddg': 
      console.log("Returning config for application => " + applicationName)
      appConfig = getConfigForDuckDuckGo(environment);
      return appConfig
      // break;

    case 'google': 
      console.log("Returning config for application => " + applicationName)
      appConfig.base_url= "https://google.com"
      return appConfig
      
    default:
      console.log("No matching application found for name => " + applicationName)
  }
}
  
module.exports = {
  getConfigFor,
  appConfig
}
// Uncomment following to debug this file and run > node config/app.env.js
// var result = getConfigFor('ddg', 'test');
// console.log(JSON.stringify(result));
