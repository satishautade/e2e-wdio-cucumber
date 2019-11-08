
function getConfigForMobi(environment = "test"){
  let applicationName = "Mobi"
  let mobiConfig = {}
  
  console.log("Handling ENV: " + environment + " for Mobi ")
  switch(environment.toLowerCase()) {
    case 'test':
      mobiConfig.mobi_version = process.env.MOBI_VERSION || "4_36_0"
      mobiConfig.base_url = "http://mobiletest.medadvisor.com.au/" + mobiConfig.mobi_version + "/"
      mobiConfig.username = "satisha@medadvisor.net.au"
      mobiConfig.password = "asdfADSF12!@"
      return mobiConfig

    case 'prod':
      mobiConfig.mobi_version = process.env.MOBI_VERSION || "4_36_0"
      mobiConfig.base_url = "http://mobiletest.medadvisor.com.au/" + mobiConfig.mobi_version + "/"
      mobiConfig.username = "satisha@medadvisor.net.au"
      mobiConfig.password = "asdfADSF12!@"
      return mobiConfig
    
    default:
      throw Error(`ENV => ${environment} is NOT defined for APP => ${applicationName}`)
  }  

}

module.exports = getConfigForMobi