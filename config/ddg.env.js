let config = require('./wdio.conf');

function getConfigFor(applicationName, environment) {

  switch(applicationName.toLowerCase()) {

    case 'ddg': {
      switch(environment.toLowerCase()) {
        case 'test': {
          config.base_url = "https://duckduckgo-test.com"
          config.username = "TestingDuck"
          config.password = "Password"
          console.log("Generating config for application => " + applicationName + ", for ENV => " + environment);
        }

        case 'prod': {
          config.base_url = "https://duckduckgo.com"
          config.username = "ProductionDuck"
          config.password = "Password"
          console.log("Generating config for application => " + applicationName + ", for ENV => " + environment);

        }

        default: {
          throw Error(`ENV -> ${environment} is NOT a valid env for application ${applicationName}. Refer config directory for available apps and envs`);
        }
      }
    }
  }
}

var result = getConfigFor('ddg', 'test');
console.log(JSON.stringify(result));
