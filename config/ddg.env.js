
function getConfigForDuckDuckGo(environment = "test"){
  let applicationName = "DuckDuckGo"
  let duckDuckGoConfig = {}
  
  console.log("Handling ENV: " + environment + " for DuckDuckGo application")
  switch(environment.toLowerCase()) {
    case 'test':
      duckDuckGoConfig.base_url = "https://duckduckgo.com"
      duckDuckGoConfig.username = "TestingDuck"
      duckDuckGoConfig.password = "Password"
      return duckDuckGoConfig

    case 'prod':
      duckDuckGoConfig.base_url = "https://duckduckgo.com/"
      duckDuckGoConfig.username = "ProductionDuck"
      duckDuckGoConfig.password = "Password"
      return duckDuckGoConfig
    
    default:
      throw Error(`ENV => ${environment} is NOT defined for APP => ${applicationName}`)
  }  

}

module.exports = getConfigForDuckDuckGo