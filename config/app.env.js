let config = require('./wdio.conf');

function getConfigFor(applicationName, environment) {

  switch(applicationName.toLowerCase()) {

    case 'ddg': 
      console.log("Returning config for application => " + applicationName);
      switch(environment.toLowerCase()) {
        case 'test':
          config.base_url = "https://duckduckgo.com"
          config.username = "TestingDuck"
          config.password = "Password"
          console.log("Generating config for ENV => " + environment);
          console.log("CONFIG OBJ => " + JSON.stringify(config));
          return config;

        case 'prod':
          config.base_url = "https://duckduckgo.com/"
          config.username = "ProductionDuck"
          config.password = "Password"
          console.log("CONFIG OBJ => " + JSON.stringify(config));
          console.log("Generating config for ENV => " + environment);
          return config;
        
        default:
          throw Error(`ENV => ${environment} is NOT defined for APP => ${applicationName}`);
      }  
      break;

    case 'google': 
      config.base_url= "https://google.com"
      console.log("Returning config for application => " + applicationName);
      return config;
      
    default:
      console.log("No matching application found for name => " + applicationName);
  }
}

module.exports = {
  getConfigFor,
  config,
}

// getConfigFor('ddg', 'prod');
// console.log(JSON.stringify(result));
